import {Link} from "react-router-dom"
import { IoMenu } from "react-icons/io5";
const Header = () => {
    return (
        <div className="relative z-30">
        <div className="bg-[#020903B2] flex justify-between items-center font-primary md:px-[50px] px-[30px] py-[10px] w-full fixed top-0">
            <div className="flex items-center space-x-2">
            <img src="./home-logo.png" alt="Logo" />
            <span className="mt-5 text-white">MyCareTaker</span>
            </div>
            <div className="lg:space-x-7 space-x-5 lg:text-[18px] text-[16px] text-[#58FA60] md:flex items-center hidden">
            <Link to="#">Home</Link>
            <Link to="#">Property</Link>
            <Link to="#">Product</Link>
            <Link to="#">Contact</Link>
            </div>
            <div className="flex items-center space-x-6">
                <Link to="" className="bg-[#015A05] text-[#FFFFFF] text-[14px] px-[16px] py-[8px] rounded-[6px] w-[100px] text-center sm:block hidden">Agent</Link>
                <IoMenu className="text-white font-[800] text-[25px]"/>
            </div>
        </div>
        </div>
    );
}
export default Header;