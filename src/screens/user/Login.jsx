import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import FormContainer from "../../components/user/3-Forms/FormContainer";
import FormField from "../../components/user/3-Forms/FormField";
import BottomButtons from "../../components/user/3-Forms/BottomButtons";

const schema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().required("Password is required"),
});

const UserLogin = () => {
    const { register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(schema)});
    const navigate = useNavigate();

    const onsubmit = (data) =>
    {
        console.log("User Login successful", data);
        alert("User Login successful");
        navigate("/user/home");//navigate to home page
    };

    return (
        <FormContainer>
            <h1 className="text-center text-[#015A05] lg:text-5xl text-2xl font-bold mt-8 mb-4 lg:my-4 lg:mb-8">Sign in</h1>
            <p className="text-center text-gray-400 lg:text-2xl lg:mb-12 mb-4">Welcome back</p>
            <form onSubmit={handleSubmit(onsubmit)} className="w-full mx-auto">
                <FormField label="Email Address" placeholder="Enter your email address" name="email" type="email" register={register} errors={errors} />
                <FormField label="Password" placeholder="Enter your password" name="password" type="password" register={register} errors={errors} />
                <div className="flex justify-end lg:text-md mb-4">
                    <Link to="/user/forgot-password" className="text-[#428242] hover:text-lg hover:text-green-800">Forgot Password?</Link>
                </div>
                <BottomButtons label="Login"/>
                <p className="text-center lg:text-lg mb-12 mt-[-40px]">Don't have an account? <Link to="/user/signup" className="text-[#428242] hover:text-xl hover:text-green-800">Sign up</Link></p>
            </form>
        </FormContainer>
    );
};

export default UserLogin;