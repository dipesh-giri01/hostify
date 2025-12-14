"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navabar/navbar";
import Brand from "@/components/brand/brand";
import SigninForm from "@/components/auth-Forms/SigninForm";
import { useAuthStore } from "@/store/authStore";
import { ROUTES } from "@/lib/routes";

export default function Signin() {
  const router = useRouter();
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    if (isLoggedIn) {
      router.push(ROUTES.PROPERTIES);
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
          <SigninForm />
        </div>
      </div>
      <Brand />
    </>
  );
}
