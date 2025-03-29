const Philosophy = () => {
    return (
        <div className="mt-20 mb-14">
            <h2 className="font-primary font-[700] sm:text-[30px] text-[28px] text-center">Our Philosophy</h2>
            <div className="flex md:flex-row gap-4 my-8 flex-col justify-between items-center">
            <div className="flex items-center md:w-[40%] w-full space-x-3">
            <p className="sm:text-[20px] text-[18px] font-[700] font-primary leading-[128%] tracking-[-2%]">No fake or misleading ads. Every property is 100% verified and authentic</p>
            <img src="/philosophy3.png" alt="icon" className="h-[70px]"/>
            </div>
            <div className="flex items-center md:w-[40%] w-full space-x-3">
            <p className="sm:text-[20px] text-[18px] font-[700] font-primary leading-[128%] tracking-[-2%]">Transparent pricing and deals! What you see is exactly what you pay. No surprises, no hidden charges</p>
            <img src="/philosophy1.png" alt="icon" className="h-[70px]"/>
            </div>
            </div>

            <div className="flex md:flex-row gap-4 flex-col justify-between items-center">
            <div className="flex items-center md:w-[40%] w-full space-x-3">
            <p className="sm:text-[20px] text-[18px] font-[700] font-primary leading-[128%] tracking-[-2%]">We are here for you every step! Ready to guide you,answer your questions and ensure a smooth, hassle-free experience</p>
            <img src="/philosophy2.png" alt="icon" className="h-[70px]"/>
            </div>
            <div className="flex items-center md:w-[40%] w-full space-x-3">
            <p className="sm:text-[20px] text-[18px] font-[700] font-primary leading-[128%] tracking-[-2%]">Homes for every class! Whether a professional , student or family, we offer homes that fit every budget, needs and style.</p>
            <img src="/philosophy4.png" alt="icon" className="h-[70px]"/>
            </div>
            </div>

 
        </div>
    );
}

export default Philosophy;