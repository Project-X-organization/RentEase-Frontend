import LoginForm from "../../components/agent/LoginForm";

export default function AgentLogin() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side (Logo + Banner) */}
      <div className="md:w-1/2 flex flex-col relative">
        {/* Logo at the top left */}
        <img src="/logo.png" alt="Logo" className="w-48 h-auto mb-5 ml-8 mt-5" />

        {/* Banner (slightly smaller than form) */}
        <div className="flex-grow flex">
          <img
            src="/banner.png"
            alt="Signup Banner"
            className="rounded-lg lg:w-full w-[92%] h-[85%] mt-5 ml-5"
          />
        </div>
      </div>

      {/* Right Side (Login Form) - Increased Width & Padding */}
      <div className="md:w-1/2 flex items-center justify-center px-5">
        <div className="w-full h-[90%]"> {/* Increased form container width */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
