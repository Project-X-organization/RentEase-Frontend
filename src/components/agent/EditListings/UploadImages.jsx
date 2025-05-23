/*import ImageUploadSection from "./ImagesUploadSection";

const UploadImages = ({ register, errors, setValue, clearErrors, getValues, }) => {
    return (
        <div className="lg:px-12">
            <div className="flex items-center lg:mb-8 lg:mt-16">
                <hr className="lg:w-[32%] w-[25%] bg-gray-400 h-1 mr-4" />
                <h2 className="text-2xl text-[#428242] font-bold">Upload Images</h2>
            </div>
            <p className="lg:p-4 lg:px-8 mx-4 lg:mx-0 mt-8 p-2 text-red-500 bg-[#EFFFF4] lg:text-xl mb-12 text-center lg:text-left">
                Maximum of 5mb size per image type
            </p>
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

export default UploadImages;*/
import ImageUploadSection from "./ImagesUploadSection";

const UploadImages = ({
  register,
  errors,
  setValue,
  clearErrors,
  getValues,
  initialData = {}, // accept initialData for prefilled images
}) => {
  return (
    <div className="lg:px-12">
      <div className="flex items-center lg:mb-8 lg:mt-16">
        <hr className="lg:w-[32%] w-[25%] bg-gray-400 h-1 mr-4" />
        <h2 className="text-2xl text-[#428242] font-bold">Upload Images</h2>
      </div>
      <p className="lg:p-4 lg:px-8 mx-4 lg:mx-0 mt-8 p-2 text-red-500 bg-[#EFFFF4] lg:text-xl mb-12 text-center lg:text-left">
        Maximum of 5mb size per image type
      </p>
      <ImageUploadSection
        register={register}
        errors={errors}
        setValue={setValue}
        clearErrors={clearErrors}
        getValues={getValues}
        initialData={initialData} // pass initial images to child component
      />
    </div>
  );
};

export default UploadImages;

