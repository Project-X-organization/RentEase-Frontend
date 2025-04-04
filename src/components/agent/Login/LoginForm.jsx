import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("User Logged In:", data);
    alert("Agent Login Successful!");
    navigate("/agent/verification"); // Redirect to Verification page
  };

  return (
    <div className="flex flex-col justify-start items-center bg-white w-full h-full py-2 lg:py-16">
      <div className="bg-white shadow-md rounded-lg px-3 lg:px-16 py-12 w-full h-full flex flex-col justify-start">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#428242] text-center my-4">Sign in</h2>
        <p className="text-lg lg:text-2xl text-gray-500 text-center mt-2">Welcome back!</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full max-w-2xl mx-auto">
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium">Email Address</label>
              <input
                {...register("email", { required: "Email is required" })}
                className="w-full border border-[#14AE5C] rounded lg:p-4 p-2 text-xl"
                placeholder="Enter your email"
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            <div className="relative">
              <label className="block text-lg font-medium">Password</label>
              <input
                type={showPassword ? "text":"password"}
                {...register("password", { required: "Password is required" })}
                className="w-full border border-[#14AE5C] rounded lg:p-4 p-2 text-xl"
                placeholder="Enter your password"
              />
              <span className="absolute right-4 top-1/2 mt-4 transform -translate-y-1/2 cursor-pointer" onClick={() =>{setShowPassword((prev) => (!prev))}}>
                {showPassword ? <Eye size={20} />: <EyeOff size={20} />}
              </span>
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>

            <div className="flex justify-end text-md">
              <Link to="#" className="text-[#428242] hover:text-lg hover:text-green-800">Forgot Password?</Link>
            </div>

            <button
              type="submit"
              className="w-full hover:bg-green-700 hover:scale-105 bg-[#428242] text-white rounded lg:py-4 py-2 lg:text-2xl text-base font-semibold"
            >
              Log in
            </button>

            <p className="text-lg text-gray-500 text-center mt-6">
              Don't have an account? <Link to="/agent/signup" className="text-[#428242] font-semibold hover:text-green-800 hover:text-xl">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
