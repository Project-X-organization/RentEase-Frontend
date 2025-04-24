import { Eye, X } from "lucide-react";
import { useState } from "react";
import FadeInSection from "../../FadeInSection";

const Rejected = ({name, rejected_at, payment_proof, reason}) => {
    const [showPaymentProofModal, setShowPaymentProofModal] = useState(false);
    const [showRejectReasonModal, setShowRejectReasonModal] = useState(false);

    return (
        <FadeInSection type="slideRight" className="lg:w-[80%] grid grid-cols-4 lg:grid-cols-[3fr_2fr_2fr_2fr] lg:gap-2 space-y-12 mx-auto">
            <label className="lg:pl-0 pl-4 mt-12 lg:text-lg">{name}</label>
            <button className="flex justify-center hover:text-xl" onClick={() => setShowPaymentProofModal(true)}><Eye className="mr-2" />View</button>
            <button className="flex justify-center text-[#F24822] hover:text-xl mr-4" onClick={() => setShowRejectReasonModal(true)}>Reason<Eye className="ml-2" /></button>
            <label className="flex italic mr-4">rejected {rejected_at}</label>
            {showPaymentProofModal && (
                <div>
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
                            <X className="text-gray-200" onClick={() => setShowPaymentProofModal(false)}/>
                        </FadeInSection>
                    </div>
                </div>
            )}
            {showRejectReasonModal && (
                <div>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-70 flex justify-center z-50"
                    >
                        <FadeInSection type="zoom" className="my-auto lg:ml-[15%] max-w-[600px] min-h-[300px] overflow-y-auto max-h-[60%] w-[90%] lg:w-[40%] border-4 border-[#F24822] bg-white lg:px-8 px-4 lg:py-4 py-2">
                            <X className="font-bold justify-self-end" onClick={() => setShowRejectReasonModal(false)}/>
                            <div className="lg:text-xl my-4 text-center italic text-[#F24822] min-h-[200px] lg:px-4 px-2 lg:py-4 py-2 border flex items-center justify-center">{reason}</div>
                        </FadeInSection>
                    </div>
                </div>
            )}
        </FadeInSection>
    );
};

export default Rejected;