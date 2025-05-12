import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../components/user/Rental-agreenent/InputField";
import Section from "../../components/user/Rental-agreenent/Section";

export default function RentalAgreement() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const [agreeTerms, setAgreeTerms] = useState(false);
    
      const onSubmit = (data) => {
        if (!agreeTerms) {
          alert("You must agree to the terms before proceeding.");
          return;
        }
        alert("Form submitted successfully!");
        console.log("Form Submitted", data);
    };

  return (
    <div className="min-h-screen bg-gray-50 p-2 lg:p-8 flex justify-center">
      <div className="bg-white max-w-6xl w-full mx-auto p-4 lg:p-8 shadow-md rounded-lg">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-6">
          <img src="/logo.png" alt="Logo" className="w-28 lg:w-48 h-auto mb-4 mx-auto lg:ml-2" />
          <h1 className="lg:text-3xl text-2xl font-bold text-[#428242] text-center">RENTAL AGREEMENT</h1>
        </div>

        {/* "For Address" */}
        <span className="flex text-lg font-medium">
          For Address
          <hr className="border-gray-700 lg:w-2/3 lg:mt-4 lg:ml-2 w-[60%] mt-4 ml-2" />
        </span>

        <form onSubmit={handleSubmit(onSubmit)}>
         {/* Personal Information */}
         <Section title="PERSONAL INFORMATION" showArrow={true}>
            <div className="lg:col-span-2">
                <InputField label="Name" placeholder="Enter your full name" {...register("name", { required: "Name is required" })}/>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
                <InputField label="Phone No" type="tel" placeholder="Enter your phone number" {...register("phone", { required: "Phone number is required" })} />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>

            <div>
                <InputField label="Email" type="email" placeholder="Enter your email address" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/, message: "Enter a valid email" } })}/>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="lg:col-span-2">
                <InputField label="Current Address" placeholder="Enter your current address" {...register("address", { required: "Address is required" })}/>
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
            </div>

            <div className="lg:col-span-2">
                <InputField label="Reason for Leaving" placeholder="Why are you moving?" {...register("reason", { required: "Reason is required" })}/>
                {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason.message}</p>}
            </div>

            <div>
                <InputField label="Landlord's Name" placeholder="Enter landlord's full name" {...register("landlordName", { required: "Landlord's name is required" })}/>
                {errors.landlordName && <p className="text-red-500 text-sm mt-1">{errors.landlordName.message}</p>}
            </div>

            <div>
                <InputField label="Landlord's Phone No" type="tel" placeholder="Enter landlord's phone number" {...register("landlordPhone", { required: "Landlord's phone number is required" })}/>
                {errors.landlordPhone && <p className="text-red-500 text-sm mt-1">{errors.landlordPhone.message}</p>}
            </div>
          </Section>

          {/* Employment Information */}
          <Section title="EMPLOYMENT INFORMATION">
            <div className="col-span-2 lg:col-span-1">
    <           InputField label="Occupation" placeholder="Enter your occupation" {...register("occupation", { required: "Occupation is required" })}/>
                {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation.message}</p>}
            </div>

            <div className="col-span-2 lg:col-span-1">
                <InputField label="Company" placeholder="Enter company name" {...register("company", { required: "Company name is required" })}/>
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
            </div>

            <div className="col-span-2 lg:col-span-1">
                <InputField label="Address" placeholder="Enter company address" {...register("companyAddress", { required: "Company address is required" })}/>
                {errors.companyAddress && <p className="text-red-500 text-sm mt-1">{errors.companyAddress.message}</p>}
            </div>

            <div className="col-span-2 lg:col-span-1">
                <InputField label="How long have you worked there?" placeholder="Enter duration (e.g., 2 years)" {...register("workDuration", { required: "Duration is required" })}/>
                {errors.workDuration && <p className="text-red-500 text-sm mt-1">{errors.workDuration.message}</p>}
            </div>

            <div className="col-span-2">
                <InputField label="Other Sources of Income?" placeholder="Specify additional income sources" {...register("otherIncome")}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 col-span-2">
                <div>
                    <InputField label="Date (Start)" type="date" {...register("startDate", { required: "Start date is required" })}/>
                    {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate.message}</p>}
                </div>
                <div>
                    <InputField label="Date (End)" type="date" {...register("endDate", { required: "End date is required" })}/>
                    {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate.message}</p>}
                </div>

                <div>
                    <label className="text-gray-700 font-medium">Payment Frequency</label>
                    <select className="w-full px-4 py-2 my-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500" {...register("paymentFrequency", { required: "Payment frequency is required" })}>
                        <option>Monthly</option>
                        <option>Quarterly</option>
                        <option>Yearly</option>
                    </select>
                    {errors.paymentFrequency && <p className="text-red-500 text-sm mt-1">{errors.paymentFrequency.message}</p>}
                </div>
            </div>
          </Section>

          {/* References */}
          <Section title="REFERENCES">
            <div>
              <h3 className="text-lg font-semibold mb-4">Reference #1</h3>
              <InputField label="Name" placeholder="Enter reference's full name" {...register(`reference1_name`, { required: "Reference name is required" })} />
              {errors[`reference1_name`] && <p className="text-red-500 text-sm my-1">{errors[`reference1_name`]?.message}</p>}
              <InputField label="Phone No" type="tel" placeholder="Enter reference's phone number" {...register(`reference1_phone`, { required: "Reference phone number is required" })}/>
              {errors[`reference1_phone`] && <p className="text-red-500 text-sm my-1">{errors[`reference1_phone`]?.message}</p>}
              <InputField label="Relationship" placeholder="Enter relationship (e.g., Friend, Colleague)" {...register(`reference1_relationship`, { required: "Relationship is required" })}/>
              {errors[`reference1_relationship`] && <p className="text-red-500 text-sm my-1">{errors[`reference1_relationship`]?.message}</p>}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Reference #2</h3>
              <InputField label="Name" placeholder="Enter reference's full name" {...register(`reference2_name`, { required: "Reference name is required" })}/>
              {errors[`reference2_name`] && <p className="text-red-500 text-sm my-1">{errors[`reference2_name`]?.message}</p>}
              <InputField label="Phone No" type="tel" placeholder="Enter reference's phone number" {...register(`reference2_phone`, { required: "Reference phone number is required" })}/>
              {errors[`reference2_phone`] && <p className="text-red-500 text-sm my-1">{errors[`reference2_phone`]?.message}</p>}
              <InputField label="Relationship" placeholder="Enter relationship (e.g., Friend, Colleague)" {...register(`reference2_relationship`, { required: "Relationship is required" })}/>
              {errors[`reference2_relationship`] && <p className="text-red-500 text-sm my-1">{errors[`reference2_relationship`]?.message}</p>}
            </div>
          </Section>

          {/* Agreement Checkbox */}
          <div className="flex lg:justify-center gap-3 mt-6">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              className="w-5 h-5 accent-green-500"
            />
            <p className="text-sm text-gray-700 lg:text-center lg:w-[60%]">
              By clicking this, you confirm that all information provided is accurate to the best
              of your knowledge and agree to adhere to the rules governing the house.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row lg:flex-col gap-4 mt-6 justify-center items-center">
            <button type="submit" className="w-full md:w-auto lg:w-[60%] bg-[#015A05] text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-800 hover:scale-110">
              Proceed to Payment
            </button>
            <button className="w-full md:w-auto lg:w-[60%] bg-green-200 text-green-700 font-semibold py-3 px-6 rounded-lg hover:bg-green-400 hover:scale-110">
              Cancel Subscription
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
