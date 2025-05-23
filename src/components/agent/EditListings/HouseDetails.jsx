import DetailsSection from "./DetailsSection";
import { useState, useEffect } from "react";

const HouseDetails = ({ register, errors, getValues, setValue, isEdit = false }) => {
    const [originalValues, setOriginalValues] = useState({});
    const [isModified, setIsModified] = useState(false);

    useEffect(() => {
        if (isEdit) {
            const currentValues = {
                propertyType: getValues("propertyType"),
                propertyLocation: getValues("propertyLocation"),
                propertyDescription: getValues("propertyDescription")
            };
            setOriginalValues(currentValues);
        }
    }, [getValues, isEdit]);

    const handleCancelChanges = () => {
        Object.entries(originalValues).forEach(([key, value]) => {
            setValue(key, value);
        });
        setIsModified(false);
    };

    const handleChange = () => {
        setIsModified(true);
    };

    return (
        <div className="lg:px-12 relative">
            <div className="flex items-center justify-between lg:mb-8 lg:mt-16">
                <div className="flex items-center w-[80%]">
                    <hr className="lg:w-[32%] w-[25%] bg-gray-400 h-1 mr-4"/>
                    <h2 className="text-2xl text-[#428242] font-bold">House Details</h2>
                </div>
                {isEdit && isModified && (
                    <button
                        type="button"
                        className="text-sm bg-red-500 text-white py-3 px-3 rounded hover:bg-red-600 transition"
                        onClick={handleCancelChanges}
                    >
                        Cancel Changes
                    </button>
                )}
            </div>
            <DetailsSection register={register} errors={errors} onChange={handleChange} />
        </div>
    );
};

export default HouseDetails;
