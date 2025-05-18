import { useNavigate } from "react-router-dom";
import OTPVerification from "../../components/agent/password/VerifyPassword";

export default function AgentVerifyPassword() {
    const navigate = useNavigate();

    const handleOTPVerification = (otp) => {
        console.log("OTP entered:", otp);
        // Perform OTP verification logic here (e.g., API call)
        alert("Email verified successfully!");
        navigate("/agent/login");
    };
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
            <OTPVerification onVerify={handleOTPVerification} email="MyCar***ker@gmail.com" title="Password Change" buttonLabel="Password Change"/>
        </div>
      </div>
    </div>
  );
}
