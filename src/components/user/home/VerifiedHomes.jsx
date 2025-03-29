import VerifiedCard from "./VerifiedCard"
const VerifiedHomes = () => {
    const data = [
        {
            id: 1,
            image: "/Hero-bg.jfif",
            title: "Semi detached 2 bedroom",
            location: "Ibeju Lekki Lagos",
            price: "#700,000/Year"
        },
        {
            id: 2,
            image: "/Hero-bg.jfif",
            title: "Semi detached 2 bedroom",
            location: "Ibeju Lekki Lagos",
            price: "#700,000/Year"
        },
        {
            id: 3,
            image: "/Hero-bg.jfif",
            title: "Semi detached 2 bedroom",
            location: "Ibeju Lekki Lagos",
            price: "#700,000/Year"
        },
        {
            id: 4,
            image: "/Hero-bg.jfif",
            title: "Semi detached 2 bedroom",
            location: "Ibeju Lekki Lagos",
            price: "#700,000/Year"
        },
        {
            id: 5,
            image: "/Hero-bg.jfif",
            title: "Semi detached 2 bedroom",
            location: "Ibeju Lekki Lagos",
            price: "#700,000/Year"
        },
        {
            id: 6,
            image: "/Hero-bg.jfif",
            title: "Semi detached 2 bedroom",
            location: "Ibeju Lekki Lagos",
            price: "#700,000/Year"
        },
        {
            id: 7,
            image: "/Hero-bg.jfif",
            title: "Semi detached 2 bedroom",
            location: "Ibeju Lekki Lagos",
            price: "#700,000/Year"
        },
        {
            id: 8,
            image: "/Hero-bg.jfif",
            title: "Semi detached 2 bedroom",
            location: "Ibeju Lekki Lagos",
            price: "#700,000/Year"
        },
        {
            id: 9,
            image: "/Hero-bg.jfif",
            title: "Semi detached 2 bedroom",
            location: "Ibeju Lekki Lagos",
            price: "#700,000/Year"
        }

    ]
    return (
        <div>
            <h2 className="text-[24px] font-[700] leading-[128%] tracking-[-2%] font-primary mb-8">Verified listed Homes</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-8 mb-8 ">
                {data.map((item) => {
                    return(
                    <VerifiedCard 
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    location={item.location}
                    price={item.price}
                    />)
                })}      
            </div>
            
        </div>
    );
}

export default VerifiedHomes;