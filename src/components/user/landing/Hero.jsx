import { Link } from "react-router-dom";
import FadeInSection from "../../FadeInSection";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-[url('/Hero-bg.jfif')] bg-cover bg-center flex items-center">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 lg:px-4 w-[85%] mx-auto lg:mx-0 lg:w-[72%] lg:pb-8">
        <FadeInSection type="slideUp">
          {/* Responsive Heading */}
          <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-8xl max-w-full text-center lg:text-left font-bold lg:ml-12 my-2 lg:mt-32 mt-20">
            Find the Perfect residence for you to live in
          </h1>

          {/* Responsive Paragraph */}
          <p className="lg:mt-6 mt-8 text-md sm:text-lg lg:text-2xl text-center lg:text-left text-gray-200 w-full lg:w-[65%] mx-auto lg:ml-12">
            Discover affordable and comfortable homes tailored to your needs. Rent with ease, live with peace.
          </p>

          {/* Responsive Button Container */}
          <div className="flex justify-center lg:justify-start lg:mt-0 mt-12  lg:ml-12">
            <Link to="/signup" className="lg:mt-12 px-4 py-2 sm:px-6 sm:py-3 lg:px-6 lg:py-3 bg-green-600 border border-white rounded-md text-sm sm:text-base lg:text-xl text-white hover:bg-green-900 hover:px-6 hover:py-4 lg:hover:px-12 lg:hover:py-6 transition-all duration-300">
              Get Started
            </Link>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default HeroSection;
