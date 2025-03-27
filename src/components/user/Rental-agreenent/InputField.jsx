export default function InputField({ label, type = "text", placeholder, className, ...props }) {
    return (
      <div className={`flex flex-col ${className}`}>
        <label className="text-gray-700 font-medium">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full my-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          {...props}
        />
      </div>
    );
  }
  
  