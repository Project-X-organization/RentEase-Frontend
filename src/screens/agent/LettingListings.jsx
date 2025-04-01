import ListingsCard from "../../components/agent/ListingsCard";
import Navbar from "../../components/agent/NavBarAlt";


const ListedListings = () => {
    const submissions = [
        { image: "/Hero-bg.jfif", title: "Semi-detached 2 Bedroom", location: "Ibeju Lekki, Lagos", },
        { image: "/House-1.png", title: "Semi-detached 2 Bedroom", location: "Ikoyi, Lagos", },
        { image: "/House-2.png", title: "Semi-detached 2 Bedroom", location: "Ajah, Lagos",  },
        { image: "/House-1.png", title: "Luxury 3 Bedroom", location: "Victoria Island, Lagos",  },
        { image: "/House-1.png", title: "Modern 4 Bedroom", location: "Lekki, Lagos",  },
        { image: "/Hero-bg.jfif", title: "Semi-detached 2 Bedroom", location: "Ibeju Lekki, Lagos",  },
        { image: "/Hero-bg.jfif", title: "Semi-detached 2 Bedroom", location: "Ibeju Lekki, Lagos", },
        { image: "/House-2.png", title: "Semi-detached 2 Bedroom", location: "Ajah, Lagos",  },
        { image: "/House-1.png", title: "Luxury 3 Bedroom", location: "Victoria Island, Lagos",  },
        { image: "/House-1.png", title: "Modern 4 Bedroom", location: "Lekki, Lagos",  },
        { image: "/Hero-bg.jfif", title: "Semi-detached 2 Bedroom", location: "Ibeju Lekki, Lagos",  },
        { image: "/Hero-bg.jfif", title: "Semi-detached 2 Bedroom", location: "Ibeju Lekki, Lagos", },
        { image: "/Hero-bg.jfif", title: "Semi-detached 2 Bedroom", location: "Ibeju Lekki, Lagos", },
        { image: "/House-1.png", title: "Semi-detached 2 Bedroom", location: "Ikoyi, Lagos", },
        { image: "/House-2.png", title: "Semi-detached 2 Bedroom", location: "Ajah, Lagos",  },
        { image: "/House-1.png", title: "Luxury 3 Bedroom", location: "Victoria Island, Lagos",  },
        { image: "/House-1.png", title: "Modern 4 Bedroom", location: "Lekki, Lagos",  },
        { image: "/Hero-bg.jfif", title: "Semi-detached 2 Bedroom", location: "Ibeju Lekki, Lagos", },
    ];
    return (
        <div>
            <Navbar />
            <h1 className="font-bold lg:text-4xl my-4 lg:mt-4 lg:mb-0 lg:mx-12 mx-4 text-center lg:text-left">LISTED APARTMENTS</h1>
            <div className="w-full grid lg:grid-cols-2 gap-8 lg:my-12 mt-4 mb-12">
                {submissions.map((submission, index) => (
                    <ListingsCard key={index} {...submission} />
                ))}
            </div>
        </div>
    );
};

export default ListedListings;