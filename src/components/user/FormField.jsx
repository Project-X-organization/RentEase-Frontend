export default function FormField({ label, placeholder, type="text",  register, name, errors }) {

    return (
      <div className="mb-5">
        <label className="block text-lg font-semibold text-green-700 mb-1">{label}</label>
  
        <input
            type={type}
            {...register(name)}
            className="w-full border border-gray-500 rounded p-2 lg:placeholder:text-lg placeholder:text-black lg:h-16 bg-transparent"
            placeholder={placeholder}
        />
  
        {/* Show validation error */}
        {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>}
      </div>
    );
}
