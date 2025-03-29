import DetailsSection from "./DetailsSection";
import PriceSection from "./PriceSection";
import ImageUploadSection from "./ImagesUploadSection";

const Preview = ({ register, errors, setValue, clearErrors, getValues }) => {
    return (
        <div className="lg:px-12">
            <div className="flex items-center  lg:mb-8 lg:mt-16">
                <hr className="lg:w-[32%] w-[33%] bg-gray-400 h-1 mr-4"/>
                <h2 className="text-2xl text-blue-600 font-bold">Preview</h2>
            </div>
            <DetailsSection register={register} errors={errors}/>
            <PriceSection register={register} errors={errors}/>
            <ImageUploadSection register={register} errors={errors} setValue={setValue} clearErrors={clearErrors} getValues={getValues} />
        </div>
    );
};

export default Preview;