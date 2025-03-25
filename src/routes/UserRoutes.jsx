import { Routes, Route } from "react-router-dom";
import RentalAgreement from "../screens/user/RentalAgreement";

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/rental-agreement" element={<RentalAgreement />} />
        </Routes>
    );
};

export default UserRoutes;