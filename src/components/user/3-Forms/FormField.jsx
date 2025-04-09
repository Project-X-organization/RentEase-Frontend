import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function FormField({ label, placeholder, type="text",  register, name, errors }) {
    const [showPassword, setShowPassword] = useState(false);
    const isTypePassword = type === "password"; //Check if Form Field is of type password

    return (
      <div className="mb-5 relative">
        <label className="block lg:text-lg font-semibold text-[#001501] mb-1">{label}</label>
  
        <div className="relative"><input
            type={isTypePassword && showPassword ? "text" : type}
            {...register(name)}
            className="w-full border border-[#14AE5C] rounded p-2 lg:placeholder:text-lg lg:h-16 bg-transparent"
            placeholder={placeholder}
        />

        {isTypePassword &&
            <span className="absolute right-4 lg:top-5 top-2 mt-4 transform -translate-y-1/2 cursor-pointer" onClick={() =>{setShowPassword((prev) => (!prev))}}>
                {showPassword ? <Eye size={20} />: <EyeOff size={20} />}
            </span>
        }</div>
  
        {/* Show validation error */}
        {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>}
      </div>
    );
}
