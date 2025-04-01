import DetailsSection from "./DetailsSection";

const HouseDetails = ({register, errors}) => {
    return (
        <div className="lg:px-12 relative">
            <div className="flex items-center  lg:mb-8 lg:mt-16">
                <hr className="lg:w-[32%] w-[25%] bg-gray-400 h-1 mr-4"/>
                <h2 className="text-2xl text-[#4F4FFF] font-bold">House Details</h2>
            </div>
            <DetailsSection register={register} errors={errors}/>
        </div>
    );
};

export default HouseDetails;