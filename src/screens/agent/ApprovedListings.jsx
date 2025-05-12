import ApprovedCard from "../../components/agent/ApprovedCard";
import Navbar from "../../components/agent/NavBarAlt";


const ApprovedListings = () => {
    const submissions = [
        { image: "/Hero-bg.jfif", title: "Semi-detached 2 Bedroom", location: "Ibeju Lekki, Lagos", duration: "3 days ago" },
        { image: "/House-1.png", title: "Semi-detached 2 Bedroom", location: "Ikoyi, Lagos", duration: "1 week ago", },
        { image: "/House-2.png", title: "Semi-detached 2 Bedroom", location: "Ajah, Lagos", duration: "6 days ago", },
        { image: "/House-1.png", title: "Luxury 3 Bedroom", location: "Victoria Island, Lagos", duration: "1 month ago", },
        { image: "/House-1.png", title: "Modern 4 Bedroom", location: "Lekki, Lagos", duration: "3 days ago", },
        { image: "/Hero-bg.jfif", title: "Semi-detached 2 Bedroom", location: "Ibeju Lekki, Lagos", duration: "3 days ago", },
        { image: "/Hero-bg.jfif", title: "Semi-detached 2 Bedroom", location: "Ibeju Lekki, Lagos", duration: "2 months ago", },
    ];
    return (
        <div>
            <Navbar />
            <h1 className="font-bold lg:text-4xl my-4 lg:my-4 text-center">APPROVED HOUSES</h1>
            <div className="w-full grid grid-cols-1 lg:my-12 my-4">
                {submissions.map((submission, index) => (
                    <ApprovedCard key={index} {...submission} />
                ))}
            </div>
        </div>
    );
};

export default ApprovedListings;