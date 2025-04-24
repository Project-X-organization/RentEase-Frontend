import { Routes, Route } from "react-router-dom";
import RentalAgreement from "../screens/user/RentalAgreement";
import LandingPage from "../screens/user/Landing";
import UserSignUp from "../screens/user/SignUp";
import UserLogin from "../screens/user/Login";
import VerifyOTP from "../screens/user/VerifyOTP";
import Feedback from "../screens/user/Feedback";
import TermsAndConditionsScreen from "../screens/TermsAndConditions";

const UserRoutes = () => {
    return (
        <Routes>
            <Route index element={<LandingPage/>}/>
            <Route path="/signup" element={<UserSignUp />}/>
            <Route path="/login" element={<UserLogin />}/>
            <Route path="/verifyOTP" element={<VerifyOTP />}/>
            <Route path="/rental-agreement" element={<RentalAgreement />} />
            <Route path="/feedback" element={<Feedback />}/>
            <Route path="terms-and-conditions" element={<TermsAndConditionsScreen/>} />
        </Routes>
    );
};

export default UserRoutes;