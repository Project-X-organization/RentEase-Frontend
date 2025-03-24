import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for the menu toggle

// components/Navbar.js
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <nav className="grid grid-cols-[6fr_1fr] lg:grid-cols-[1fr_2fr] lg:pr-0 px-6 sm:px-12 py-4 bg-white border-b">
        <div>
          <img src="/logo.png" alt="MyCareTaker Logo" className="w-32 lg:w-44 lg:h-16 lg:mb-4" />
        </div>
        {/* Hamburger Button (Hidden on larger screens) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-800 focus:outline-none mt-2 ml-3"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <div className="hidden lg:grid grid-cols-4 justify-items-center text-gray-800 font-medium text-lg mt-8">
          <Link to="#" className="hover:text-blue-500 hover:scale-110">Help</Link>
          <Link to="#" className="hover:text-blue-500 hover:scale-110">Terms and Conditions</Link>
          <Link to="#" className="hover:text-blue-500 hover:scale-110">FAQs</Link>
          <Link to="#" className="hover:text-blue-500 hover:scale-110">Contact us</Link>
        </div>
        {/* Navbar Links - Mobile View (Dropdown) */}
        {isOpen && (
          <div className="lg:hidden flex flex-col space-y-3 text-center mt-4 text-gray-800 font-medium text-lg ml-8">
            <Link to="#" className="hover:text-blue-500 hover:scale-110" onClick={() => setIsOpen(false)}>Help</Link>
            <Link to="#" className="hover:text-blue-500 hover:scale-110" onClick={() => setIsOpen(false)}>Terms and Conditions</Link>
            <Link to="#" className="hover:text-blue-500 hover:scale-110" onClick={() => setIsOpen(false)}>FAQs</Link>
            <Link to="#" className="hover:text-blue-500 hover:scale-110" onClick={() => setIsOpen(false)}>Contact us</Link>
          </div>
        )}
      </nav>
    );
}

