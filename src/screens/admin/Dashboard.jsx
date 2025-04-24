import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, User, LayoutDashboard, BriefcaseBusiness, Settings } from "lucide-react";
import SideBar from "../../components/admin/Sidebar";
import Home from "../../components/admin/Home";
import ProfilePage from "../../components/admin/Profile";
import Payment from "../../components/admin/Payment/PaymentSection";
import FadeInSection from "../../components/FadeInSection";

const AdminDashboard = () => {
    const menus = [
        <span className="flex"><LayoutDashboard className="mr-2 mt-1"/><span>Dashboard</span></span>,
        <span className="flex"><User className="mr-2 mt-1"/><span>Profile</span></span>,
        <span className="flex"><BriefcaseBusiness className="mr-2 mt-1"/><span>Payments</span></span>,
        <span className="flex"><Settings className="mr-2 mt-1"/><span>Settings</span></span>
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const [showSidebar, setShowSidebar] = useState(false);
    const [opacity, setOpacity] = useState(false);
    const admin = "Esther Oyedeji";
    const user = "Esther";

    return (
        <div className="lg:flex relative pt-4 lg:pt-0">
            {opacity && <div className="absolute inset-0 bg-black bg-opacity-50 z-40 min-h-screen"></div>}
            <img src="/logo.png" alt="MyCareTaker Logo" className="lg:hidden w-32 top-8 mx-auto mb-4"/>
            {showSidebar === false && <button className="lg:hidden absolute z-10 top-8 right-8" onClick={() => {
                setShowSidebar(true);
                setOpacity(true);
            }
                }><Menu/></button>}
            {showSidebar && <div className="flex lg:hidden absolute top-0 left-0 z-[100]">
                <SideBar menus={menus} activeIndex={activeIndex} setActiveIndex={setActiveIndex} admin={admin} className="w-[50%]"/>
                <FadeInSection type="slideLeft"><button className="lg:hidden block z-100 mt-8 ml-2 h-8 text-white" onClick={() => {
                    setShowSidebar(false);
                    setOpacity(false);
                }}><X/></button></FadeInSection></div>}
            <SideBar menus={menus} activeIndex={activeIndex} setActiveIndex={setActiveIndex} admin={admin} className="lg:block hidden"/>
            {activeIndex === 0 && <Home setOpacity={setOpacity} />}
            {activeIndex === 1 && <ProfilePage />}
            {activeIndex === 2 && <Payment setOpacity={setOpacity}/>}
        </div>
    );
};

export default AdminDashboard;