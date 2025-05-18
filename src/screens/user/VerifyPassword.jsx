import { useNavigate } from "react-router-dom";
import OTPVerification from "../../components/user/3-Forms/OTPVerification";
import FormContainer from "../../components/user/3-Forms/FormContainer";

const VerifyPassword = () => {
    const navigate = useNavigate();

    const handleOTPVerification = (otp) => {
        console.log("OTP entered:", otp);
        // Perform OTP verification logic here (e.g., API call)
        alert("Email verified successfully!");
        navigate("/user/login");
    };

    return (
        <FormContainer>
            <OTPVerification onVerify={handleOTPVerification} email="MyCar***ker@gmail.com" title="Password Change" buttonLabel="Password Change"/>
        </FormContainer>
    );
};

export default VerifyPassword;
