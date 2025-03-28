const SurveyField = ({ label, name, type = "text", placeholder, options, register, errors }) => {

  return (
    <div className="mb-6">
      <label className="block text-gray-700 mt-8 lg:text-xl font-semibold">{label}</label>

      {/* Regular Text Field */}
      {type === "text" && (
        <input
          {...register(name, { required: "This field is required" })}
          type="text"
          className="w-full border-b border-gray-400 focus:border-green-600 focus:outline-none px-2 py-4 lg:text-xl"
          placeholder={placeholder}
        />
      )}

      {/* Long Text Area */}
      {type === "textarea" && (
        <textarea
          {...register(name, { required: "This field is required" })}
          className="w-full border border-gray-400 focus:border-green-600 focus:outline-none px-2 py-2 lg:h-24 lg:mt-4"
        />
      )}

      {/* Radio Button Options */}
      {type === "radio" && options?.length > 0 && (
        <div className="flex flex-col gap-4 mt-2">
          {options.map((option, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                {...register(name, { required: "Please select an option" })}
                type="radio"
                value={option}
                className="accent-green-600 mr-4 scale-110"
              />
              <span className="lg:text-xl">{option}</span>
            </label>
          ))}
        </div>
      )}

      {/* Error Message */}
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>}
    </div>
  );
};

export default SurveyField;
