import { Routes, Route } from "react-router-dom";
import RentalAgreement from "../screens/user/RentalAgreement";
import Home from "../screens/user/Home";

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/rental-agreement" element={<RentalAgreement />} />
        </Routes>
    );
};

export default UserRoutes;