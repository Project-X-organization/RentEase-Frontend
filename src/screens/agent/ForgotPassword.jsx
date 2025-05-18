import ForgotPasswordForm from "../../components/agent/password/ForgotPasswordForm";

export default function AgentForgotPassword() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side (Logo + Banner) */}
      <div className="lg:w-1/2 flex flex-col relative">
        {/* Logo at the top left */}
        <img src="/logo.png" alt="Logo" className="w-28 lg:w-40 h-auto mb-5 lg:ml-8 lg:mt-5 mt-4 mx-auto" />

        {/* Banner (slightly smaller than form) */}
        <div className="flex-grow flex">
          <img
            src="/Form-banner.png"
            alt="Signup Banner"
            className="rounded-lg lg:w-full h-[85%]  lg:mt-5 lg:ml-5 mx-auto"
          />
        </div>
      </div>

      {/* Right Side - Signup Form (Full Height & Width) */}
      <div className="md:w-1/2 flex justify-center">
        <div className="w-full h-full">
          <ForgotPasswordForm/>
        </div>
      </div>
    </div>
  );
}
