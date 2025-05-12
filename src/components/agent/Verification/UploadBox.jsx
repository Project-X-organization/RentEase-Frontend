import { Upload } from "lucide-react";

export default function UploadBox({ label, register, name, errors, required }) {
  return (
    <div className="flex flex-col items-center justify-center w-full lg:mt-16">
      <label className="border border-[#14AE5C] rounded-lg shadow-md w-full h-28  flex flex-col items-center justify-center space-y-2 bg-white hover:scale-110 hover:bg-gray-200 cursor-pointer transition">
        <Upload className="text-gray-500 w-6 h-6" />
        <span className="text-[#14AE5C] font-medium lg:text-lg text-center">{label}</span>
        <span className="text-md text-[#14AE5C]">Size: 5MB</span>

        {/* Hidden file input */}
        <input
          type="file"
          {...register(name, required ? { required: `${label} is required` } : {})}
          className="hidden"
        />
      </label>

      {/* Show error message if validation fails */}
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>}
    </div>
  );
}
