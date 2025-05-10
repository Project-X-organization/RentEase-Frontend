import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import AgentRoutes from "./routes/AgentRoutes";
import UserRoutes from "./routes/UserRoutes";
import UniversalRoutes from "./routes/UniversalRoutes";

export default function App () {
  return (
    <Router>
      <Routes>
        {/*Universal Routes*/}
        <Route path="/*" element={<UniversalRoutes />}/>

        {/*User Routes*/}
        <Route path="/user/*" element={<UserRoutes />}/>

        {/*Agent Routes*/}
        <Route path="/agent/*" element={<AgentRoutes />}/>

        {/*Admin Routes*/}
        <Route path="/admin/*" element={<AdminRoutes />}/>
      </Routes>
    </Router>
  );
};
