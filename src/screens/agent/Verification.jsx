import { useForm } from "react-hook-form";
import { useState } from "react";
import UploadBox from "../../components/agent/UploadBox";
import FormField from "../../components/agent/FormField";

export default function AgentVerification() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    setSuccessMessage("Documents submitted successfully! A response will be sent to your email after review.");
    reset();

    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  return (
    <div className="min-h-screen flex bg-gray-50 p-4 sm:p-8">
      <div className="bg-white p-6 sm:p-10 shadow-lg rounded-lg flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-[100%] ">
          <img src="/logo.png" alt="Logo" className="lg:w-40 w-28 sm:w-48 h-auto mb-6 sm:mb-10 lg:ml-2 lg:mt-5 mx-auto" />

          {/*<p className="text-green-700 font-medium text-lg bg-green-100 px-4 py-2 rounded-md mb-4">
            Your uploaded documents will be reviewed, and you will receive an email confirmation within 48 hours.
          </p>*/}

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-6 sm:mb-8">
            Kindly Upload Documents for Verification
          </h2>

          {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 bg-green-100 px-4 py-3 rounded-md mb-4" role="alert">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-8">
            {/* Personal Verification */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[5fr_1fr] gap-x-6 items-center">
              <div className="lg:mr-[250px]">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Personal Verification</h3>
                <FormField label="Government Issued ID" options={["Voter's Card", "NIN", "Passport", "Driver's License"]} register={register} name="govtID" errors={errors} required />
                <FormField label="ID Card Number" placeholder="E.g. 12345678901" register={register} name="idNumber" errors={errors} required />
              </div>
              <UploadBox label="ID Upload" register={register} name="idUpload" errors={errors} required />
            </div>

            {/* Address Verification */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[5fr_1fr] gap-x-6 items-center">
              <div className="lg:mr-[250px]">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Address Verification</h3>
                <FormField label="Utility Bill" options={["Electricity Bill", "Water Bill", "Other bills stating address"]} register={register} name="utilityBill" errors={errors} required />
                <FormField label="Full House Address" placeholder="E.g. No 7, Ajayi Crowther Street..." register={register} name="houseAddress" errors={errors} required />
              </div>
              <UploadBox label="Utility Bill Upload" register={register} name="utilityUpload" errors={errors} required />
            </div>

            {/* Property Ownership */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[5fr_1fr] gap-x-6 items-center">
              <div className="lg:mr-[250px]">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Property Ownership</h3>
                <FormField label="Proof of Ownership or Agency" options={["Title Deed", "Agency Agreement", "Certificate of Occupancy"]} register={register} name="ownershipProof" errors={errors} required />
                <FormField label="Issuing Authority" options={["Government", "Landlord", "Other"]} register={register} name="issuingAuthority" errors={errors} required />
              </div>
              <UploadBox label="Proof of Ownership Upload" register={register} name="ownershipUpload" errors={errors} required />
            </div>

            {/* Buttons */}
            <div className="mt-6 lg:w-[65%]">
              <button type="submit" className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-blue-900 hover:scale-105">                Submit for Review
              </button>
              <button type="button" className="w-full bg-gray-200 text-blue-600 mt-3 py-2 rounded-lg text-lg hover:bg-gray-100 hover:scale-105">
                <a href="/">Back to Sign up</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
