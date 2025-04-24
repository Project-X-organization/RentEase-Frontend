import { Check, X, Eye } from "lucide-react";
import { useState } from "react";
import FadeInSection from "../../FadeInSection";

const Pending = ({name, transaction_id, description, transaction_date, value, payment_proof, setOpacity}) => {

    const [showPendingApproval, setShowPendingApproval] = useState(false);
    const [showPaymentProofModal, setShowPaymentProofModal] = useState(false);

    const showCustomAlert = () => {
        setOpacity(true);

        const customAlert = document.createElement("div");
        customAlert.innerHTML = `
            <div style="
                position: fixed; 
                top: 30%; 
                left: 50%; 
                transform: translateX(-50%);
                background: white; 
                color: black; 
                padding: 16px 24px; 
                border-radius: 8px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1); 
                z-index: 1000; 
                font-size: 16px; 
                width: 90%; 
                max-width: 400px; 
                display: flex; 
                flex-direction: column; 
                align-items: center;
                gap: 100px;
                text-align: center;
            ">
                <span style="font-weight: 600; font-size: 20px;">Are You Sure?</span>
    
                <div style="
                    display: flex; 
                    justify-content: space-between; 
                    width: 100%; 
                    max-width: 250px;
                    gap: 100px;
                ">
                    <button id="confirmYes" style="
                        flex: 1;
                        background: #14AE5C; 
                        color: white; 
                        border: none; 
                        padding: 10px 0; 
                        border-radius: 4px; 
                        cursor: pointer; 
                        font-size: 16px;
                    ">Yes</button>

                    <button id="confirmNo" style="
                        flex: 1;
                        background: #F24822; 
                        color: white; 
                        border: none; 
                        padding: 10px 0;         
                        border-radius: 4px; 
                        cursor: pointer; 
                        font-size: 16px;
                    ">No</button>
                </div>
            </div>
        `;

      
        document.body.appendChild(customAlert);
      
        // Close alert when "OK" button is clicked
        document.getElementById("confirmYes").addEventListener("click", () => {
          customAlert.remove();
          setOpacity(false);
          setShowPendingApproval(false);
          navigate("/agent/dashboard");
        });
      
    };

    const showRejectAlert = () => {
        setOpacity(true);

        const customAlert = document.createElement("div");
        customAlert.innerHTML = `
            <div style="
                position: fixed; top: 30%; left: 50%; transform: translate(-50%, -30%);
                background: white; padding: 16px 20px; border: 2px solid #F24822; border-radius: 8px; 
                width: 90%; max-width: 400px; height: auto;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 1000; font-size: 16px;
                display: flex; flex-direction: column; gap: 12px;
            ">
                <div style="display: flex; justify-content: flex-end;">
                    <button id="closeBtn" style="
                        background: transparent; border: none; font-size: 20px; cursor: pointer; color: #F24822;
                    ">✖</button>
                </div>

                <textarea placeholder="Please enter reason for rejection" style="
                    width: 100%; height: 150px; border-radius: 5px; border: 1px solid #ccc; 
                    font-size: 15px; text-align: center; line-height: 145px;
                    padding: 0; resize: none; font-family: inherit;
                " oninput="this.style.lineHeight='normal'"></textarea>

                <button id="closeAlert" style="
                    background: #F24822; color: white; border: none; 
                    padding: 10px 20px; border-radius: 5px; cursor: pointer; font-size: 15px;
                    align-self: center;
                ">Submit</button>
            </div>
        `;
      
        document.body.appendChild(customAlert);
      
        document.getElementById("closeBtn").addEventListener("click", () => {
            customAlert.remove();
            setOpacity(false);
          });
          
        document.getElementById("closeAlert").addEventListener("click", () => {
            // You can capture textarea value like this if needed:
            const reason = document.querySelector("textarea").value;
            console.log("Reason submitted:", reason);
          
            customAlert.remove();
            setOpacity(false);
        });
          
      
    };

    return (
        <FadeInSection type="slideRight" className="grid grid-cols-2 lg:grid-cols-[2fr_1fr] lg:gap-2 mx-auto">
            <label className="lg:pl-16 pl-4 mt-12 lg:text-lg">{name}</label>
            <button className="flex justify-center hover:text-xl lg:min-w-[50%] mt-12" onClick={() => setShowPendingApproval(true)}><Eye className="mr-2" />View</button>
            {showPendingApproval && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                    <FadeInSection type="zoom" className="lg:ml-[15%] bg-white lg:w-[50%] w-[95%] lg:min-h-screen overflow-y-auto h-[95%] z-30 relative py-6">
                        <div className="grid grid-cols-2 mx-4">
                            <label className="text-[#015A05] lg:text-2xl font-semibold">Pending Approval</label>
                            <X className="justify-self-end" onClick={() => setShowPendingApproval(false)}/>
                        </div>
                        <div className="lg:mx-20 mx-6 lg:mt-20 mt-12">
                            <div className="grid grid-cols-2 lg:gap-16 lg:my-16 my-8 lg:grid-cols-[3fr_2fr]">
                                <section>
                                    <label className="lg:text-xl font-semibold">From</label>
                                    <p className="mt-4 lg:text-xl text-gray-500">{name}</p>
                                </section>
                                <section>
                                    <label className="lg:text-xl font-semibold">Transaction No</label>
                                    <p className="mt-4 lg:text-xl text-gray-500">{transaction_id}</p>
                                </section>
                            </div>
                            <div className="grid grid-cols-2 lg:gap-16 lg:my-16 my-8 lg:grid-cols-[3fr_2fr]">
                                <section>
                                    <label className="lg:text-xl font-semibold">Description</label>
                                    <p className="mt-4 lg:text-xl text-gray-500">{description}</p>
                                </section>
                                <section>
                                    <label className="lg:text-xl font-semibold">Transaction Date</label>
                                    <p className="mt-4 lg:text-xl text-gray-500">{transaction_date}</p>
                                </section>
                            </div>
                            <div className="grid grid-cols-2 lg:gap-16 lg:grid-cols-[3fr_2fr]">
                                <label className="lg:text-xl font-semibold flex items-center">Value<span className="lg:ml-4 ml-2 lg:text-xl font-semibold text-[#015A05]">&#8358;{value}</span></label>
                                <label className="lg:text-xl font-semibold flex items-center">View attached <Eye className="lg:ml-4 ml-2 text-[#015A05] hover:scale-110" onClick={() => setShowPaymentProofModal(true)}/></label>
                            </div>
                            <div className="grid grid-cols-2 lg:gap-16 gap-4 lg:mt-20 mt-12">
                                <button className="lg:text-xl font-semibold text-[#015A05] flex lg:py-4 py-2 justify-center border border-[#015A05] hover:scale-110" onClick={showRejectAlert}>Reject<X className="lg:mt-1 ml-2"/></button>
                                <button className="lg:text-xl font-semibold text-white flex lg:py-4 py-2 justify-center border bg-[#015A05] hover:scale-110" onClick={showCustomAlert}>Approve<Check className="lg:mt-1 ml-2"/></button>
                            </div>
                            <div className="flex items-center justify-center lg:mt-8 mt-6 lg:mb-14">
                                <img src="/Alert.png" alt="alert" className="mr-2"/>
                                <p className="italic">Always view attached evidence of payment before approving</p>
                            </div>
                            {showPaymentProofModal && (
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
                            )}
                        </div>
                    </FadeInSection>
                </div>
            )}
        </FadeInSection>
    );
};

export default Pending;