"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navabar/navbar";
import Brand from "@/components/brand/brand";
import SignupForm from "@/components/auth-Forms/SignupForm";
import { useAuthStore } from "@/store/authStore";
import { ROUTES } from "@/lib/routes";

const Signup = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    if (isLoggedIn) {
      router.push(ROUTES.HOME);
    }
  }, [isLoggedIn, router]);
  return (
    <>
      <Navbar />
      <div
        className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-5 py-8 sm:py-0"
        style={{ backgroundImage: "url('/assets/images/bg.png')" }}
      >
        <div className="w-full sm:w-auto">
          <SignupForm />
        </div>
      </div>
      <Brand />
    </>
  );
};

export default Signup;
