import ServiceCard from "./ServicesCard";
import FadeInSection from "../../universal/FadeInSection";

const ServicesSection = () => {
  const services = [
    { title: "Secure Transactions", description: "Enjoy a safe and transparent rental process with verified listings and trusted agents", type: "slideRight", delay: "2" },
    { title: "Wide Property Listings", description: "Explore over 1,000+ verified rental homes, apartments, and spaces tailored to your needs", type: "slideDown", delay: "4" },
    { title: "Seamless Agent Uploads", description: "Enjoy a safe and transparent rental process with verified listings and trusted agents", type: "slideUp", delay: "4" },
    { title: "Smart Search & Filters", description: "List your properties effortlessly with our usaed freindly platfprm, ensuring maximum visibility ", type: "slideLeft", delay: "2" }
  ];

  return (
    <section className="bg-gray-100 lg:p-10 lg:px-16">
      <div className="grid lg:grid-cols-2 w-[85%] lg:w-full mx-auto">
        <div>
            <h2 className="text-left text-black font-bold text-2xl lg:text-4xl lg:mb-32 lg:w-[80%] mt-12 mb-12">We Offer Comprehensive first rate service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full h-[50%] my-4 ">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
        <FadeInSection type="zoom" delay={4}><img src="/Hero-bg.jfif" className="lg:w-[85%] lg:h-[80%] mx-auto lg:my-auto mb-12 lg:mb-[-100px] lg:mt-24"/></FadeInSection>
      </div>
    </section>
  );
};

export default ServicesSection;
