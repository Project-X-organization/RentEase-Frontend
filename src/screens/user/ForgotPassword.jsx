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
    email: yup.string().email("Invalid email format").required("Email is required"),
    newPassword: yup.string().min(6, "Password must be at least 6 characters").matches(/[A-Z]/, "Passwords must contain at least one uppercase letter").matches(/[a-z]/, "Passwords must contain at least one lowercase letter").matches(/[0-9]/, "Passwords must contain at least one digit").matches(/[@$!%*?&]/, "Passwords must contain at least one special character").required("New Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Confirm password is required"),
});

const ForgotPassword = () => {
    const { register, handleSubmit, formState: {errors}, watch, trigger } = useForm({resolver: yupResolver(schema), mode: "onChange",}); //Enables real time validation

    const passwordValue = watch("newPassword"); //Watch password field for changes
    

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
        navigate("/user/verify-password");//navigate to OTP Password Verification page
    };

    return (
        <FormContainer>
            <h1 className="text-center text-[#015A05] lg:text-4xl text-2xl font-bold my-8 lg:my-4 lg:mb-12">Forgot Password</h1>
            <h3 className="lg:text-xl w-full text-center my-6 lg:my-12">New password should be different from old password</h3>
            <form onSubmit={handleSubmit(onsubmit)} className="w-full mx-auto">
                <FormField label="Email Address" placeholder="Enter your email address" name="email" type="email" register={register} errors={errors} />
                <FormField label="Password" placeholder="Enter your password" name="password" type="password" register={register} errors={errors} />
                <FormField label="Confirm Password" placeholder="Confirm your pasword" name="confirmPassword" type="password" register={register} errors={errors} />
                <button
                    onClick={handleSubmit}
                    className="mt-4 lg:px-6 p-2 lg:py-4 w-full bg-[#015A05] text-white lg:text-lg rounded hover:bg-green-800 hover:scale-110"
                >
                    Send Confirmation OTP
                </button>
            </form>
        </FormContainer>
    );
};

export default ForgotPassword;