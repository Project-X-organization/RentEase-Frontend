import PriceSection from "./PriceSection";
const RentalPrice = ({register, errors}) => {
    return (
        <div className="lg:px-12">
            <div className="flex items-center  lg:mb-12 lg:mt-16">
                <hr className="lg:w-[32%] w-[25%] bg-gray-400 h-1 mr-4"/>
                <h2 className="text-2xl text-[#428242] font-bold">Rental Price</h2>
            </div>
            <PriceSection register={register} errors={errors}/>
        </div>
    );
};

export default RentalPrice;