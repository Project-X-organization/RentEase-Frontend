import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import AgentRoutes from "./routes/AgentRoutes";
import UserRoutes from "./routes/UserRoutes";

export default function App () {
  return (
    <Router>
      <Routes>
        {/*User Routes*/}
        <Route path="/*" element={<UserRoutes />}/>

        {/*Agent Routes*/}
        <Route path="/agent/*" element={<AgentRoutes />}/>

        {/*Admin Routes*/}
        <Route path="/admin/*" element={<AdminRoutes />}/>
      </Routes>
    </Router>
  );
};
