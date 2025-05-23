import { useEffect, useState } from "react";
import Navbar from "../../components/agent/NavBar";
import Header from "../../components/agent/Header";
import FadeInSection from "../../components/universal/FadeInSection";
import { MoveRightIcon, ChevronLeft, MoveDownIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import HouseDetails from "../../components/agent/EditListings/HouseDetails";
import RentalPrice from "../../components/agent/EditListings/RentalPrice";
import UploadImages from "../../components/agent/EditListings/UploadImages";
import Preview from "../../components/agent/EditListings/Preview";

const EditSubmissions = ({ agent = "MyCareTaker@gmail.com" }) => {
    const { register, handleSubmit, formState: { errors }, setValue, clearErrors, getValues, reset } = useForm();
    const sections = ["House Details", "Rental Price", "Upload Images", "Preview"];
    const [activeIndex, setActiveIndex] = useState(0);
    const [initialData, setInitialData] = useState(null);
    const [isDataLoaded, setIsDataLoaded] = useState(false); // Add this flag
    const [opacity, setOpacity] = useState(false);
    const navigate = useNavigate();
    const { productId } = useParams();

    useEffect(() => {
        // Full dummy listing data
        const fetchListingData = async () => {
            const data = {
                // HouseDetails
                propertyType: "Luxury 3 Bedroom",
                propertyLocation: "123 Banana Island, Lagos",
                propertyDescription: "Spacious and modern 3-bedroom apartment with ocean view.",

                // RentalPrice
                annualRent: 850000,
                otherCharges: 50000,
                serviceCharges: 85000,
                grandTotal: 20000,

                // UploadImages
                /*uploadedImages: {
                    "Living Room": "/House-1.png",
                    "Bedroom": "/House-2.png",
                    "Kitchen": "/House-1.png",
                    "Bathroom": "/House-2.png",
                }*/
            };
            setInitialData(data);
            if (!isDataLoaded) { // Only reset once when data is first loaded
                reset(data);
                setIsDataLoaded(true);
            }
        };
        fetchListingData();
    }, []); // Remove dependencies to prevent re-runs

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
            <span>✅ Listing updated successfully. Changes will be reflected after review.</span>
            <button id="closeAlert" style="
              margin-left: 15px; background: #065f46; color: white; border: none; 
              padding: 5px 10px; border-radius: 3px; cursor: pointer; font-size: 14px;
            ">OK</button>
          </div>
        `;
        document.body.appendChild(customAlert);
        document.getElementById("closeAlert").addEventListener("click", () => {
            customAlert.remove();
            navigate("/agent/dashboard");
        });
    };

    const onSubmit = (data) => {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });
    
        // Debugging
        for (let pair of formData.entries()) {
            console.log(`${pair[0]}:`, pair[1]);
        }
        setOpacity(true);
        showCustomAlert();
    };

    if (!initialData) return <div className="p-10 text-center">Loading...</div>;

    return (
        <div className="relative">
            {opacity && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"></div>}
            <FadeInSection type="slideUp"><Navbar /></FadeInSection>
            <FadeInSection type="slideRight"><Header agentEmail={agent} /></FadeInSection>

            <FadeInSection type="slideDown">
                <div className="flex lg:px-12 mt-8 lg:my-8">
                    <hr className="lg:w-[32%] w-[20%] bg-gray-400 h-1 mt-4 mr-4" />
                    <h2 className="text-xl text-[#428242] font-bold">Edit Submitted Listing</h2>
                </div>

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

                <div className="lg:hidden flex flex-col items-center my-12 lg:px-12 px-4 justify-center">
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

            <form onSubmit={handleSubmit(onSubmit)} className="lg:px-4">
                {activeIndex === 0 && (
                    <FadeInSection type="slideDown">
                        <HouseDetails
                            register={register}
                            errors={errors}
                            getValues={getValues}
                            setValue={setValue}
                            isEdit={true}
                        />
                    </FadeInSection>
                )}
                {activeIndex === 1 && (
                    <FadeInSection type="slideDown">
                        <RentalPrice
                            register={register}
                            errors={errors}
                            getValues={getValues}
                            setValue={setValue}
                            isEdit={true}
                        />
                    </FadeInSection>
                )}
                {activeIndex === 2 && (
                    <FadeInSection type="slideDown">
                        <UploadImages
                            register={register}
                            errors={errors}
                            getValues={getValues}
                            setValue={setValue}
                            clearErrors={clearErrors}
                            isEdit={true}
                            initialData={initialData?.uploadedImages}
                        />
                    </FadeInSection>
                )}
                {activeIndex === 3 && (
                    <FadeInSection type="slideDown">
                        <Preview
                            register={register}
                            errors={errors}
                            getValues={getValues}
                            setValue={setValue}
                            clearErrors={clearErrors}
                            isEdit={true}
                        />
                    </FadeInSection>
                )}

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
                            Submit Updates
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default EditSubmissions;