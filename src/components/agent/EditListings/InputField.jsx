const InputField = ({ label, name, type = "text", placeholder, options, register, errors, onChange }) => {
  return (
      <div className="mb-6">
          <label className="block text-gray-700 mt-8 lg:text-xl font-semibold">{label}</label>

          {type === "text" && (
              <input
                  {...register(name, {
                      required: `${label} is required`,
                      onChange: onChange,
                  })}
                  type="text"
                  className="w-full border border-[#14AE5C] focus:border-black focus:outline-none px-2 lg:py-4 py-2 mt-2 lg:mt-4"
                  placeholder={placeholder}
              />
          )}

          {type === "textarea" && (
              <textarea
                  {...register(name, {
                      required: `${label} is required`,
                      onChange: onChange,
                  })}
                  className="w-full border border-[#14AE5C] focus:border-black focus:outline-none px-2 py-2 h-28 lg:h-40 mt-2 lg:mt-4"
              />
          )}

          {type === "select" && (
              <select
                  {...register(name, {
                      required: `${label} is required`,
                      onChange: onChange,
                  })}
                  className="w-full border border-[#14AE5C] rounded p-2 lg:py-4 mt-2 lg:mt-4"
              >
                  <option value="">Select one</option>
                  {options.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                  ))}
              </select>
          )}

          {errors[name] && (
              <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
          )}
      </div>
  );
};

export default InputField;
