import { useState, useEffect } from "react";
import OfferCard from "./OffersCard";
import CuboidButton from "./CuboidButton";

const offers = [
  { image: "/Hero-bg.jfif", title: "Semi-detached 2 Bedroom", location: "Ibeju Lekki, Lagos", price: "₦700,000/Year" },
  { image: "/House-1.png", title: "Semi-detached 2 Bedroom", location: "Ikoyi, Lagos", price: "₦900,000/Year" },
  { image: "/House-2.png", title: "Semi-detached 2 Bedroom", location: "Ajah, Lagos", price: "₦1,200,000/Year" },
  { image: "/House-1.png", title: "Luxury 3 Bedroom", location: "Victoria Island, Lagos", price: "₦3,500,000/Year" },
  { image: "/House-1.png", title: "Modern 4 Bedroom", location: "Lekki, Lagos", price: "₦5,000,000/Year" },
  { image: "/Hero-bg.jfif", title: "Semi-detached 2 Bedroom", location: "Ibeju Lekki, Lagos", price: "₦700,000/Year" },
  { image: "/Hero-bg.jfif", title: "Semi-detached 2 Bedroom", location: "Ibeju Lekki, Lagos", price: "₦700,000/Year" },
];

const TopOffersSection = () => {
  const [index, setIndex] = useState(0);
  const totalSlides = offers.length - 1; // Ensure progress reaches the end
  
  // Responsive card width
  const [cardWidth, setCardWidth] = useState(window.innerWidth >= 1024 ? 100 / 3.5 : 100 / 1.5);

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(window.innerWidth >= 1024 ? 100 / 3.5 : 100 / 1.5);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? totalSlides : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev >= totalSlides ? 0 : prev + 1));
  };

  return (
    <section className="relative py-8 lg:p-12 lg:py-20 w-full bg-gray-300">
      <div className="w-[85%] lg:w-full mx-auto">
      <h2 className="font-bold text-2xl lg:text-4xl mb-6 lg:ml-6">Top Offers</h2>
      <p className="lg:ml-6 lg:w-[60%] lg:text-2xl text-gray-700 my-8">
        Discover unbeatable deals on rental homes with our Top Offers. Our platform is designed to connect renters with affordable, quality properties while empowering agents to list their homes seamlessly.
      </p>

      {/* Progress Bar + Navigation */}
      <div className="flex items-center justify-center mb-16 space-x-4">
        {/* Progress Bar */}
        <div className="w-[90%] h-2 bg-green-100 rounded-full relative overflow-hidden ">
          <div
            className="h-full bg-green-500 transition-all duration-500 relative"
            style={{
                width: `${((index + (window.innerWidth >= 1024 ? 3 : 1.5)) / offers.length) * 100}%`,
            }}
          >
            {/* Faded edges */}
            <div className="absolute left-0 top-0 h-full w-3 bg-gradient-to-r from-gray-300 to-transparent"></div>
            <div className="absolute right-0 top-0 h-full w-3 bg-gradient-to-l from-gray-300 to-transparent"></div>
          </div>
        </div>

        {/* Left Button */}
        <button onClick={prevSlide} className="rounded-full bg-gray-50 hover:bg-green-200 py-2 px-4 text-green-500 text-3xl font-bold">{"<"}</button>

        {/* Right Button */}
        <button onClick={nextSlide} className="rounded-full bg-gray-50 hover:bg-green-200 py-2 px-4 text-green-500 text-3xl font-bold">{">"}</button>
      </div>

      {/* Slideshow */}
      <div className="relative overflow-hidden shadow-xl">
        {/* Slideshow Container */}
        <div className="w-full overflow-hidden shadow-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * cardWidth}%)` }}
          >
            {offers.map((offer, i) => (
              <div key={i} className="w-[calc(100%/1.5)] lg:w-[calc(100%/3.5)] sm:w-[calc(100%/1.5)] flex-shrink-0 px-2">
                <OfferCard {...offer} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <CuboidButton />
      </div> 
    </section>
  );
};

export default TopOffersSection;
