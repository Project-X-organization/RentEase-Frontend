import { Routes, Route } from "react-router-dom";
import RentalAgreement from "../screens/user/RentalAgreement";
import Home from "../screens/user/Home";
import PropertyDescription from "../screens/user/PropertyDescription";
import LandingPage from "../screens/user/Landing";
import UserSignUp from "../screens/user/SignUp";
import UserLogin from "../screens/user/Login";
import Payment from "../screens/user/Payment";
import Reciept from "../screens/user/Reciept";

const UserRoutes = () => {
    return (
        <Routes>
             <Route index element={<LandingPage/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/property/*" element={<PropertyDescription/>}/>
            <Route path="/signup" element={<UserSignUp />}/>
            <Route path="/login" element={<UserLogin />}/>
            <Route path="/rental-agreement" element={<RentalAgreement />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment/*" element={<Reciept />} />
        </Routes>
    );
};

export default UserRoutes;