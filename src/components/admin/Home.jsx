import Pending from "./Pending";
import Approved from "./Approved";
import Deleted from "./Deleted";
import { useState } from "react";
import FadeInSection from "../universal/FadeInSection";

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
    ];
    const approvals = [
        {name: "Elisha Olawoye"},
        {name: "Obinna Chukwuemeka"},
        {name: "Tolu Adebisi"},
    ];
    const deletions = [
        {name: "Elisha Olawoye", deleted_at: "3 mins ago"},
        {name: "Obinna Chukwuemeka", deleted_at: "2 hrs ago"},
        {name: "Tolu Adebisi", deleted_at: "3 days ago"},
    ];
    const [idx, setIdx] = useState(0);
    return (
        <FadeInSection type="slideDown" className="lg:w-[77%] w-full relative z-10"><div className="w-full py-8 lg:py-16 lg:px-20">
            <h1 className="lg:mb-20 mb-12 lg:text-xl ml-8 lg:ml-0 lg:mt-0">Welcome Back, <span className="font-semibold">Esther</span></h1>
            <div className="grid grid-cols-3 lg:gap-60 lg:mx-24 mx-8">{sections.map((section, i) => (
                <button
                    key={i}
                    className={` lg:text-xl hover:scale-110 ${idx === i ? "font-semibold border-b-4 border-black" : ""}`}
                    onClick={() => setIdx(i)}
                >
                    {section}
                </button>
            ))}</div>
            {idx === 0 && requests.map((request, index) => (
                <Pending key={index} {...request} setOpacity={setOpacity}/>
            ))}
            {idx === 1 && approvals.map((approval, index) => (
                <Approved key={index} {...approval} setOpacity={setOpacity}/>
            ))}
            {idx === 2 && deletions.map((deletion, index) => (
                <Deleted key={index} {...deletion}/>
            ))}
        </div></FadeInSection>
    );
};

export default Home;