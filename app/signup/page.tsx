import Link from "next/link";
import Navbar from "@/components/navabar/navbar";
import Brand from "@/components/brand/brand";
import AuthForm from "@/components/AuthForm";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-cover bg-center flex items-center justify-center p-5" style={{ backgroundImage: "url('/assets/images/bg.png')" }}>
        <AuthForm
          title="Create Account"
          submitButtonText="Sign Up"
          linkText="I already have an account."
          linkHref="/signin"
          isSignup={true}
        />
      </div>
      <Brand />
    </>
  );
};

export default Signup;
