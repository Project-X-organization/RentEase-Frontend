import { useEffect, useState } from "react";

const PriceSection = ({ register, errors, getValues, setValue, isEdit }) => {
    const fields = ["annualRent", "otherCharges", "serviceCharges", "grandTotal"];
    const [localValues, setLocalValues] = useState({});
    const [showCancel, setShowCancel] = useState({});

    useEffect(() => {
        if (isEdit) {
            const initialValues = {};
            fields.forEach(field => {
                initialValues[field] = getValues(field);
            });
            setLocalValues(initialValues);
        }
    }, [isEdit]);

    const handleChange = (field, value) => {
        setValue(field, value);
        setShowCancel(prev => ({ ...prev, [field]: value !== localValues[field] }));
    };

    const handleCancel = (field) => {
        setValue(field, localValues[field]);
        setShowCancel(prev => ({ ...prev, [field]: false }));
    };

    return (
        <div className="lg:pl-8 px-4">
            {/* Annual Rent */}
            <div className="flex lg:w-[40%] w-full justify-between items-center mt-8 relative">
                <label className="lg:text-xl font-semibold">Annual Rent</label>
                <div>
                    <span className="text-2xl font-semibold mr-4">&#8358;</span>
                    <input
                        type="number"
                        defaultValue={getValues("annualRent")}
                        {...register("annualRent", { required: "This Field is required" })}
                        onChange={(e) => handleChange("annualRent", e.target.value)}
                        className="w-[48] border border-[#14AE5C] focus:border-black focus:outline-none px-1 py-1 lg:text-xl"
                    />
                    {showCancel.annualRent && (
                        <button
                            type="button"
                            className="absolute top-2 lg:-right-12 right-6 text-sm text-red-500"
                            onClick={() => handleCancel("annualRent")}
                        >
                            Cancel
                        </button>
                    )}
                    {errors.annualRent && <p className="text-red-500 text-sm mt-1">{errors.annualRent.message}</p>}
                </div>
            </div>

            {/* Other Charges */}
            <div className="flex lg:w-[40%] w-full justify-between items-center mt-4 lg:mt-12 relative">
                <label className="lg:text-xl font-semibold">Other Charges</label>
                <div>
                    <span className="text-2xl font-semibold mr-4">&#8358;</span>
                    <input
                        type="number"
                        defaultValue={getValues("otherCharges")}
                        {...register("otherCharges", { required: "This Field is required" })}
                        onChange={(e) => handleChange("otherCharges", e.target.value)}
                        className="w-[48] border border-[#14AE5C] focus:border-black focus:outline-none px-1 py-1 lg:text-xl"
                    />
                    {showCancel.otherCharges && (
                        <button
                            type="button"
                            className="absolute top-2 lg:-right-12 right-6 text-sm text-red-500"
                            onClick={() => handleCancel("otherCharges")}
                        >
                            Cancel
                        </button>
                    )}
                    {errors.otherCharges && <p className="text-red-500 text-sm mt-1">{errors.otherCharges.message}</p>}
                </div>
            </div>

            <p className="italic mt-4 lg:mt-8">Service charge is pecked at 10% of annual Rent</p>

            <div className="grid lg:grid-cols-[2fr_3fr]">
                {/* Service Charges */}
                <div className="flex justify-between items-center mt-4 lg:mb-20 relative">
                    <label className="lg:text-xl font-semibold">Service Charges</label>
                    <div>
                        <span className="text-2xl font-semibold mr-4">&#8358;</span>
                        <input
                            type="number"
                            defaultValue={getValues("serviceCharges")}
                            {...register("serviceCharges", { required: "This Field is required" })}
                            onChange={(e) => handleChange("serviceCharges", e.target.value)}
                            className="w-[48] border border-[#14AE5C] focus:border-black focus:outline-none px-1 py-1 lg:text-xl"
                        />
                        {showCancel.serviceCharges && (
                            <button
                                type="button"
                                className="absolute top-2 lg:-right-12 right-6 text-sm text-red-500"
                                onClick={() => handleCancel("serviceCharges")}
                            >
                                Cancel
                            </button>
                        )}
                        {errors.serviceCharges && <p className="text-red-500 text-sm mt-1">{errors.serviceCharges.message}</p>}
                    </div>
                </div>

                {/* Grand Total */}
                <div className="flex justify-between lg:w-[70%] items-center mt-4 mb-8 lg:mb-20 lg:pl-[15%] relative">
                    <label className="lg:text-xl font-semibold">Grand Total</label>
                    <div>
                        <span className="text-2xl font-semibold mr-4">&#8358;</span>
                        <input
                            type="number"
                            defaultValue={getValues("grandTotal")}
                            {...register("grandTotal", { required: "This Field is required" })}
                            onChange={(e) => handleChange("grandTotal", e.target.value)}
                            className="w-[48] border border-[#14AE5C] focus:border-black focus:outline-none px-1 py-1 lg:text-xl"
                        />
                        {showCancel.grandTotal && (
                            <button
                                type="button"
                                className="absolute top-2 lg:-right-12 right-6 text-sm text-red-500"
                                onClick={() => handleCancel("grandTotal")}
                            >
                                Cancel
                            </button>
                        )}
                        {errors.grandTotal && <p className="text-red-500 text-sm mt-1">{errors.grandTotal.message}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceSection;
