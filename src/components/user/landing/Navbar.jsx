import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="absolute top-0 left-0 w-full bg-transparent z-20 p-4 pb-5 lg:px-16 lg:pt-12 flex justify-between items-center backdrop-blur-md lg:backdrop-blur-none">
        {/* Logo + Name (Centered on Mobile) */}
        <div className="flex items-center text-white font-medium text-lg mx-auto lg:mx-0">
          <img src="/icon.png" alt="Logo" />
          <p className="ml-2 mt-4">MyCareTaker</p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-32 mt-2 text-green-200">
          <Link to="/" className="text-sm font-bold text-white hover:text-green-200 hover:scale-110">Home</Link>
          <Link to="/property" className="text-sm font-bold text-white hover:text-green-200 hover:scale-110">Property</Link>
          <Link to="/product" className="text-sm font-bold text-white hover:text-green-200 hover:scale-110">Product</Link>
          <Link to="/contact" className="text-sm font-bold text-white hover:text-green-200 hover:scale-110">Contact</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:block">
          <Link to="/agent/signup" className="text-sm text-white bg-[#015A05] px-4 py-2 rounded-md hover:bg-green-900 hover:px-6 hover:py-4">Agent</Link>
          <Link to="/login" className="text-sm ml-2 text-white border border-[#58FA60] px-4 py-2 rounded-md hover:text-green-200 hover:px-6 hover:py-4">Login</Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="lg:hidden text-white text-3xl absolute right-4 top-9"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Dropdown Menu */}
        <div className={`absolute top-24 left-0 w-full bg-gray-900 bg-opacity-90 flex flex-col items-center py-6 space-y-6 text-white lg:hidden transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
          <Link to="/" className="text-sm hover:text-green-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/property" className="text-sm hover:text-green-400" onClick={() => setIsOpen(false)}>Property</Link>
          <Link to="/product" className="text-sm hover:text-green-400" onClick={() => setIsOpen(false)}>Product</Link>
          <Link to="/contact" className="text-sm hover:text-green-400" onClick={() => setIsOpen(false)}>Contact</Link>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-4 mt-4">
            <Link to="/agent/signup" className="text-sm text-white bg-[#015A05] px-6 py-2 rounded-md hover:bg-green-900" onClick={() => setIsOpen(false)}>Agent</Link>
            <Link to="/login" className="text-sm text-white border border-white px-6 py-2 rounded-md hover:text-green-200" onClick={() => setIsOpen(false)}>Login</Link>
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default Navbar;
