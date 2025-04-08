import Pending from "./Pending";
import { useState } from "react";
import FadeInSection from "../FadeInSection";

const Home = ( { setOpacity }) => {
    const sections = [
        <span>Pending<sup className="text-red-500">3</sup></span>,
        <span>Approved</span>,
        <span>Deleted</span>
    ]
    const requests = [
        {name: "Elisha Olawoye"},
        {name: "Obinna Chukwuemeka"},
        {name: "Tolu Adebisi"},
    ]
    const [idx, setIdx] = useState(0);
    return (
        <FadeInSection type="slideDown" className="lg:w-[72%] w-full relative z-10"><div className="w-full lg:py-16 lg:px-20">
            <h1 className="lg:mb-20 mb-12 lg:text-xl ml-8 lg:ml-0 mt-12 lg:mt-0">Welcome Back, <span className="font-semibold">Esther</span></h1>
            <div className="grid grid-cols-3 lg:gap-60 lg:mx-24 mx-8">{sections.map((section, index) => (
                <button
                    key={index}
                    className={` lg:text-xl ${idx === index ? "font-semibold border-b-4 border-black" : ""}`}
                    onClick={() => setIdx(index)}
                >
                    {section}
                </button>
            ))}</div>
            {idx === 0 && requests.map((request, index) => (
                <Pending key={index} {...request} setOpacity={setOpacity}/>
            ))}
        </div></FadeInSection>
    );
};

export default Home;