import Navbar from "../../components/agent/NavBarAlt";

const About = () => {
    return ( 
        <div>
            <Navbar/>
            <div className="px-10 space-y-16 pb-10">
            <div className="flex items-center justify-center gap-8 mt-8 md:flex-row flex-col">
                <img src="/about.png" alt="About" />
                <div className="space-y-6">
                    <h2 className="font-primary text-[#000000] text-[50px]">About Us</h2>
                    <p className="font-primary font-poppins font-[400] text-[25px]">Welcome to MyCareTaker – the smart way to rent a home. We connect landlords with reliable tenants through a secure and user-friendly platform built for convenience and trust. Whether you're listing a property or searching for your next home, MyCareTaker makes the process simple, transparent, and hassle-free.</p>
                </div>
            </div>

            <div>
                <img src="/ratings.png" alt="Ratings" />
            </div>

            <div className="flex justify-between items-center px-16 md:flex-row flex-col gap-2">
                <div>
                    <h3 className="font-primary font-[500] text-[30px] text-[#000000] pb-1">144</h3>
                    <p className="font-primary font-[500] text-[15px]">Listings</p>
                </div>
                <div>
                    <h3 className="font-primary font-[500] text-[30px] text-[#000000] pb-1">144</h3>
                    <p className="font-primary font-[500] text-[15px]">Listings</p>
                </div>
                <div>
                    <h3 className="font-primary font-[500] text-[30px] text-[#000000] pb-1">144</h3>
                    <p className="font-primary font-[500] text-[15px]">Listings</p>
                </div>
                <div>
                    <h3 className="font-primary font-[500] text-[30px] text-[#000000] pb-1">144</h3>
                    <p className="font-primary font-[500] text-[15px]">Listings</p>
                </div>
                <div>
                    <h3 className="font-primary font-[500] text-[30px] text-[#000000] pb-1">144</h3>
                    <p className="font-primary font-[500] text-[15px]">Listings</p>
                </div>
            </div>

            <div>
                <h2 className="font-primary font-[500] text-black text-[30px] pb-5">Recent Listings</h2>

                <div className="flex flex-col justify-center items-center">
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-20">
                    <div className="w-full">
                        <img src="/houseprop.png" alt="Property" />
                        <p className="font-primary font-[500] text-[15px] text-black">2 bedroom</p>
                        <p className="font-primary font-[500] text-[12px] text-black">Ikoyi Lagos</p>
                    </div>
                    <div>
                        <img src="/houseprop.png" alt="Property" />
                        <p className="font-primary font-[500] text-[15px] text-black">2 bedroom</p>
                        <p className="font-primary font-[500] text-[12px] text-black">Ikoyi Lagos</p>
                    </div>
                    <div>
                        <img src="/houseprop.png" alt="Property" />
                        <p className="font-primary font-[500] text-[15px] text-black">2 bedroom</p>
                        <p className="font-primary font-[500] text-[12px] text-black">Ikoyi Lagos</p>
                    </div>
                    <div>
                        <img src="/houseprop.png" alt="Property" />
                        <p className="font-primary font-[500] text-[15px] text-black">2 bedroom</p>
                        <p className="font-primary font-[500] text-[12px] text-black">Ikoyi Lagos</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </div>
     );
}
 
export default About;