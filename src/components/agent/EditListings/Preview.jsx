import { useState, useEffect } from "react";
import DetailsSection from "./DetailsSection";
import PriceSection from "./PriceSection";
import ImageUploadSection from "./ImagesUploadSection";

const Preview = ({
  register,
  errors,
  setValue,
  clearErrors,
  getValues,
  isEdit
}) => {
  // ========== DETAILS SECTION STATE ==========
  const [originalDetails, setOriginalDetails] = useState({});
  const [isDetailsModified, setIsDetailsModified] = useState(false);

  useEffect(() => {
    if (isEdit) {
        const current = {
            propertyType: getValues("propertyType"),
            propertyLocation: getValues("propertyLocation"),
            propertyDescription: getValues("propertyDescription")
        };
    setOriginalDetails(current);
    }
  }, [getValues, isEdit]);

  const handleDetailsChange = () => {
    setIsDetailsModified(true);
  };

  const cancelDetailsChanges = () => {
    Object.entries(originalDetails).forEach(([key, value]) => {
      setValue(key, value);
    });
    setIsDetailsModified(false);
  };

  return (
    <div className="lg:px-12 space-y-12">
      {/* Preview Header */}
      <div className="flex items-center lg:mb-8 lg:mt-16">
        <hr className="lg:w-[32%] w-[33%] bg-gray-400 h-1 mr-4" />
        <h2 className="text-2xl text-[#428242] font-bold">Preview</h2>
      </div>

      {/* DETAILS SECTION */}
      <div className="relative">
        <div className="flex items-center justify-between lg:mb-8 lg:mt-16">
          {isDetailsModified && (
            <button
              type="button"
              className="text-sm bg-red-500 text-white py-3 px-3 rounded hover:bg-red-600 transition"
              onClick={cancelDetailsChanges}
            >
              Cancel All House Details Changes
            </button>
          )}
        </div>
        <DetailsSection
          register={register}
          errors={errors}
          onChange={handleDetailsChange}
        />
      </div>

      {/* PRICE SECTION */}
      <PriceSection register={register} errors={errors} setValue={setValue} getValues={getValues} isEdit={true}/>

      {/* IMAGE UPLOAD SECTION */}
      <ImageUploadSection
        register={register}
        errors={errors}
        setValue={setValue}
        clearErrors={clearErrors}
        getValues={getValues}
      />
    </div>
  );
};

export default Preview;
