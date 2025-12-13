import Navbar from "@/components/navabar/navbar";
import Brand from "@/components/brand/brand";
import SignupForm from "@/components/auth-Forms/SignupForm";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-cover bg-center flex items-center justify-center p-5" style={{ backgroundImage: "url('/assets/images/bg.png')" }}>
        <SignupForm />
      </div>
      <Brand />
    </>
  );
};

export default Signup;
