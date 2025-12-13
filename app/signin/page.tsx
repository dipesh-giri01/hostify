import Navbar from "@/components/navabar/navbar";
import Brand from "@/components/brand/brand";
import SigninForm from "@/components/SigninForm";

const Signin = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-cover bg-center flex items-center justify-center p-5" style={{ backgroundImage: "url('/assets/images/bg.png')" }}>
        <SigninForm />
      </div>
      <Brand />
    </>
  );
};

export default Signin;
