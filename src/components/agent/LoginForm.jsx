import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("User Logged In:", data);
  };

  return (
    <div className="flex flex-col justify-start items-center bg-white w-full h-full py-2 lg:py-16">
      <div className="bg-white shadow-md rounded-lg px-2 lg:px-16 py-12 w-full h-full flex flex-col justify-start">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-700 text-center my-4">Sign in</h2>
        <p className="text-lg lg:text-2xl text-gray-500 text-center mt-2">Welcome back!</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full max-w-2xl mx-auto">
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium">Email Address</label>
              <input
                {...register("email", { required: "Email is required" })}
                className="w-full border rounded-lg p-4 text-xl"
                placeholder="Enter your email"
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            <div>
              <label className="block text-lg font-medium">Password</label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="w-full border rounded-lg p-4 text-xl"
                placeholder="Enter your password"
              />
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>

            <div className="flex justify-end text-md">
              <a href="#" className="text-blue-500">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full hover:bg-blue-900 hover:scale-105 bg-blue-600 text-white rounded-lg py-4 text-2xl font-semibold"
            >
              Log in
            </button>

            <p className="text-lg text-gray-500 text-center mt-6">
              Don't have an account? <a href="/" className="text-blue-500 font-semibold">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
