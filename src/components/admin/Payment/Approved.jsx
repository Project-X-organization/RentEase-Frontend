import { Eye, X } from "lucide-react";
import FadeInSection from "../../universal/FadeInSection";

const Approved = ({name, approved_at, payment_proof, index, activeModalIndex, setActiveModalIndex }) => {
    const isActive = activeModalIndex === index;
    
    return (
        <FadeInSection type="slideRight" className="lg:w-[80%] mx-auto">
            <div className="grid grid-cols-3 lg:grid-cols-[3fr_2fr_2fr] lg:gap-2 space-y-12"><label className="lg:pl-0 pl-4 mt-12 lg:text-lg">{name}</label>
            <button className="flex justify-center hover:text-xl" onClick={() => setActiveModalIndex(index)}><Eye className="mr-2" />View</button>
            <label className="flex text-[#14AE5C] italic mr-4">approved {approved_at}</label></div>
            {isActive && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex justify-center z-50"
                >
                    <FadeInSection type="zoom" className="flex my-auto lg:ml-[15%]">
                        <img
                            src={payment_proof}
                            alt="Large View"
                            className="max-w-[80%] max-h-[80%] rounded shadow-lg bg-white mx-auto"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <X className="text-gray-200" onClick={() => setActiveModalIndex(null)}/>
                    </FadeInSection>
                </div>
            )}
        </FadeInSection>
    );
};

export default Approved;