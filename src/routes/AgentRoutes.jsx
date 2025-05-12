import { Routes, Route } from "react-router-dom";
import AgentSignup from "../screens/agent/Signup";
import AgentLogin from "../screens/agent/Login";
import AgentVerification from "../screens/agent/Verification";
import AgentDashboard from "../screens/agent/Dashboard";
import NewListings from "../screens/agent/NewListings";
import SubmittedListings from "../screens/agent/SubmittedListings";
import QueriedListings from "../screens/agent/QueriedListings";
import ApprovedListings from "../screens/agent/ApprovedListings";
import EditExistingListings from "../screens/agent/EditExistingListings";
import ListedListings from "../screens/agent/LettingListings";
import RentedListings from "../screens/agent/RentedListings";
import DeletedListings from "../screens/agent/DeletedListings";

const AgentRoutes = () => {
    return (
        <Routes>
            <Route path="signup" element={<AgentSignup/>} />
            <Route path="login" element={<AgentLogin/>} />
            <Route path="verification" element={<AgentVerification/>} />
            <Route path="dashboard" element={<AgentDashboard/>} />
            <Route path="dashboard/new-listing" element={<NewListings />}/>
            <Route path="dashboard/submitted-listings" element={<SubmittedListings />}/>
            <Route path="dashboard/queried-listings" element={<QueriedListings />} />
            <Route path="dashboard/approved-listings" element={<ApprovedListings />} />
            <Route path="dashboard/edit-existing-listings" element={<EditExistingListings />} />
            <Route path="dashboard/letting-listings" element={<ListedListings />} />
            <Route path="dashboard/rented-listings" element={<RentedListings />} />
            <Route path="dashboard/deleted-listings" element={<DeletedListings />} />
        </Routes>
    );
};

export default AgentRoutes;