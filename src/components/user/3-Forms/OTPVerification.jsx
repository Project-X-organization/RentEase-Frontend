import { useState } from "react";

const OTPVerification = ({ onVerify, email }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  // Handle input change
  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Allow only digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input field if a digit is entered
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Handle backspace and move focus
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  // Submit OTP
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOTP = otp.join("");
    if (enteredOTP.length === 6) {
      onVerify(enteredOTP); // Callback function to verify OTP
    } else {
      alert("Please enter all 6 digits.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <h2 className="text-3xl lg:text-4xl text-[#015A05] font-semibold mt-4">Verify Your Email</h2>
      <h3 className="lg:text-xl w-[70%] text-center my-6 lg:my-12">Enter The Six Digit Code Tha Was Sent To {email}</h3>
      <form onSubmit={handleSubmit} className="flex gap-2">
        {otp.map((value, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-8 h-12 lg:w-20 lg:h-24 text-center lg:text-3xl font-bold border rounded bg-green-200 focus:ring focus:ring-green-500"
          />
        ))}
      </form>
      <button className="w-[65%] p-2 lg:p-4 bg-gray-100 mt-8 lg:mt-12 hover:bg-gray-300 lg:text-lg">Resend Code</button>
      <button
        onClick={handleSubmit}
        className="mt-4 lg:px-6 p-2 lg:py-4 w-[65%] bg-[#015A05] text-white tlg:ext-lg rounded hover:bg-green-800 hover:scale-110"
      >
        Confirm Email
      </button>
    </div>
  );
};

export default OTPVerification;
