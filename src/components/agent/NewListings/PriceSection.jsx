const PriceSection = ({ register, errors }) => {
    return (
        <div className="lg:pl-8 px-4">
            <div className="flex lg:w-[40%] w-full justify-between items-center mt-8">
                <label className="lg:text-xl font-semibold">Annual Rent</label>
                <div>
                    <span className="text-2xl font-semibold mr-4">&#8358;</span>
                    <input {...register("annualRent", { required: "This Field is required" })}
                        type="numner"
                        className="w-[48] border border-[#14AE5C] focus:border-black focus:outline-none px-1 py-1 lg:text-xl"/>
                    {/* Error Message */}
                    {errors.annualRent && <p className="text-red-500 text-sm mt-1">{errors.annualRent?.message}</p>}
                </div>
            </div>
            <div className="flex lg:w-[40%] w-full justify-between items-center mt-4 lg:mt-12">
                <label className="lg:text-xl font-semibold">Other Charges</label>
                <div>
                    <span className="text-2xl font-semibold mr-4">&#8358;</span>
                    <input {...register("otherCharges", { required: "This Field is required" })}
                        type="numner"
                        className="w-[48] border border-[#14AE5C] focus:border-black focus:outline-none px-1 py-1 lg:text-xl"/>
                    {/* Error Message */}
                    {errors.otherCharges && <p className="text-red-500 text-sm mt-1">{errors.otherCharges?.message}</p>}
                </div>
            </div>
            <p className="italic mt-4 lg:mt-8">Service charge is pecked at 10% of annual Rent</p>
            <div className="grid lg:grid-cols-[2fr_3fr]">
                <div className="flex justify-between items-center mt-4 lg:mb-20">
                    <label className="lg:text-xl font-semibold">Service Charges</label>
                    <div>
                        <span className="text-2xl font-semibold mr-4">&#8358;</span>
                        <input {...register("serviceCharges", { required: "This Field is required" })}
                        type="numner"
                        className="w-[48] border border-[#14AE5C] focus:border-black focus:outline-none px-1 py-1 lg:text-xl"/>
                        {/* Error Message */}
                        {errors.serviceCharges && <p className="text-red-500 text-sm mt-1">{errors.serviceCharges?.message}</p>}
                    </div>
                </div>
                <div className="flex justify-between lg:w-[70%] items-center mt-4 mb-8 lg:mb-20 lg:pl-[15%]">
                    <label className="lg:text-xl font-semibold">Grand Total</label>
                    <div>
                        <span className="text-2xl font-semibold mr-4">&#8358;</span>
                        <input {...register("grandTotal", { required: "This Field is required" })}
                        type="numner"
                        className="w-[48] border border-[#14AE5C] focus:border-black focus:outline-none px-1 py-1 lg:text-xl"/>
                        {/* Error Message */}
                        {errors.grandTotal && <p className="text-red-500 text-sm mt-1">{errors.grandTotal?.message}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceSection;