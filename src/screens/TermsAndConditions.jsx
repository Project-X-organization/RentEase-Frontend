import TermsAndConditions from "../components/TermsAndConditions";

const TermsAndConditionsScreen = () => {
    return (
        <div className="pt-4">
            <img src="/logo.png" alt="MyCareTaker Logo" className="w-32 lg:w-44 lg:h-16 lg:mb-4 justify-self-center lg:justify-self-start lg:ml-8" />
            <TermsAndConditions />
        </div>
    );
};

export default TermsAndConditionsScreen;