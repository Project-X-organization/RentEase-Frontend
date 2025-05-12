import FadeInSection from "../../universal/FadeInSection";
const ServiceCard = ({ title, description, type, delay }) => {
    return (
      <FadeInSection type={type} delay={delay}><div className="lg:py-8 p-4 bg-white shadow-md rounded-md lg:text-lg hover:scale-105 hover:font-bold">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-green-600 mt-4">{description}</p>
      </div></FadeInSection>
    );
};
  
export default ServiceCard;
  