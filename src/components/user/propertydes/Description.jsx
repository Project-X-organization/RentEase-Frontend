import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { GoShareAndroid } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { BsCameraVideo } from "react-icons/bs";
import VerifiedCard from "../home/VerifiedCard";
import CustomButton from "../home/CustomButton"

const Description = () => {
    const [fullname, setFullname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const data = [
        {
            id: 1,
            image: "/Hero-bg.jfif",
            title: "Semi detached 2 bedroom",
            location: "Ibeju Lekki Lagos",
            price: "#700,000/Year"
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Fullname:', fullname);
        console.log('Phone Number:', phoneNumber);
      };

  return (
    <div className="my-16">
      {/* First Description */}
      <h2 className="text-[#059669] font-[700] text-[30px] font-primary leading-[-128%] tracking-[-2%]">
        Description
      </h2>
      <p className="sm:text-[26px] text-[20px] font-primary leading-[48px] tracking-[-5%] my-4">
        Nestled in the sought-after friendly community of Ikotun, this spacious
        end-unit bungalow is a rare find! From the moment you step onto your
        sunny southwest-facing patio, you’ll fall in love with the warmth and
        charm this home offers. Inside, sleek laminate flooring flows through
        the open-concept living space, where large windows fill the home with
        natural light. The spacious living room invites relaxation, while the
        dining area is perfect for hosting unforgettable meals. The kitchen
        boasts stainless steel appliances, ample storage, and modern
        finishes—ideal for any home chef. Retreat to your large bedroom,
        complete with a walk-in closet and direct access to the shared outdoor
        green space, creating a peaceful retreat just outside your door
      </p>
      <div className="flex justify-center items-center space-x-4">
        <div className="bg-[#A7F3D0] px-3 py-3 rounded-[22px]">
          <CiHeart className="sm:text-[35px] text-[30px]" />
        </div>
        <div className="bg-[#A7F3D0] px-3 py-3 rounded-[22px]">
          <GoShareAndroid className="sm:text-[35px] text-[30px]" />
        </div>
        <div className="bg-[#A7F3D0] px-3 py-3 rounded-[22px]">
          <CiLocationOn className="sm:text-[35px] text-[30px]" />
        </div>
        <div className="bg-[#A7F3D0] px-3 py-3 rounded-[22px]">
          <BsCameraVideo className="sm:text-[35px] text-[30px]" />
        </div>
      </div>

      {/* Second Description */}
      <div>
        <div className="flex sm:flex-row flex-col justify-between gap-6 my-6">
        <div>
          <h2 className="font-primary font-[400] sm:text-[30px] text-[26px] leading-[-128%]">Property: 2 Bedroom Flat</h2>
          <p className="font-primary font-[400] sm:text-[20px] text-[18px] mt-2">Annual Rent: #700,000 <br/>Service fee: #50,000</p>
        </div>
        <div>
            <h2 className="font-primary font-[400] sm:text-[30px] text-[26px] leading-[-128%]">Location: No 5, Ayomide Street, off MCC <br/> Road, Ikotun, Lagos State</h2>
        </div>
        </div>

        <div className="flex sm:flex-row flex-col  sm:gap-0 gap-6 justify-between">
            <h2 className="font-primary font-[700] sm:text-[30px] text-[26px] leading-[-128%]">Total Payable: #750,000</h2>
            <h2 className="font-primary font-[600] sm:text-[32px] text-[28px] leading-[-128%]">Book a Tour with our agent</h2>
        </div>
      </div>

      {/* Similar house and book tour */}
      <div className="flex md:flex-row flex-col-reverse  md:justify-between justify-center items-center">
        {/* similar house */}
        <div className="md:w-[30%] w-full mt-10">
            <h2 className="font-[700] sm:text-[30px] text-[26px] leading-[-128%] font-primary">Find Similar Houses </h2>
            <div className="mt-3">
                                {data.map((item) => {
                                    return(
                                    <VerifiedCard 
                                    key={item.id}
                                    image={item.image}
                                    title={item.title}
                                    location={item.location}
                                    price={item.price}
                                    />)
                                })}  
            </div>
        </div>

        {/* tour form */}
        <div className="bg-white md:w-[40%] w-full px-7 py-8 border border-[#001821] rounded-[20px] shadow-[6px_10px_0px_0px_rgba(0,_0,_0,_0.8)] md:mt-4 md:mb-0 mt-6 mb-4">
            <h2 className="font-primary font-[700] text-[38px] leading-[128%] text-center">Book a Tour</h2>
 <form className="space-y-4 mt-6">
          <div>
            <label htmlFor="fullname" className="block font-[700] font-primary text-[16px] leading-[128%] mb-2 text-[#232445]">
              Full name
            </label>
            <input
              type="text"
              id="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Enter your full name"
              className="mt-1 block w-full p-[10px] font-primary font-[500] text-[16px] leading-[128%] text-[#7F7F7F] border bg-[#E9F3F1] border-gray-600 rounded-[7px] focus:outline-none focus:ring-1 focus:ring-[#373737] placeholder:text-gray-300 placeholder:font-[400] "
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-[700] font-primary mb-2 text-[16px] leading-[128%] text-[#232445]">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="mt-1 block w-full p-[10px] font-primary font-[500] text-[16px] leading-[128%] text-[#7F7F7F] bg-[#E9F3F1] border border-gray-600 rounded-[7px] focus:outline-none focus:ring-1 focus:ring-[#373737] placeholder:text-gray-300 placeholder:font-[400] "
            />
          </div>

          <div>
            <CustomButton title="Submit" handlePress={handleSubmit} textStyles="text-white font-[500] leading-[100%] text-center" containerStyles="rounded-[5px] mt-2"/>
          </div>
        </form>
        <div className="flex items-center space-x-3 mt-3">
            <div className="border-t-[2px] border-[#BAD9D2]  w-[50%]"></div>
            <span className="font-primary text-[#001821] font-[400] text-[16px]">OR</span>
            <div className="border-t-[2px] border-[#BAD9D2]  w-[50%]"></div>
        </div>
        <CustomButton title="Send Direct WhatsApp Message" handlePress={handleSubmit} textStyles="text-white font-[500]  leading-[100%] text-center" containerStyles="rounded-[5px] mt-[40px]"/>
        </div>
        
      </div>
      <div className="flex md:justify-end md:items-end justify-center items-center mt-8">
      <p className="font-primary md:text-end text-center font-[700] text-[20px] leading-[100%]">Interested?, Fill out the online agreement form <Link to="/rental-agreement" className="text-green-500 font-[300] text-[20px] underline">Here</Link></p>
      </div>
    </div>
  );
};
export default Description;
