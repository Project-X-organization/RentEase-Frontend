import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  newPassword: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Passwords must contain at least one uppercase letter").matches(/[a-z]/, "Passwords must contain at least one lowercase letter").matches(/[0-9]/, "Passwords must contain at least one digit").matches(/[@$!%*?&]/, "Passwords must contain at least one special character")
    .required("New Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("Confirm Password is required"),
});

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("User Signed Up:", data);
    alert("User Sign Up Successful!");
    navigate("/agent/verify-password"); // Redirect to verify password page
  };

  return (
    <div className="flex flex-col justify-start items-center bg-white w-full h-full py-2 lg:py-16">
      <div className="bg-white shadow-md rounded-lg px-3 lg:px-16 py-12 w-full h-full flex flex-col justify-start">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#428242] text-center mb-4 mt-4">Forgot Password</h2>
        <p className="text-lg lg:text-2xl text-gray-500 text-center mt-2">
          New Password must be different from the old password
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-8">
          <div className="space-y-8">
            {/* Email Address */}
            <div>
              <label className="block text-lg font-medium">Email Address</label>
              <input {...register("email")} className="w-full border border-[#14AE5C] rounded lg:p-4 p-2 text-lg" placeholder="example@gmail.com" />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            {/*New Password */}
            <div className="relative">
              <label className="block text-lg font-medium">New Password</label>
              <div className="relative"><input
                type={showPassword ? "text":"password"}
                {...register("password")}
                className="w-full border border-[#14AE5C] rounded lg:p-4 p-2 text-lg"
                placeholder="Enter password"
              />
              <span className="absolute right-4 lg:top-1/4 top-2 mt-4 transform -translate-y-1/2 cursor-pointer" onClick={() =>{setShowPassword((prev) => (!prev))}}>
                {showPassword ? <Eye size={20} />: <EyeOff size={20} />}
              </span></div>
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-lg font-medium">Confirm Password</label>
              <div className="relative"><input
                type={showPassword ? "text":"password"}
                {...register("confirmPassword")}
                className="w-full border border-[#14AE5C] rounded lg:p-4 p-2 text-lg"
                placeholder="Confirm your password"
              />
              <span className="absolute right-4 lg:top-1/4 top-2 mt-4 transform -translate-y-1/2 cursor-pointer" onClick={() =>{setShowPassword((prev) => (!prev))}}>
                {showPassword ? <Eye size={20} />: <EyeOff size={20} />}
              </span></div>
              <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-[#428242] text-white rounded lg:py-4 font-semibold py-2 text-base flex items-center justify-center gap-2 hover:scale-105 hover:bg-green-700">
              <FaRegCheckCircle /> Send Confirmation OTP
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}
