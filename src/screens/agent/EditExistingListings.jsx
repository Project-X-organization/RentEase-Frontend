import SubmittedCard from "../../components/agent/SubmittedCard";
import Navbar from "../../components/agent/NavBarAlt";


const EditExistingListings = () => {
    const submissions = [
        { image: "/Hero-bg.jfif", title: "Semi-detached 2 Bedroom", location: "Ibeju Lekki, Lagos", duration: "3 days ago", delay: "1" },
        { image: "/House-1.png", title: "Semi-detached 2 Bedroom", location: "Ikoyi, Lagos", duration: "1 week ago", delay: "1" },
        { image: "/House-2.png", title: "Semi-detached 2 Bedroom", location: "Ajah, Lagos", duration: "6 days ago", delay: "1" },
        { image: "/House-1.png", title: "Luxury 3 Bedroom", location: "Victoria Island, Lagos", duration: "1 month ago", delay: "1" },
        { image: "/House-1.png", title: "Modern 4 Bedroom", location: "Lekki, Lagos", duration: "3 days ago", delay: "1" },
        { image: "/Hero-bg.jfif", title: "Semi-detached 2 Bedroom", location: "Ibeju Lekki, Lagos", duration: "3 days ago", delay: "1" },
        { image: "/Hero-bg.jfif", title: "Semi-detached 2 Bedroom", location: "Ibeju Lekki, Lagos", duration: "2 months ago", delay: "1" },
    ];
    return (
        <div>
            <Navbar />
            <div className="w-full grid grid-cols-1 lg:my-12 my-4">
                {submissions.map((submission, index) => (
                    <SubmittedCard key={index} {...submission} />
                ))}
            </div>
        </div>
    );
};

export default EditExistingListings;