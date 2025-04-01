import QueriedCard from "../../components/agent/QueriedCard";
import Navbar from "../../components/agent/NavBarAlt";


const QueriedListings = () => {
    const submissions = [
        { image: "/Hero-bg.jfif", title: "Semi-detached 2 Bedroom", location: "Ibeju Lekki, Lagos", queryTitle: "Incomplete Property Descriptions:", query: "Ensure all relevant details-such as the number of bedrooms, bathrooms, square footage, and unique features-are thoroughly described to provide a clear understanding of the property", },
        { image: "/House-1.png", title: "Semi-detached 2 Bedroom", location: "Ikoyi, Lagos", queryTitle: "Poor-Quality or Insufficient Photos:", query: "Listings should include high-quality images that showcase the property's interior and exterior, giving potential clients a comprehensive visual overview" },
        { image: "/House-2.png", title: "Semi-detached 2 Bedroom", location: "Ajah, Lagos", queryTitle: "Inaccurate Pricing:", query: "Set a realistic and competitive price  Overpricing can deter interest, while underpricing may undervalue the property " },
        { image: "/House-1.png", title: "Luxury 3 Bedroom", location: "Victoria Island, Lagos", queryTitle: "Poor-Quality or Insufficient Photos:", query: "Listings should include high-quality images that showcase the property's interior and exterior, giving potential clients a comprehensive visual overview" },
        { image: "/House-1.png", title: "Modern 4 Bedroom", location: "Lekki, Lagos", queryTitle: "Inaccurate Pricing:", query: "Set a realistic and competitive price  Overpricing can deter interest, while underpricing may undervalue the property " },
    ];
    return (
        <div>
            <Navbar />
            <div className="w-full grid grid-cols-1 lg:my-12 my-4">
                {submissions.map((submission, index) => (
                    <QueriedCard key={index} {...submission} />
                ))}
            </div>
        </div>
    );
};

export default QueriedListings;