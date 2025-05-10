import Navbar from "../../components/agent/NavBarAlt";
import FadeInSection from "../../components/universal/FadeInSection";

const PrivacyPolicy = () => {
    return (
        <div>
            <FadeInSection type="slideUp">
                <Navbar />
            </FadeInSection>
            <FadeInSection type="slideRight">
                <FadeInSection type="slideDown">
                    <div className="relative lg:h-[458px] md:h-[325px] h-[175px] bg-[url('/Privacy-policy-bg.png')] bg-cover bg-center flex items-center lg:px-10 px-4 w-full rounded-3xl">
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>
                        <h1 className="relative text-white lg:text-[70px] md:text-5xl text-3xl font-[700]">Privacy Policy</h1>
                    </div>
                </FadeInSection>
            </FadeInSection>
            <div className="lg:px-32 px-6 lg:py-20 pt-6 pb-12 lg:text-xl">
                <FadeInSection type="slideDown" delay={2}>
                    <FadeInSection type="zoom" delay={2}><p>We are committed to maintaining the accuracy, confidentiality, and security of your personally identifiable information ("Personal Information"). As part of this commitment, our privacy policy governs our actions as they relate to the collection, use and disclosure of Personal Information. Our privacy policy is based upon the values set by the Canadian Standards Association's Model Code for the Protection of Personal Information and Canada's Personal Information Protection and Electronic Documents Act</p></FadeInSection>
                </FadeInSection>
                <FadeInSection type="slideDown" delay={2}>
                    <FadeInSection type="zoom" delay={2}>
                        <p className="mt-8">1. Introduction</p>
                        <p>We are responsible for maintaining and protecting the Personal Information under our control. We have designated an individual or individuals who is/are responsible for compliance with our privacy policy.</p>
                    </FadeInSection>
                </FadeInSection>
                <FadeInSection type="slideDown" delay={2}>
                    <FadeInSection type="zoom" delay={2}>
                        <p className="mt-8">2. Identifying Purposes</p>
                        <p>We collect, use and disclose Personal Information to provide you with the product or service you have requested and to offer you additional products and services we believe you might be interested in. The purposes for which we collect Personal Information will be identified before or at the time we collect the information. In certain circumstances, the purposes for which information is collected may be clear, and consent may be implied, such as where your name, address and payment information is provided as part of the order process</p>
                    </FadeInSection>
                </FadeInSection>
                <FadeInSection type="slideDown" delay={1}>
                    <FadeInSection type="zoom" delay={1}>
                        <p className="mt-8">3. Consent</p>
                        <p>Knowledge and consent are required for the collection, use or disclosure of Personal Information except where required or permitted by law. Providing us with your Personal Information is always your choice. However, your decision not to provide certain information may limit our ability to provide you with our products or services. We will not require you to consent to the collection, use, or disclosure of information as a condition to the supply of a product or service, except as required to be able to supply the product or service</p>
                    </FadeInSection>
                </FadeInSection>
                <FadeInSection type="slideDown" delay={1}>
                    <FadeInSection type="zoom" delay={1}>
                        <p className="mt-8">4. Limiting Collection</p>
                        <p>The Personal Information collected will be limited to those details necessary for the purposes identified by us. With your consent, we may collect Personal Information from you in person, over the telephone or by corresponding with you via mail, facsimile, or the Internet.</p>
                    </FadeInSection>
                </FadeInSection>
                <FadeInSection type="slideDown" delay={1}>
                    <FadeInSection type="zoom" delay={1}>
                        <p className="mt-8">5. Limiting Use, Disclosure and Retention</p>
                        <p>Personal Information may only be used or disclosed for the purpose for which it was collected unless you have otherwise consented, or when it is required or permitted by law. Personal Information will only be retained for the period of time required to fulfill the purpose for which we collected it or as may be required by law. [If applicable, include a description of any parties with whom you may share Personal Information.</p>
                    </FadeInSection>
                </FadeInSection>
                <FadeInSection type="slideDown" delay={1}>
                    <FadeInSection type="zoom" delay={1}>
                        <p className="mt-8">6. Accuracy</p>
                        <p>Personal Information will be maintained in as accurate, complete and up-to-date form as is necessary to fulfill the purposes for which it is to be used.</p>
                    </FadeInSection>
                </FadeInSection>
                <FadeInSection type="slideDown" delay={1}>
                    <FadeInSection type="zoom" delay={1}>
                        <p className="mt-8">7. Safeguarding Customer Information</p>
                        <p>Personal Information will be protected by security safeguards that are appropriate to the sensitivity level of the information. We take all reasonable precautions to protect your Personal Information from any loss or unauthorized use, access or disclosure.</p>
                    </FadeInSection>
                </FadeInSection>
            </div>
        </div>
    );
};

export default PrivacyPolicy;