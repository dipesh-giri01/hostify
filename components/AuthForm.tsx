"use client";

import Link from "next/link";
import Image from "next/image";
import { Person, LockIcon } from "@/app/icons";
import Button from "@/components/button/Button";

interface AuthFormProps {
  title: string;
  submitButtonText: string;
  linkText: string;
  linkHref: string;
  isSignup?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  submitButtonText,
  linkText,
  linkHref,
  isSignup = false,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
        {title}
      </h1>
      <form className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded px-3 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            <Person />
          </span>
        </div>

        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded px-3 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            <LockIcon />
          </span>
        </div>

        {isSignup && (
          <div className="relative">
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border border-gray-300 rounded px-3 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
              <LockIcon />
            </span>
          </div>
        )}

        <Button type="submit" variant="primary" className="w-50 cursor-pointer">
          {submitButtonText}
        </Button>
      </form>

      <div className="flex items-center my-2">
        <div className="flex-grow border-t border-gray-200" />
        <span className="mx-4 text-gray-400 text-sm">Or sign {isSignup ? "up" : "in"} with</span>
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
        {linkText}{" "}
        <Link href={linkHref} className="text-orange-500 font-semibold hover:underline">
          {isSignup ? "Sign in" : "Sign up"}
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;
