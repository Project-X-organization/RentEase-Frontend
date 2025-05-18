import { Routes, Route } from "react-router-dom";
import RentalAgreement from "../screens/user/RentalAgreement";
import UserSignUp from "../screens/user/SignUp";
import UserLogin from "../screens/user/Login";
import VerifyOTP from "../screens/user/VerifyOTP";
import Feedback from "../screens/user/Feedback";
import ForgotPassword from "../screens/user/ForgotPassword";
import VerifyPassword from "../screens/user/VerifyPassword";

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="signup" element={<UserSignUp />}/>
            <Route path="login" element={<UserLogin />}/>
            <Route path="verifyOTP" element={<VerifyOTP />}/>
            <Route path="forgot-password" element={<ForgotPassword />}/>
            <Route path="verify-password" element={<VerifyPassword />}/>
            <Route path="rental-agreement" element={<RentalAgreement />} />
            <Route path="feedback" element={<Feedback />}/>
        </Routes>
    );
};

export default UserRoutes;