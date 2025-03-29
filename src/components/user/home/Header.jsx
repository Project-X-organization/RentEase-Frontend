import {Link} from "react-router-dom";
import {useState} from "react"
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative z-30">
        <div className="bg-[#020903B2] flex justify-between items-center font-primary md:px-[50px] px-[30px] py-[10px] w-full fixed top-0">
            <div className="flex items-center space-x-2">
            <img src="/home-logo.png" alt="Logo" />
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
                {isOpen ? <IoClose className="text-white font-[800] text-[25px]" onClick={() => setIsOpen(!isOpen)}/> : <IoMenu className="text-white font-[800] text-[25px]" onClick={() => setIsOpen(!isOpen)}/>}
                
            </div>
                    {/* Mobile Dropdown Menu */}
        <div className={`absolute top-20 left-0 w-full bg-gray-900 bg-opacity-90 flex flex-col items-center py-6 space-y-6 text-white lg:hidden transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
          <Link to="/" className="text-xl hover:text-green-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/property" className="text-xl hover:text-green-400" onClick={() => setIsOpen(false)}>Property</Link>
          <Link to="/product" className="text-xl hover:text-green-400" onClick={() => setIsOpen(false)}>Product</Link>
          <Link to="/contact" className="text-xl hover:text-green-400" onClick={() => setIsOpen(false)}>Contact</Link>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-4 mt-4">
            <Link to="/agent" className="bg-[#015A05] text-[#FFFFFF] text-[14px] px-[16px] py-[8px] rounded-[6px] w-[100px] text-center" onClick={() => setIsOpen(false)}>Agent</Link>
          </div>
        </div>
        </div>
        </div>
    );
}
export default Header;