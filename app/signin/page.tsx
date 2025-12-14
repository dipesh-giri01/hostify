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
        className="w-full h-screen bg-cover bg-center flex items-center justify-center p-5"
        style={{ backgroundImage: "url('/assets/images/bg.png')" }}
      >
        <SigninForm />
      </div>
      <Brand />
    </>
  );
}
