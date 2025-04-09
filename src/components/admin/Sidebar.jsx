import { Link } from "react-router-dom";
import { UserRound, LogOut } from "lucide-react";
import FadeInSection from "../FadeInSection";

const SideBar = ({menus, activeIndex, setActiveIndex, admin, className}) => {
    return (
        <FadeInSection type="slideLeft" className={`lg:w-[23%] lg:z-0 ${className}`}><div className="flex flex-col w-full min-h-screen bg-[#F9FCFF] px-2">
            <img src="/logo.png" alt="MyCareTaker Logo" className="w-32 lg:w-48 lg:h-16 mt-4 mb-12" />
            <div className="flex-grow">{menus.map((menu, index) => (
                <button
                    key={menu}
                    className={`w-[95%] my-1 lg:px-6 lg:text-xl lg:py-3 px-3 py-1 hover:scale-105
                        ${activeIndex === index ? "text-white bg-[#015A05] font-semibold lg:rounded-2xl rounded-xl" : "text-black" } `}
                    onClick={() => setActiveIndex(index)}
                >
                    {menu}
                </button>
            ))}</div>
            <div className="flex justify-between border-t lg:pr-8 py-4 justify-self end">
                <div className="bg-[#D9D9D9] lg:p-4 p-2 rounded-full my-auto"><UserRound /></div>
                <div className="lg:w-[70%] w-[90%] lg:text-lg">
                    <p className="font-semibold">{admin}</p>
                    <p>Admin</p>
                </div>
                <LogOut className="my-auto hover:text-red-500 hover:scale-110"/>
            </div>
        </div></FadeInSection>
    );
};

export default SideBar;