"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ZodError } from "zod";
import { Person, LockIcon } from "@/components/icons";
import Button from "@/components/button/Button";
import { signUpSchema } from "@/lib/validation/auth";
import { useAuthStore } from "@/store/authStore";
import { ROUTES } from "@/lib/routes";

const hashPassword = async (password: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

const SignupForm = () => {
  const router = useRouter();
  const { login } = useAuthStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    try {
      const validatedData = signUpSchema.parse(formData);
      const hashedPassword = await hashPassword(validatedData.password);
      const users = JSON.parse(localStorage.getItem('users') || '{}');

      if (users[validatedData.email]) {
        setErrors({ email: 'Email already registered' });
        setIsLoading(false);
        return;
      }

      users[validatedData.email] = { password: hashedPassword };
      localStorage.setItem('users', JSON.stringify(users));

      login(validatedData.email);
      router.push(ROUTES.STAYS);
    } catch (error) {
      if (error instanceof ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          const path = issue.path[0];
          if (path) {
            newErrors[String(path)] = issue.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
        Sign Up
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            <Person />
          </span>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="relative">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            <LockIcon />
          </span>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <div className="relative">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10 ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }`}
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            <LockIcon />
          </span>
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>

        <Button type="submit" variant="primary" className="w-50 cursor-pointer" disabled={isLoading}>
          {isLoading ? "Loading..." : "Sign Up"}
        </Button>
      </form>

      <div className="flex items-center my-2">
        <div className="flex-grow border-t border-gray-200" />
        <span className="mx-4 text-gray-400 text-sm">Or sign up with</span>
        <div className="flex-grow border-t border-gray-200" />
      </div>

      <div className="flex gap-4 justify-center">
        <button className="flex flex-col items-center bg-gray-50 rounded-lg px-6 py-4 border border-gray-200 hover:border-orange-500 transition-colors">
          <Image
            src="/assets/images/google.png"
            alt="Google"
            width={24}
            height={24}
            className="mb-1"
          />
          <span className="text-sm text-gray-700">Google</span>
        </button>
        <button className="flex flex-col items-center bg-gray-50 rounded-lg px-6 py-4 border border-gray-200 hover:border-orange-500 transition-colors">
          <Image
            src="/assets/images/facebook.png"
            alt="Facebook"
            width={24}
            height={24}
            className="mb-1"
          />
          <span className="text-sm text-gray-700">Facebook</span>
        </button>
        <button className="flex flex-col items-center bg-gray-50 rounded-lg px-6 py-4 border border-gray-200 hover:border-orange-500 transition-colors">
          <Image
            src="/assets/images/apple.png"
            alt="Apple"
            width={24}
            height={24}
            className="mb-1"
          />
          <span className="text-sm text-gray-700">Apple</span>
        </button>
      </div>

      <div className="text-center mt-2 text-sm text-gray-700">
        Already have an account?{" "}
        <Link href={ROUTES.SIGNIN} className="text-orange-500 font-semibold hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
