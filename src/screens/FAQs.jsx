import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for the menu toggle
import QuestionAndAnsweerBoxes from "../components/Q&A";
import FadeInSection from "../components/FadeInSection";

const FrequentlyAskedQuestions = () => {
    const QandAs = [
        {question: "What is the typical lease agreement duration?", answer: "Lease agreements in Nigeria often range from 12 months to 24 months."},
        {question: "Can a landlord increase the rent during the lease term?", answer: "The lease will typically specify when and how rent can be increased. "},
        {question: "Who is responsible for maintenance and repairs?", answer: ""},
        {question: "How does the payment of rent work?", answer: ""},
        {question: "What are the consequences of late payment?", answer: ""}
    ]
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <FadeInSection type="slideUp"><nav className="grid grid-cols-[14fr_1fr] lg:grid-cols-2 justify-between p-4 lg:pr-0 py-4 bg-white">
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
                    <Link to="#" className="hover:text-[#428242] hover:scale-110">Help</Link>
                    <Link to="/terms-and-conditions" className="hover:text-[#428242] hover:scale-110">Terms and Conditions</Link>
                    <Link to="#" className="text-[#428242] scale-110">FAQs</Link>
                    <Link to="/contact-us" className="hover:text-[#428242] hover:scale-110 justify-self-start">Contact us</Link>
                </div>
                {/* Navbar Links - Mobile View (Dropdown) */}
                {isOpen && (
                <div className="absolute z-10 top-[75px] left-0 w-full bg-gray-900 bg-opacity-90 flex flex-col items-center py-6 space-y-6 text-white lg:hidden transition-all duration-300">
                    <FadeInSection type="slideRight"><Link to="#" className="hover:text-[#428242] hover:scale-110" onClick={() => setIsOpen(false)}>Help</Link></FadeInSection>
                    <FadeInSection type="slideLeft"><Link to="/terms-and-conditions" className="hover:text-[#428242] hover:scale-110" onClick={() => setIsOpen(false)}>Terms and Conditions</Link></FadeInSection>
                    <FadeInSection type="slideRight"><Link to="#" className="text-[#428242] scale-110" onClick={() => setIsOpen(false)}>FAQs</Link></FadeInSection>
                    <FadeInSection type="slideLeft"><Link to="/contact-us" className="hover:text-[#428242] hover:scale-110" onClick={() => setIsOpen(false)}>Contact us</Link></FadeInSection>
                </div>
                )}
            </nav></FadeInSection>
            <div className="grid lg:grid-cols-2 lg:px-20 px-4 mt-4 py-8">
                <FadeInSection type="zoom">
                    <img src="/FAQ.png" alt="Frequently Asked Questions banner" className="lg:mt-8"/>
                </FadeInSection>
                <div>
                    <FadeInSection type="slideDown" className="font-bold lg:text-3xl text-xl lg:mb-8 mb-4">Frequently Asked Questions</FadeInSection>
                    {QandAs.map((QandA, index) =>
                        <QuestionAndAnsweerBoxes key={index} {...QandA} type={index % 2 === 0 ? "slideRight": "slideLeft"} delay={index + 2} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default FrequentlyAskedQuestions;