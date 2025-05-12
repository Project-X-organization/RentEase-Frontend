export default function FormField({ label, placeholder, options, register, name, errors, required }) {
    return (
      <div className="mb-5">
        <label className="block text-lg font-semibold text-gray-700 mb-1">{label}</label>
  
        {options ? (
          <select
            {...register(name, required ? { required: `${label} is required` } : {})}
            className="w-full border border-[#14AE5C] rounded p-2"
          >
            <option value="">Select one</option>
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            {...register(name, required ? { required: `${label} is required` } : {})}
            className="w-full border border-[#14AE5C] rounded p-2"
            placeholder={placeholder}
          />
        )}
  
        {/* Show validation error */}
        {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>}
      </div>
    );
  }
  