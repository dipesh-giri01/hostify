import Navbar from "@/components/navabar/navbar";
import Brand from "@/components/brand/brand";
import AuthForm from "@/components/AuthForm";

const Signin = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-cover bg-center flex items-center justify-center p-5" style={{ backgroundImage: "url('/assets/images/bg.png')" }}>
        <AuthForm
          title="Sign In"
          submitButtonText="Sign In"
          linkText="Don't have an account yet?"
          linkHref="/signup"
          isSignup={false}
        />
      </div>
      <Brand />
    </>
  );
};

export default Signin;
