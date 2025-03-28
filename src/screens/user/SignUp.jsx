import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormContainer from "../../components/user/3-Forms/FormContainer";
import FormField from "../../components/user/3-Forms/FormField";
import BottomButtons from "../../components/user/3-Forms/BottomButtons";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").matches(/[A-Z]/, "Passwords must contain at least one uppercase letter").matches(/[a-z]/, "Passwords must contain at least one lowercase letter").matches(/[0-9]/, "Passwords must contain at least one digit").matches(/[@$!%*?&]/, "Passwords must contain at least one special character").required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Confirm password is required"),
});

const UserSignUp = () => {
    const { register, handleSubmit, formState: {errors}, watch, trigger } = useForm({resolver: yupResolver(schema), mode: "onChange",}); //Enables real time validation

    const passwordValue = watch("password"); //Watch password field for changes
    

    // Trigger confirmPassword validation whenever password changes
    useEffect(() => {
        if (passwordValue) {
            trigger("confirmPassword");
        }
    }, [passwordValue, trigger])
    
    const [receiveInfo, setReceiveInfo] = useState(true);
    const navigate = useNavigate();

    const onsubmit = (data) =>
    {
        console.log("User Account Creation successful", data);
        alert("User Account Creation successful");
        navigate("/verifyOTP");//navigate to OTP vVerification page
    };

    return (
        <FormContainer>
            <h1 className="text-center text-green-800 lg:text-4xl text-2xl font-bold my-8 lg:my-4 lg:mb-12">Create an account</h1>
            <form onSubmit={handleSubmit(onsubmit)} className="w-full mx-auto">
                <FormField label="Full Name" placeholder="Enter your full name" name="fullName" register={register} errors={errors} />
                <FormField label="Email Address" placeholder="Enter your email address" name="email" type="email" register={register} errors={errors} />
                <FormField label="Password" placeholder="Enter your password" name="password" type="password" register={register} errors={errors} />
                <FormField label="Confirm Password" placeholder="Confirm your pasword" name="confirmPassword" type="password" register={register} errors={errors} />
                <div className="flex my-8"><input
                    type="checkbox"
                    checked={!receiveInfo}
                    onChange={() => setReceiveInfo(!receiveInfo)}
                    className="w-5 h-5 mr-2 accent-green-500"
                />
                <p className="text-sm lg:text-lg text-black">if you do not wish to receive marketing information about our products and special offers, please check this box</p></div>
                <BottomButtons label="Create Account"/>
                <p className="text-center lg:text-lg mb-12 mt-[-40px]">Already have an account? <Link to="/login" className="text-green-500 hover:text-xl hover:text-green-800">Login</Link></p>
            </form>
        </FormContainer>
    );
};

export default UserSignUp;