import { useState } from "react";
import Navbar from "../../components/agent/NavBar";
import Header from "../../components/agent/Header";
import FadeInSection from "../../components/universal/FadeInSection";
import { MoveRightIcon, ChevronLeft, MoveDownIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import HouseDetails from "../../components/agent/NewListings/HouseDetails";
import RentalPrice from "../../components/agent/NewListings/RentalPrice";
import UploadImages from "../../components/agent/NewListings/UploadImages";
import Preview from "../../components/agent/NewListings/Preview";

const NewListings = ({ agent = "MyCareTaker@gmail.com" }) => {
    const { register, handleSubmit, formState: { errors }, setValue, clearErrors, getValues } = useForm();
    const sections = ["House Details", "Rental Price", "Upload Images", "Preview"];
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

    const handleNext = (e) => {
        e.preventDefault();
        if (activeIndex < sections.length - 1) {
            setActiveIndex((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        if (activeIndex > 0) {
            setActiveIndex((prev) => prev - 1);
        }
    };

    const showCustomAlert = () => {
        const customAlert = document.createElement("div");
        customAlert.innerHTML = `
          <div style="
            position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
            background: #d1fae5; color: #065f46; padding: 12px 20px; border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 1000; font-size: 16px;
            display: flex; align-items: center; justify-content: space-between;
          ">
            <span>✅ New listing submitted successfully, a response will be sent to your dashboard after review. Thank You!</span>
            <button id="closeAlert" style="
              margin-left: 15px; background: #065f46; color: white; border: none; 
              padding: 5px 10px; border-radius: 3px; cursor: pointer; font-size: 14px;
            ">OK</button>
          </div>
        `;
      
        document.body.appendChild(customAlert);
      
        // Close alert when "OK" button is clicked
        document.getElementById("closeAlert").addEventListener("click", () => {
          customAlert.remove();
          navigate("/agent/dashboard");
        });
      
    };
      

    const onSubmit = (data) => {
        console.log("Submitted Data:", data);
        showCustomAlert();// Call showCustomAlert() to display the alert
        
    };

    return (
        <div className="relative">
            {/* Navbar & Header */}
            <FadeInSection type="slideUp"><Navbar /></FadeInSection>
            <FadeInSection type="slideRight"><Header agentEmail={agent} /></FadeInSection>

            {/* Title */}
            <FadeInSection type="slideDown">
                <div className="flex lg:px-12 mt-8 lg:my-8">
                    <hr className="lg:w-[32%] w-[30%] bg-gray-400 h-1 mt-4 mr-4" />
                    <h2 className="text-xl text-[#428242] font-bold">New Listing</h2>
                </div>

                {/* Navigation Buttons */}
                <div className="hidden lg:grid lg:grid-cols-[2fr_1fr_2fr_1fr_2fr_1fr_2fr] items-center mt-12 lg:px-12">
                    {sections.map((section, index) => (
                        <>
                            <button
                                key={section}
                                className={`p-8 border border-gray-400 border-b-4 border-r-4 text-xl hover:scale-110 transition ${
                                    activeIndex === index ? "font-bold text-black" : "text-gray-400"
                                }`}
                                onClick={() => setActiveIndex(index)}
                            >
                                {section}
                            </button>
                            {index < sections.length - 1 && (
                                <MoveRightIcon size={140} strokeWidth={0.5} className="text-[#428242]" />
                            )}
                        </>
                    ))}
                </div>
                <div className="lg:hidden flex flex-col items-center my-12 lg:px-12 px-4 justify center">
                    {sections.map((section, index) => (
                        <>
                            <button
                                key={section}
                                className={`w-[80%] p-8 border border-gray-400 border-b-4 border-r-4 text-xl hover:scale-110 transition ${
                                    activeIndex === index ? "font-bold text-black" : "text-gray-400"
                                }`}
                                onClick={() => setActiveIndex(index)}
                            >
                                {section}
                            </button>
                            {index < sections.length - 1 && (
                                <MoveDownIcon size={40} strokeWidth={0.5} className="text-[#428242]" />
                            )}
                        </>
                    ))}
                </div>
            </FadeInSection>

            {/* Form Wrapper */}
            <form onSubmit={handleSubmit(onSubmit)} className="lg:px-4">
                {/* Render the active section */}
                {activeIndex === 0 && <FadeInSection type="slideDown"><HouseDetails register={register} errors={errors} /></FadeInSection>}
                {activeIndex === 1 && <FadeInSection type="slideDown"><RentalPrice register={register} errors={errors} /></FadeInSection>}
                {activeIndex === 2 && <FadeInSection type="slideDown"><UploadImages register={register} errors={errors} getValues={getValues} setValue={setValue} clearErrors={clearErrors} /></FadeInSection>}
                {activeIndex === 3 && <FadeInSection type="slideDown"><Preview register={register} errors={errors} getValues={getValues} setValue={setValue} clearErrors={clearErrors} /></FadeInSection>}

                {/* Back & Save & Continue Buttons */}
                <div className="flex justify-between py-12 px-4 lg:px-16">
                    {activeIndex > 0 && (
                        <button
                            type="button"
                            className="flex items-center lg:py-3 lg:px-6 p-2 bg-[#428242] text-white lg:text-lg rounded hover:bg-green-700 transition"
                            onClick={handleBack}
                        >
                            <ChevronLeft />
                            <span className="ml-2">Back</span>
                        </button>
                    )}

                    {activeIndex < sections.length - 1 ? (
                        <button
                            type="button"
                            className="lg:py-3 lg:px-6 p-2 bg-[#428242] text-white lg:text-lg rounded hover:bg-green-700 transition ml-auto"
                            onClick={handleNext}
                        >
                            Save & Continue
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="lg:py-3 lg:px-6 py-2 px-4 bg-[#428242] text-white lg:text-lg rounded hover:bg-green-700 transition ml-auto"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default NewListings;
