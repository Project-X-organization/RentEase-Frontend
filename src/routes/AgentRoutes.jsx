import { Routes, Route } from "react-router-dom";
import AgentSignup from "../screens/agent/Signup";
import AgentLogin from "../screens/agent/Login";
import AgentVerification from "../screens/agent/Verification";
import AgentDashboard from "../screens/agent/Dashboard";

const AgentRoutes = () => {
    return (
        <Routes>
            <Route path="/signup" element={<AgentSignup/>} />
            <Route path="/login" element={<AgentLogin/>} />
            <Route path="/verification" element={<AgentVerification/>} />
            <Route path="/dashboard" element={<AgentDashboard/>} />
        </Routes>
    );
};

export default AgentRoutes;