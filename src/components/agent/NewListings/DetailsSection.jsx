import InputField from "./InputField";

const DetailsSection = ({register, errors}) => {
    return (
        <div className="px-4 lg:px-0">
            <InputField label="Property Type" name="propertyType" type="select" options={["Two Bedroom Flat","Semi-detached 2 Bedroom", "Luxury 3 Bedroom", "Modern 4 Bedroom"]} register={register} errors={errors}/>
            <InputField label="Property Location" name="propertyLocation" type="text" placeholder="Enter Full Property Address Here" register={register} errors={errors}/>
            <InputField label="Property Description" name="propertyDescription" type="textarea" register={register} errors={errors}/>
        </div>
    );
};
export default DetailsSection;