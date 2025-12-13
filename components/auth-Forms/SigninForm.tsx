"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ZodError } from "zod";
import { Person, LockIcon } from "@/components/icons";
import Button from "@/components/button/Button";
import { signInSchema } from "@/lib/validation/auth";
import { useAuthStore } from "@/store/authStore";
import { ROUTES } from "@/lib/routes";

const hashPassword = async (password: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

const SigninForm = () => {
  const router = useRouter();
  const { login } = useAuthStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const validatedData = signInSchema.parse(formData);
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      const user = users[validatedData.email];

      if (!user) {
        setErrors({ email: 'Email not found. Please sign up first.' });
        setIsLoading(false);
        return;
      }

      const hashedInputPassword = await hashPassword(validatedData.password);
      if (user.password !== hashedInputPassword) {
        setErrors({ password: 'Incorrect password' });
        setIsLoading(false);
        return;
      }

      login(validatedData.email);
      router.push(ROUTES.PROPERTIES);
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
    <div className="signin-form-container">
      <h1 className="signin-form-title">
        Sign In
      </h1>
      
      <div className="signin-form-content">
        <form className="signin-form-fields" onSubmit={handleSubmit}>
          <div className="signin-form-inputs">
            <div className="auth-input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
              <Person className="w-5 h-5" />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <div className="auth-input-wrapper">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <LockIcon />
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <Button type="submit" variant="primary" className="signin-button" disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign In"}
          </Button>
        </form>

        <div className="signin-divider" />

        <div className="signin-social-section">
          <p className="signin-social-label">Or sign in with</p>
          
          <div className="signin-social-buttons">
            <button className="signin-social-button">
              <Image
                src="/assets/images/google.png"
                alt="Google"
                width={40}
                height={40}
              />
              <span>Google</span>
            </button>
            <button className="signin-social-button">
              <Image
                src="/assets/images/facebook.png"
                alt="Facebook"
                width={40}
                height={40}
              />
              <span>Facebook</span>
            </button>
            <button className="signin-social-button">
              <Image
                src="/assets/images/apple.png"
                alt="Apple"
                width={40}
                height={40}
              />
              <span>Apple</span>
            </button>
          </div>
        </div>

        <div className="signin-signup-link">
          Don't have an account yet?{" "}
          <Link href={ROUTES.SIGNUP} className="text-orange-500 font-semibold hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
