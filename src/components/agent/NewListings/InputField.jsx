const InputField = ({ label, name, type = "text", placeholder, options, register, errors }) => {

    return (
      <div className="mb-6">
        <label className="block text-gray-700 mt-8 lg:text-xl font-semibold">{label}</label>
  
        {/* Regular Text Field */}
        {type === "text" && (
          <input
            {...register(name, { required: `${label} is required` })}
            type="text"
            className="w-full border border-gray-400 focus:border-black focus:outline-none px-2 py-4 lg:text-xl lg:mt-4"
            placeholder={placeholder}
          />
        )}
  
        {/* Long Text Area */}
        {type === "textarea" && (
          <textarea
            {...register(name, { required: `${label} is required` })}
            className="w-full border border-gray-400 focus:border-black focus:outline-none px-2 py-2 lg:h-40 lg:mt-4"
          />
        )}
  
        {/* Radio Button Options */}
        {type === "select" && (
          <select
            {...register(name, { required: `${label} is required` })}
            className="w-full border border-gray-300 rounded p-2 lg:py-4 lg:mt-4"
          >
            <option value="">Select one</option>
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        )}
  
        {/* Error Message */}
        {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>}
      </div>
    );
  };
  
  export default InputField;
  