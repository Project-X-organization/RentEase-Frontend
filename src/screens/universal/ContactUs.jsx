import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react"; // Import icons for the menu toggle
import FadeInSection from "../../components/universal/FadeInSection";

const ContactUs = () => {
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
                    <Link to="/help" className="hover:text-[#428242] hover:scale-110">Help</Link>
                    <Link to="/terms-and-conditions" className="hover:text-[#428242] hover:scale-110">Terms and Conditions</Link>
                    <Link to="/FAQs" className="hover:text-[#428242] hover:scale-110">FAQs</Link>
                    <Link to="#" className="text-[#428242] scale-110 justify-self-start">Contact us</Link>
                </div>
                {/* Navbar Links - Mobile View (Dropdown) */}
                {isOpen && (
                <div className="absolute z-10 top-[75px] left-0 w-full bg-gray-900 bg-opacity-90 flex flex-col items-center py-6 space-y-6 text-white lg:hidden transition-all duration-300">
                    <FadeInSection type="slideRight"><Link to="/help" className="hover:text-[#428242] hover:scale-110" onClick={() => setIsOpen(false)}>Help</Link></FadeInSection>
                    <FadeInSection type="slideLeft"><Link to="/terms-and-conditions" className="hover:text-[#428242] hover:scale-110" onClick={() => setIsOpen(false)}>Terms and Conditions</Link></FadeInSection>
                    <FadeInSection type="slideRight"><Link to="/FAQs" className="hover:text-[#428242] hover:scale-110" onClick={() => setIsOpen(false)}>FAQs</Link></FadeInSection>
                    <FadeInSection type="slideLeft"><Link to="#" className="text-[#428242] scale-110" onClick={() => setIsOpen(false)}>Contact us</Link></FadeInSection>
                </div>
                )}
            </nav></FadeInSection>
            <div className="flex flex-col-reverse lg:flex-row justify-around lg:mt-16 lg:mb-24 mb-10">
                <div className="justify-center text-center mt-8 lg:mt-0">
                    <FadeInSection type="slideDown" delay={2}>
                        <h1 className="font-bold lg:text-[50px] text-3xl">Connect with us</h1>
                        <p className="font-bold lg:text-[40px] text-2xl lg:mt-6 mt-1">@</p>
                        <p className="lg:text-2xl font-[400] lg:mt-10 mt-3">25 Njoku Ubani Layout, by the flyover</p>
                        <p className="lg:text-2xl font-[400]">Ikoyi Lagos</p>
                        <p className="lg:text-2xl font-[400] lg:mt-8 mt-2">Also you can reach us via <span className="text-[#428242]">enquires@mycaretaker.com</span></p>
                        <p className="lg:text-2xl font-[400] lg:mt-8 mt-2">or a direct whatsapp message here</p>
                        <FadeInSection type="zoom" delay={4}>
                            <button className="flex mx-auto justify-center items-center rounded-full bg-[#428242] text-white lg:text-xl font-bold w-[80%] py-2 lg:py-4 lg:mt-8 mt-3 hover:scale-110 hover:bg-green-700">Whatsapp Message <ArrowUpRight className="lg:ml-4 ml-2 lg:mt-1"/></button>
                        </FadeInSection>
                    </FadeInSection>
                    <FadeInSection type="slideLeft" delay={5}>
                        <p className="font-bold lg:text-[40px] text-xl lg:mt-24 mt-8">Follow us today and stay updated</p>
                        <div className="grid grid-cols-3 items-center px-3">
                            <Link className="lg:mt-8">
                                <img src="/linkedin-logo.png" alt="linkedin logo" className="mx-auto w-[75%]" />
                                <p>@My_CareTaker</p>
                            </Link>
                            <Link className="lg:mt-8">
                                <img src="/facebook-logo.png" alt="facebook logo" className="mx-auto my-2" />
                                <p>@MyCareTaker</p>
                            </Link>
                            <Link className="lg:mt-8">
                                <img src="/X-logo.png" alt="X logo" className="mx-auto my-4 w-[51%]" />
                                <p>@MyCareTaker_X</p>
                            </Link>
                        </div>
                    </FadeInSection>
                </div>
                <FadeInSection type="zoom"><img src="/Contact.png" alt="Contact us banner"/></FadeInSection>
            </div>
        </div>
    );
};

export default ContactUs;