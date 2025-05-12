import { Link } from "react-router-dom";

const AboutSection = () => {
    return (
        <section className="p-6 lg:p-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 items-center">
                {/* Responsive Image */}
                <img src="/About.png" className="w-full max-w-md mx-auto lg:my-12 lg:max-w-full"/>

                {/* Content Section */}
                <div className="text-center lg:text-left">
                    {/* Responsive Text */}
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mx-auto lg:mx-12 mt-6 lg:mt-0 mb-8 lg:mb-16 leading-tight">
                        Find your perfect home with ease! Renters discover their ideal spaces while agents list properties seamlessly. All in one place.
                    </p>

                    {/* Responsive Button */}
                    <Link 
                        to="/about" 
                        className="mb-8 lg:text-lg mt-6 lg:mt-20 px-4 py-2 sm:px-6 sm:py-3 lg:px-6 lg:py-3 bg-[#015A05] rounded-md border border-black shadow-xl text-sm sm:text-base lg:text-lg text-white hover:bg-green-900 hover:px-8 hover:py-4 lg:hover:px-12 lg:hover:py-8 transition-all duration-300 block w-max mx-auto lg:mx-14"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
