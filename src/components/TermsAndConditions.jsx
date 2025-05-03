import { BookTextIcon } from "lucide-react";
import FadeInSection from "./FadeInSection";

const TsAndCs = () => {
    return (
        <div className="py-4">
            <FadeInSection type="slideDown"><BookTextIcon size={80} className="mx-auto text-[#14AE5C] hidden lg:block"/>
            <BookTextIcon size={40} className="mx-auto text-[#14AE5C] lg:hidden"/>
            <div className="flex lg:mx-8 lg:mt-8 items-center justify-center px-4">
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#14AE5C] rounded-full"></div>
                    <hr className="w-full h-1 bg-[#14AE5C]"/>
                    <div className="w-2 h-2 bg-[#14AE5C] rounded-full"></div>
                </div>
                <h1 className="lg:text-4xl text-2xl mx-4 text-[#428242] font-bold">Terms & Conditions</h1>
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#14AE5C] rounded-full"></div>
                    <hr className="w-full h-1 bg-[#14AE5C]"/>
                    <div className="w-2 h-2 bg-[#14AE5C] rounded-full"></div>
                </div>
            </div></FadeInSection>
            <div className="lg:mx-16 mx-4">
                <FadeInSection className="font-bold lg:text-xl lg:my-8 my-4">Please read these Terms & Conditions ("Terms") carefully as they contain important information about your legal rights, remedies and obligations. By accessing or using the MyCareTaker Site, you agree to comply with and be bound by these Terms. If you do not agree to them, please refrain from accessing or using the MyCareTaker Site.</FadeInSection>
                <FadeInSection className="lg:text-xl lg:my-8 my-4">Thank you for using MyCareTaker!</FadeInSection>
                <FadeInSection className="lg:text-xl lg:my-8 my-4">These Terms constitute a legally binding agreement ("Agreement") between you and MyCareTaker (as defined below) governing your access to and use of the MyCareTaker website www.MyCareTaker.com.today, including any subdomains thereof, and any other websites through which MyCareTaker makes its services available (collectively, "Website"), our mobile, tablet and other smart device applications, and application program interfaces (collectively, "Application") and all associated services (collectively, "MyCareTaker Services"). The Website, the Application and MyCareTaker Services together are hereinafter collectively referred to as the "MyCareTaker Site". Our Cancellations and Reversals Policy, Content Policy, Non-discrimination Policy, Standards, Service Fees and other policies applicable to your use of the MyCareTaker Site are incorporated by reference into this Agreement.</FadeInSection>
                <FadeInSection className="lg:text-xl lg:my-8 my-4">When these Terms mention "MyCareTaker," "we," "us," or "our," it refers to M. Residence Ltd, a Cyprus company with registered number HE330147 and registered office address at Nikou Kranidioti 7, Egkomi, 2411, Nicosia, Cyprus and EU VAT number CY10330147C (hereinafter "MyCareTaker"). M. Residence Ltd is a Registered & Licensed Real Estate Agency in Cyprus Council of Real Estate Agents with Registration No. 791 - Licence No. 363/E. The MyCareTaker Site is owned and operated by MyCareTaker. Our collection and use of personal information in connection with your access to and use of the MyCareTaker Site is described in our Privacy Policy. Landlords (as defined below) are responsible for identifying, understanding, and complying with all laws, rules and regulations that apply to their Listings (as defined below), Landlord Services (as defined below) Landlords are alone responsible for identifying and obtaining any required licenses, permits, or registrations for any Landlord Services they offer. Certain types of Landlord Services may be prohibited altogether. Penalties may include fines or other enforcement. If you have questions about how local laws apply to your Listing(s) and Landlord Service(s) on MyCareTaker, you should always seek legal guidance.</FadeInSection>
            </div>
            <FadeInSection type="slideDown" className="lg:mx-12 lg:mt-16 mb-4 grid grid-cols-2 gap-8 lg:gap-2 lg:text-xl px-4 lg:px-0">
                <button className="border border-[#428242] text-[#428242] lg:w-[30%] lg:px-auto lg:py-4 py-2 hover:scale-110">Maybe Later</button>
                <button className="bg-[#428242] text-white lg:w-[30%] lg:px-auto lg:py-4 py-2 lg:justify-self-end hover:scale-110 hover:bg-green-700">I Agree</button>
            </FadeInSection>
        </div>
    );
};

export default TsAndCs;