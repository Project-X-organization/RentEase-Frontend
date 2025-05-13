import { Link } from "react-router-dom";
import { useState } from "react";
import { MoreVertical, X, LogOut } from "lucide-react";

// Header Component
export default function Header({ agentEmail, text="Manage Property " }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#428242] text-white lg:text-lg p-4 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center relative">
      {/* Desktop Layout (Unchanged) */}
      <div className="hidden lg:grid grid-cols-[1fr_3fr] justify-items-start">
        <span className="font-semibold">Dashboard</span>
        <button className="text-white">{`${text}▾`}</button>
      </div>

      <div className="hidden lg:grid lg:text-right grid-cols-[4fr_1fr]">
        <span>Agent: {agentEmail}</span>
        <Link to="/" className="flex lg:ml-4 text-white hover:scale-110 hover:text-red-400"><span className="mx-2">Log out</span> <LogOut /></Link>
      </div>

      {/* Mobile Layout */}
      <div className="flex lg:hidden justify-between items-center w-full">
        {/* Centered "Dashboard" for Mobile */}
        <span className="font-semibold text-lg text-center mx-auto">Dashboard</span>

        {/* Dropdown Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none mr-4">
          {isOpen ? <X size={28} /> : <MoreVertical size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 top-14 right-4 bg-white text-[#428242] shadow-md rounded-md w-52 py-2 lg:hidden">
          <Link to="#" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>{`${text}▾`}</Link>
          <span className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Agent: {agentEmail}</span>
          <Link to="/" className="block flex px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}><span className="mr-2">Logout </span><LogOut/></Link>
        </div>
      )}
    </header>
  );
}
