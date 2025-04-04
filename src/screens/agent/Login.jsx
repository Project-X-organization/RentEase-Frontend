import LoginForm from "../../components/agent/Login/LoginForm";

export default function AgentLogin() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side (Logo + Banner) */}
      <div className="md:w-1/2 flex flex-col relative">
        {/* Logo at the top left */}
        <img src="/logo.png" alt="Logo" className="w-28 lg:w-40 h-auto mx-auto lg:mb-5 lg:ml-8 lg:mt-5 mt-4" />

        {/* Banner (slightly smaller than form) */}
        <div className="flex-grow flex">
          <img
            src="/Form-banner.png"
            alt="Signup Banner"
            className="rounded-lg lg:w-full h-[85%] mt-5 lg:ml-5 mx-auto"
          />
        </div>
      </div>

      {/* Right Side (Login Form) - Increased Width & Padding */}
      <div className="md:w-1/2 flex items-center justify-center lg:px-5 px-2">
        <div className="w-full h-full"> {/* Increased form container width */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
