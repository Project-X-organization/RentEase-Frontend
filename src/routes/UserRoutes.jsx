import { Routes, Route } from "react-router-dom";
import RentalAgreement from "../screens/user/RentalAgreement";
import LandingPage from "../screens/user/Landing";

const UserRoutes = () => {
    return (
        <Routes>
            <Route index element={<LandingPage/>}/>
            <Route path="/rental-agreement" element={<RentalAgreement />} />
        </Routes>
    );
};

export default UserRoutes;