import Pending from "./Pending";
import Approved from "./Approved";
import Rejected from "./Rejected";
import { useState } from "react";
import FadeInSection from "../../FadeInSection";

const Payment = ( { setOpacity }) => {
    const sections = [
        <span>Pending<sup className="text-red-500">3</sup></span>,
        <span>Approved</span>,
        <span>Rejected</span>
    ]
    const requests = [
        {name: "Elisha Olawoye", transaction_id: "0000123", description: "No Description Provided", transaction_date: "20/04/2025", value: "700,000", payment_proof: "/House-2.png"},
        {name: "Obinna Chukwuemeka", transaction_id: "0000124", description: "No Description Provided", transaction_date: "21/04/2025", value: "800,000", payment_proof: "/Form-banner.png"},
        {name: "Tolu Adebisi", transaction_id: "0000128", description: "No Description Provided", transaction_date: "21/04/2025", value: "850,000", payment_proof: "/announcement.png"},
    ];
    
    const approvals = [
        {name: "Elisha Olawoye", approved_at: "3 mins ago", payment_proof: "/House-2.png"},
        {name: "Obinna Chukwuemeka", approved_at: "2 hrs ago", payment_proof: "/Form-banner.png"},
        {name: "Tolu Adebisi", approved_at: "3 days ago", payment_proof: "/announcement.png"},
    ];

    const rejections = [
        {name: "Elisha Olawoye", rejected_at: "3 mins ago", payment_proof: "/House-2.png", reason: "These Terms constitute a legally binding agreement () between you and MyCareTaker (as defined below) governing your access to and use of the MyCareTaker website www.MyCareTaker.com.today, including any subdomains thereof, and any other websites through which MyCareTaker makes its services available (collectively), our mobile, tablet and other smart device applications, and application program interfaces (collectively,) and all associated services (collectively, ). The Website, the Application and MyCareTaker Services together are hereinafter collectively referred to as the  Our Cancellations and Reversals Policy, Content Policy, Non-discrimination Policy, Standards, Service Fees and other policies applicable to your use of the MyCareTaker Site are incorporated by reference into this Agreement."},
        {name: "Obinna Chukwuemeka", rejected_at: "2 hrs ago", payment_proof: "/Form-banner.png", reason: "Blurry Document"},
        {name: "Tolu Adebisi", rejected_at: "2 hrs ago", payment_proof: "/announcement.png", reason: "Blurry Document"},
    ];

    const [idx, setIdx] = useState(0);
    const [activeModalIndex, setActiveModalIndex] = useState(null);

    return (
        <FadeInSection type="slideDown" className="lg:w-[72%] w-full relative z-10"><div className="w-full py-8 lg:py-32 lg:px-20">
            {/*<h1 className="lg:mb-20 mb-12 lg:text-xl ml-8 lg:ml-0 lg:mt-0">Welcome Back, <span className="font-semibold">Esther</span></h1>*/}
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
                <Approved key={index} {...approval} index={index} activeModalIndex={activeModalIndex} setActiveModalIndex={setActiveModalIndex} />
            ))}
            {idx === 2 && rejections.map((rejection, index) => (
                <Rejected key={index} {...rejection}/>
            ))}
        </div></FadeInSection>
    );
};

export default Payment;