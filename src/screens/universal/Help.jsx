import HelpCard from "../../components/universal/HelpCard";
import FadeInSection from "../../components/universal/FadeInSection";
import { User, Search, Menu, X } from "lucide-react";
import { MdLibraryBooks, MdRealEstateAgent, MdWorkspaces } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Help = () => {
    const [isOpen, setIsOpen] = useState(false);

    const cardsData = [
        { icon: <User size={40} className="mx-auto"/>, header: "Account Mnagement", description: "Create & set up your account", path: "/user/signup" },
        { icon: <MdWorkspaces size={40} className="mx-auto"/>, header: "Our services", description: "Explore all our services and oferrings", path: "/#services"},
        { icon: <MdRealEstateAgent size={40} className="mx-auto"/>, header: "Becoming an Agent", description: "Learn how you can became and agent with us", path: "/agent/signup"},
        { icon: <MdLibraryBooks size={40} className="mx-auto"/>, header: "Terms of service", description: "Engage with with our terms  to stay informed and updated.", path: "/terms-and-conditions" },
    ];
      
    const [activeIndex, setActiveIndex] = useState(0);
      
     // Auto-switching logic
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
        }, 4000); // switch every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState([]);
    const navigate = useNavigate();

    const pages = [
        { name: "Landing", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact Us", path: "/contact-us" },
        { name: "User Signup", path: "/user/signup" },
        { name: "User Login", path: "/user/login" },
        { name: "Agent Signup", path: "/agent/signup" },
        { name: "Agent Login", path: "/agent/login" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms And Conditions", path: "/terms-and-conditions" },
        { name: "User Home", path: "/user/home" },
        { name: "FAQs", path: "/FAQs" },
        { name: "Agent Dashboard", path: "/agent/dashboard" },
    ];

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value.trim() === "") {
            setFiltered([]);
        } else {
            const matches = pages.filter((page) =>
              page.name.toLowerCase().includes(value.toLowerCase())
            );
            setFiltered(matches);
        }
    };
    
    const handleSelect = (path) => {
        navigate(path);
        setQuery("");
        setFiltered([]);
    };

    const handleSearchClick = () => {
        const match = pages.find((page) =>
          page.name.toLowerCase() === query.toLowerCase()
        );
      
        if (match) {
          navigate(match.path);
        } else {
          navigate("/contact-us");
        }
      
        setQuery("");
        setFiltered([]);
    };
      
    return (
        <div>
            <FadeInSection type="slideRight" className="bg-[#F9FCFF]">
                <FadeInSection type="slideUp">
                    <nav className="grid grid-cols-[14fr_1fr] lg:grid-cols-2 justify-between p-4 lg:pr-0 py-4">
                        <div>
                        <img src="/logo.png" alt="MyCareTaker Logo" className="w-32 lg:w-44 lg:h-16 lg:mb-4 justify-self-center lg:justify-self-start lg:ml-8" />
                        </div>
                        {/* Hamburger Button (Hidden on larger screens) */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden text-gray-800 focus:outline-none mt-2 lg:ml-3 justify-self-end mr-4"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                        <div className="hidden lg:grid grid-cols-4 justify-items-center text-gray-800 font-medium text-lg mt-8">
                            <Link to="#" className="text-[#428242] scale-110">Help</Link>
                            <Link to="/terms-and-conditions" className="hover:text-[#428242] hover:scale-110">Terms and Conditions</Link>
                            <Link to="/FAQs" className="hover:text-[#428242] hover:scale-110">FAQs</Link>
                            <Link to="/contact-us" className="hover:text-[#428242] hover:scale-110 justify-self-start">Contact us</Link>
                        </div>
                        {/* Navbar Links - Mobile View (Dropdown) */}
                        {isOpen && (
                            <div className="absolute z-20 top-[75px] left-0 w-full bg-gray-900 bg-opacity-90 flex flex-col items-center py-6 space-y-6 text-white lg:hidden transition-all duration-300">
                                <FadeInSection type="slideRight"><Link to="#" className="text-[#428242] scale-110" onClick={() => setIsOpen(false)}>Help</Link></FadeInSection>
                                <FadeInSection type="slideLeft"><Link to="/terms-and-conditions" className="hover:text-[#428242] hover:scale-110" onClick={() => setIsOpen(false)}>Terms and Conditions</Link></FadeInSection>
                                <FadeInSection type="slideRight"><Link to="/FAQs" className="hover:text-[#428242] hover:scale-110" onClick={() => setIsOpen(false)}>FAQs</Link></FadeInSection>
                                <FadeInSection type="slideLeft"><Link to="/contact-us" className="hover:text-[#428242] hover:scale-110" onClick={() => setIsOpen(false)}>Contact us</Link></FadeInSection>
                            </div>
                        )}
                    </nav>
                </FadeInSection>
                <FadeInSection type="slideDown" delay={1}>
                    <h1 className="text-[#428242] font-bold text-center lg:text-5xl md:text-2xl text-2xl lg:mt-16 mt-8">How can we assist you?</h1>
                </FadeInSection>
                <FadeInSection type="zoom" delay={2}>
                    <div className="relative mx-auto lg:mt-12 mt-6 lg:pb-8 pb-4 lg:w-[65%] w-[90%]">
                        <input
                            type="text"
                            value={query}
                            onChange={handleChange}
                            className="w-full border border-[#14AE5C] rounded-full lg:p-4 p-3 lg:text-xl lg:placeholder:text-xl lg:h-16 bg-white"
                            placeholder="Search for all you need to know"
                        />

                        <span className="absolute lg:right-8 right-4 lg:top-5 top-2 mt-4 transform -translate-y-1/2 cursor-pointer"
                            onClick={handleSearchClick}
                        >
                            <Search size={20} className="text-gray-500"/>
                        </span>
                        {filtered.length > 0 && (
                            <ul className="absolute left-0 right-0 mt-2 bg-white border shadow z-10">
                                {filtered.map((page, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSelect(page.path)}
                                    >
                                        {page.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </FadeInSection>
            </FadeInSection>
            <FadeInSection type="slideLeft" delay={4} className="lg:pt-12 pt-8 lg:pb-20 pb-12 lg:px-12" >
                <h2 className="lg:text-2xl text-xl font-semibold text-center lg:text-left">New to MyCareTaker? Start here!</h2>
                <div className="lg:px-8 lg:w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center items-center">
                    <FadeInSection type="zoom" delay={5}><Link to="#" className="group hover:font-bold">
                        <img src="/About-us.png" alt="About-us-banner" className="group-hover:scale-105" />
                        <p className="text-gray-600 lg:text-xl">About Us</p>
                    </Link></FadeInSection>
                    <FadeInSection type="zoom" delay={6} className="mt-12 group hover:font-bold"><Link to="/#properties">
                        <img src="/Properties.png" alt="Properties-banner" className="group-hover:scale-110"/>
                        <p className="text-gray-600 lg:text-xl pt-6">Properties</p>
                    </Link></FadeInSection>
                    <FadeInSection type="zoom" delay={7}  className="mt-12 group hover:font-bold"><Link to="/FAQs">
                        <img src="/FAQs.png" alt="Frequently-Asked-Questions-banner" className="group-hover:scale-110"/>
                        <p className="text-gray-600 lg:text-xl pt-6">FAQs</p>
                    </Link></FadeInSection>
                    <FadeInSection type="zoom" delay={8}  className="mt-12 group hover:font-bold"><Link to="/contact-us">
                        <img src="/Customer-service.png" alt="Customer-service-banner" className="group-hover:scale-110"/>
                        <p className="text-gray-600 lg:text-xl pt-6">Customer Service</p>
                    </Link></FadeInSection>
                </div>
            </FadeInSection>
            <FadeInSection type="zoom" delay={5}><div className="w-full lg:pb-20 pb-12">
                <h2 className="lg:text-2xl text-xl font-semibold text-center lg:text-left lg:mb-12 mb-6 lg:ml-16">Recommended Topics</h2>
                {/* Desktop View - show all 4 cards */}
                <div className="hidden md:grid grid-cols-4 gap-4 justify-items-center">
                    {cardsData.map((card, index) => (
                        <HelpCard key={index} icon={card.icon} header={card.header} description={card.description} path={card.path}/>
                    ))}
                </div>

                {/* Mobile View - show one card at a time with sliding effect */}
                <div className="block md:hidden overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out w-full"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {cardsData.map((card, index) => (
                            <div key={index} className="min-w-full px-4">
                                <HelpCard
                                    icon={card.icon}
                                    header={card.header}
                                    description={card.description}
                                    path={card.path}
                                />
                            </div>
                        ))}
                    </div>
                    {/* Dots */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {cardsData.map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full ${
                                index === activeIndex ? "bg-[#428242]" : "bg-gray-400"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div></FadeInSection>
        </div>
    );
};

export default Help;
