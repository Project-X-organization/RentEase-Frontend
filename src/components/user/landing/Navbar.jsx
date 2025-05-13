import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [isPropertyDropdownOpen, setIsPropertyDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const propertydropdownRef = useRef(null);
  const productdropdownRef = useRef(null);

  const properties = [
      {name: "Bungalow"},
      {name: "Two Bedroom"},
      {name: "Self contain"},
      {name: "Duplex"},
      {name: "One Bedroom"},
      {name: "Shared Apartment"},
  ]

  const products = [
    {name: "How it works", path: "#"},
    {name: "Customer Support", path: "/contact-us"},
  ]

  const togglePropertyDropdown = () => setIsPropertyDropdownOpen((prev) => !prev);
  const toggleProductDropdown = () => setIsProductDropdownOpen((prev) => !prev);

  // Close Property dropdown when clicking outside
  useEffect(() => {
    const handleClickOutsideProperty = (event) => {
      if (
        propertydropdownRef.current &&
        !propertydropdownRef.current.contains(event.target)
      ) {
        setIsPropertyDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideProperty);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideProperty);
    };
  }, []);

  // Close Product dropdown when clicking outside
  useEffect(() => {
    const handleClickOutsideProduct = (event) => {
      if (
        productdropdownRef.current &&
        !productdropdownRef.current.contains(event.target)
      ) {
        setIsProductDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideProduct);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideProduct);
    };
  }, []);


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
          <Link to="/" className="text-sm font-bold text-green-300 scale-110">Home</Link>
          <div className="relative" ref={propertydropdownRef}>
        <button
          onClick={togglePropertyDropdown}
          className={`flex items-center gap-1 text-sm font-bold text-white hover:text-green-300 hover:scale-110 focus:outline-none ${isPropertyDropdownOpen ? "text-green-300 scale-110": ""}`}
        >
          property
          <ChevronDown className="w-4 h-4" />
        </button>

        {isPropertyDropdownOpen && (
          <div className="absolute top-full -right-16 mt-2 w-48 bg-white border rounded-md overflow-y-auto shadow-lg z-50">{properties.map((property, index) => (
            <ul className="py-1" key={index}>
              <li>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 bg-white hover:bg-green-500 rounded-full text-center text-green-500 hover:font-bold hover:text-white border border-green-500"
                >
                  {property.name}
                </Link>
              </li>
            </ul>))}</div>)}
        </div>
        <div className="relative" ref={productdropdownRef}>
        <button
          onClick={toggleProductDropdown}
          className={`flex items-center gap-1 text-sm font-bold text-white hover:text-green-300 hover:scale-110 focus:outline-none ${isProductDropdownOpen ? "text-green-300 scale-110": ""}`}
        >
          product
          <ChevronDown className="w-4 h-4" />
        </button>

        {isProductDropdownOpen && (
          <div className="absolute top-full -right-16 mt-2 w-48 bg-white border rounded-md overflow-y-auto shadow-lg z-50">{products.map((product, index) => (
            <ul className="py-1" key={index}>
              <li>
                <Link
                  to={product.path}
                  className="block px-4 py-2 text-sm text-gray-700 bg-white hover:bg-green-500 rounded-full text-center text-green-500 hover:font-bold hover:text-white border border-green-500"
                >
                  {product.name}
                </Link>
              </li>
            </ul>))}</div>)}
        </div>
          <Link to="/contact-us" className="text-sm font-bold text-white hover:text-green-300 hover:scale-110">Contact</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:block">
          <Link to="/agent/signup" className="text-sm text-white bg-[#015A05] px-4 py-2 rounded-md hover:bg-green-900 hover:px-6 hover:py-4">Agent</Link>
          <Link to="/user/login" className="text-sm ml-2 text-white border border-[#58FA60] px-4 py-2 rounded-md hover:text-green-200 hover:px-6 hover:py-4">Login</Link>
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
          <Link to="/" className="text-sm text-green-400 scale-110" onClick={() => setIsOpen(false)}>Home</Link>
          <div className="relative" ref={propertydropdownRef}>
        <button
          onClick={togglePropertyDropdown}
          className={`flex items-center gap-1 text-sm text-white hover:text-green-400 hover:scale-110 focus:outline-none ${isPropertyDropdownOpen ? "text-green-400 scale-110": ""}`}
        >
          property
          <ChevronDown className="w-4 h-4" />
        </button>

        {isPropertyDropdownOpen && (
          <div className="absolute top-full -right-16 mt-2 w-48 bg-white border overflow-y-auto rounded-md shadow-lg z-50">{properties.map((property, index) => (
            <ul className="py-1" key={index}>
              <li>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 bg-white hover:bg-green-500 rounded-full text-center text-green-500 hover:font-bold hover:text-white border border-green-500"
                >
                  {property.name}
                </Link>
              </li>
            </ul>))}</div>)}
        </div>
        <div className="relative" ref={productdropdownRef}>
        <button
          onClick={toggleProductDropdown}
          className={`flex items-center gap-1 text-sm text-white hover:text-green-300 hover:scale-110 focus:outline-none ${isProductDropdownOpen ? "text-green-300 scale-110": ""}`}
        >
          product
          <ChevronDown className="w-4 h-4" />
        </button>

        {isProductDropdownOpen && (
          <div className="absolute top-full -right-16 mt-2 w-48 bg-white border rounded-md overflow-y-auto shadow-lg z-50">{products.map((product, index) => (
            <ul className="py-1" key={index}>
              <li>
                <Link
                  to={product.path}
                  className="block px-4 py-2 text-sm text-gray-700 bg-white hover:bg-green-500 rounded-full text-center text-green-500 hover:font-bold hover:text-white border border-green-500"
                >
                  {product.name}
                </Link>
              </li>
            </ul>))}</div>)}
        </div>
          <Link to="/contact-us" className="text-sm hover:text-green-400" onClick={() => setIsOpen(false)}>Contact</Link>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-4 mt-4">
            <Link to="/agent/signup" className="text-sm text-white bg-[#015A05] px-6 py-2 rounded-md hover:bg-green-900" onClick={() => setIsOpen(false)}>Agent</Link>
            <Link to="/user/login" className="text-sm text-white border border-white px-6 py-2 rounded-md hover:text-green-200" onClick={() => setIsOpen(false)}>Login</Link>
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default Navbar;
