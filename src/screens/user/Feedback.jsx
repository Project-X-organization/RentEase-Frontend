import { useState } from "react";
import { useForm } from "react-hook-form";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import StarRating from "../../components/user/Feedback/StarRating";
import SurveyField from "../../components/user/Feedback/SurveyField";


export default function Feedback() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        data.rating = rating;// Add rating to form data
        console.log(data); 
        alert("Feedback Submitted Successfully! Thank you for your response");
        navigate("/user/home");
        //alert(JSON.stringify(data, null, 2)); // Simulate submission
    };


  return (
    <div className="min-h-screen bg-gray-50 p-2 lg:p-8 flex justify-center">
      <div className="bg-white max-w-6xl w-full mx-auto p-4 lg:p-8 shadow-md rounded-lg">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-6">
          <img src="/logo.png" alt="Logo" className="w-28 lg:w-48 h-auto mb-4  lg:ml-2" />
          <h1 className="lg:text-3xl text-2xl font-bold text-[#428242] text-center lg:ml-[-6%]">Feedback Survey</h1>
          <Link to="/user/home" className="flex text-green-500 hover:text-green-900 justify-center absolute top-9 right-5 lg:relative lg:top-0 lg:right-0"><span className="lg:mr-2">Back to Home</span><LogOut/></Link>
        </div>

        {/* ruler */}
        <span className="text-lg font-medium">
          <hr className="border-gray-700 lg:w-1/5 lg:mt-[-30px] mt-[-10px] w-[60%] mx-auto" />
        </span>

        <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-center lg:text-2xl lg:mt-12 mb-6 font-semibold mt-8">Rate your experience with us</p>
            {/* Star Rating */}
            <StarRating rating={rating} setRating={setRating} size={50} />

            <SurveyField label="What do you like most about our services?" placeholder="We'll love to hear about it" name="preferences" type="text" register={register} errors={errors}/>
            <SurveyField label="Did you have any particular complaint?" placeholder="Your feedback is valuable to us" name="complaints" type="text" register={register} errors={errors}/>
            <SurveyField label="Would you recommend our services to your family/friends?" name="recommendations" type="radio" options={["Yes", "No"]} register={register} errors={errors}/>
            <SurveyField label="Did our listed property meet your expectations?" name="expectations" type="radio" options={["Yes", "No"]} register={register} errors={errors}/>
            <SurveyField label="Did you receive timely support and guidance from our support team?" name="timelySupport" type="radio" options={["Yes", "No"]} register={register} errors={errors}/>
            <SurveyField label="How easy was it navigating our website? On a scale of 1-5" placeholder="With 1 being Extremely Hard and 5 being Extremely Easy" name="easyNavigation" type="text" register={register} errors={errors}/>
            <SurveyField label="How did you hear about us?" placeholder="(Social Media, Web search, friends/family or others) specify as applicable" name="modeOfAdvertisement" type="text" register={register} errors={errors}/>
            <SurveyField label="Anything you want us to improve on?" name="possibleImprovements" type="textarea" register={register} errors={errors}/>
        

          {/* Buttons */}
          <div className="flex flex-col md:flex-row lg:flex-col gap-4 lg:mt-20 justify-center items-center">
            <button type="submit" className="w-full md:w-auto lg:w-[40%] bg-green-200 text-green-700 lg:text-2xl font-semibold py-3 px-6 rounded-lg hover:bg-green-400 hover:scale-110">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
