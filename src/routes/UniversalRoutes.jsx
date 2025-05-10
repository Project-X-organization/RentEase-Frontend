import { Routes, Route } from "react-router-dom";
import LandingPage from "../screens/universal/Landing";
import Help from "../screens/universal/Help";
import TermsAndConditions from "../screens/universal/TermsAndConditions";
import FrequentlyAskedQuestions from "../screens/universal/FAQs";
import ContactUs from "../screens/universal/ContactUs";
import PrivacyPolicy from "../screens/universal/PrivacyPolicy";

const UniversalRoutes = () => {
    return (
        <Routes>
            <Route index element={<LandingPage/>}/>
            <Route path="help" element={<Help />} />
            <Route path="terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="FAQs" element={<FrequentlyAskedQuestions />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
    );
};

export default UniversalRoutes;