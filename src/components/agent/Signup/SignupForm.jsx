import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Passwords must contain at least one uppercase letter").matches(/[a-z]/, "Passwords must contain at least one lowercase letter").matches(/[0-9]/, "Passwords must contain at least one digit").matches(/[@$!%*?&]/, "Passwords must contain at least one special character")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("Confirm Password is required"),
});

export default function SignupForm() {
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
    navigate("/agent/login"); // Redirect to login page
  };

  return (
    <div className="flex flex-col items-center bg-white h-[90%] w-full lg:p-6 lg:mt-5 py-8">
      <div className="bg-white shadow-md rounded-lg lg:p-2 px-3 lg:px-6 py-6 lg:p-6 w-full h-full flex flex-col justify-center lg:py-24">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#428242] text-center mb-4 mt-4">Sign Up</h2>
        <p className="text-lg lg:text-2xl text-gray-500 text-center mb-6">
          Sign up and become an agent today
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-lg font-medium">First Name</label>
              <input {...register("firstName")} className="w-full border border-[#14AE5C] rounded lg:p-3 p-2 text-lg" placeholder="Enter first name" />
              <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-lg font-medium">Last Name</label>
              <input {...register("lastName")} className="w-full border border-[#14AE5C] rounded lg:p-3 p-2 text-lg" placeholder="Enter last name" />
              <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-lg font-medium">Phone Number</label>
              <div className="flex border rounded">
                <span className="lg:p-3 p-2 bg-[#428242] text-lg text-white">+234</span>
                <input {...register("phone")} className="w-full lg:p-3 border border-[#14AE5C] p-2 text-lg" placeholder="7012345969" />
              </div>
              <p className="text-red-500 text-sm">{errors.phone?.message}</p>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-lg font-medium">Email Address</label>
              <input {...register("email")} className="w-full border border-[#14AE5C] rounded lg:p-3 p-2 text-lg" placeholder="example@gmail.com" />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            {/* State */}
            <div>
              <label className="block text-lg font-medium">State</label>
              <select {...register("state")} className="w-full border border-[#14AE5C] rounded lg:p-3 p-2 text-lg">
                <option value="">Select State</option>
                <option value="Imo">Imo</option>
                <option value="Lagos">Lagos</option>
              </select>
              <p className="text-red-500 text-sm">{errors.state?.message}</p>
            </div>

            {/* City */}
            <div>
              <label className="block text-lg font-medium">City/Town</label>
              <input {...register("city")} className="w-full border border-[#14AE5C] rounded lg:p-3 p-2 text-lg" placeholder="Enter City" />
              <p className="text-red-500 text-sm">{errors.city?.message}</p>
            </div>

            {/* Country */}
            <div>
              <label className="block text-lg font-medium">Country</label>
              <select {...register("country")} className="w-full border border-[#14AE5C] rounded lg:p-3 p-2 text-lg">
                <option value="Nigeria">Nigeria</option>
              </select>
              <p className="text-red-500 text-sm">{errors.country?.message}</p>
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-lg font-medium">Password</label>
              <div className="relative"><input
                type={showPassword ? "text":"password"}
                {...register("password")}
                className="w-full border border-[#14AE5C] rounded lg:p-3 p-2 text-lg"
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
                className="w-full border border-[#14AE5C] rounded lg:p-3 p-2 text-lg"
                placeholder="Confirm your password"
              />
              <span className="absolute right-4 lg:top-1/4 top-2 mt-4 transform -translate-y-1/2 cursor-pointer" onClick={() =>{setShowPassword((prev) => (!prev))}}>
                {showPassword ? <Eye size={20} />: <EyeOff size={20} />}
              </span></div>
              <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-[#428242] text-white rounded font-semibold lg:py-3 py-2 text-base flex items-center justify-center gap-2 hover:scale-105 hover:bg-green-700 mt-2">
              <FaRegCheckCircle /> Continue
            </button>

            {/* Terms & Conditions */}
            <p className="text-sm text-gray-500 text-center mt-4 mb-4">
              By clicking "Continue" you acknowledge that you have read and understood{" "}
              <Link to="/terms-and-conditions" className="text-blue-500 underline">Terms & Conditions</Link>
            </p>
            
            <p className="text-center lg:text-lg mb-12 mt-410px]">Already have an account? <Link to="/agent/login" className="text-[#428242] font-semibold hover:text-xl hover:text-green-800">Login</Link></p>

          </div>
        </form>
      </div>
    </div>
  );
}
