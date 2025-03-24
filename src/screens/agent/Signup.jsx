import SignupForm from "../../components/agent/SignupForm";

export default function AgentSignup() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen p-[5px]">
      {/* Left Side (Logo + Banner) */}
      <div className="md:w-1/2 flex flex-col relative">
        {/* Logo at the top left */}
        <img src="/logo.png" alt="Logo" className="w-48 h-auto mb-5 ml-8 mt-5" />

        {/* Banner (slightly smaller than form) */}
        <div className="flex-grow flex">
          <img
            src="/banner.png"
            alt="Signup Banner"
            className="rounded-lg lg:w-full h-[85%] w-[92%] mt-5 ml-5"
          />
        </div>
      </div>

      {/* Right Side - Signup Form (Full Height & Width) */}
      <div className="md:w-1/2 flex items-center justify-center">
        <div className="w-full h-full">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
