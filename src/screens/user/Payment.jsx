import CustomButton from "../../components/user/home/CustomButton";
import {useNavigate} from "react-router-dom"
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { useState, useRef } from "react";

const Payment = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
  
    const openFileManager = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setSelectedFile(file.name);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex md:flex-row flex-col w-full space-y-4">
            <div className="bg-white lg:w-[50%] md:w-[60%] w-full">
                <div className="pl-5 pt-4">
                    <img src="/logo.png" alt="Logo" className="h-[66px]"/>
                </div>
                <div className="px-10">
                <h2 className="text-[#428242] font-primary font-[400] lg:text-[28px] text-[24px] leading-[128%] my-8">Payment Information</h2>
                <div className="lg:w-[80%] w-[100%] space-y-4">
                    <div className="flex items-center justify-between">
                        <p className="font-primary font-[400] lg:text-[22px] text-[18px] leading-[36px]">Account number: </p>
                        <p className="font-primary font-[400] lg:text-[22px] text-[18px] leading-[36px]">0022xxxx564</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="font-primary font-[400] lg:text-[22px] text-[18px] leading-[36px]">Account Name: </p>
                        <p className="font-primary font-[400] lg:text-[22px] text-[18px] leading-[36px]">MyCareTaker Listings</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="font-primary font-[400] lg:text-[22px] text-[18px] leading-[36px]">Bank: </p>
                        <p className="font-primary font-[400] lg:text-[22px] text-[18px] leading-[36px]">United Bank of Africa</p>
                    </div>
                </div>
                <p className="font-[400] font-primary text-[12px] my-4">(Kindly cross check and confirm the account details before completing the transaction)</p>
                <h2 className="text-[#428242] font-primary lg:text-[28px] text-[24px] font-[400]">Proof of Payment</h2>
                <h2 className="font-primary lg:text-[22px] text-[18px] font-[400] my-2">Kindly upload evidence of payment below</h2>
                <div className="flex items-center space-x-4 my-4 ">
                    <div className="bg-[#F4FFF5] flex items-center justify-between px-5 py-1 cursor-pointer space-x-4" onClick={openFileManager}>
                        <p className="font-[400] lg:text-[18px] text-[14px] font-primary">File upload</p>
                        <FaAngleDown />
                    </div>
                    <p className="font-primary text-[13px] font-500 italic">(JPG,PDF,Image)</p>
                </div>
                <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange}/>
                {selectedFile && (
                    <p className="my-2 lg:text-[16px] text-[14px] text-gray-700 font-primary">Selected File: {selectedFile}</p>
                )}
                <div className="space-y-4 mb-20 mt-6">
                    <CustomButton title="I have sent the money" textStyles="text-white lg:text-[20px] text-[16px] text-center" handlePress={openModal}/>
                    <CustomButton title="Cancel Payment" containerStyles="bg-[#6CE9A6]" textStyles="text-[#428242] lg:text-[20px] text-[16px] text-center"/>
                </div>
                </div>
            </div>
            <div className="md:w-[50%] w-full flex flex-col justify-center items-center">
                <div className="relative">
                    <img src="/image.png" alt="property"/>
                </div>
                <div className="relative">
                    <div className="relative">
                        <img src="/mycarertaker_referral.png" />
                        <CustomButton title="Learn More" containerStyles="absolute bottom-[35px] right-12 bg-transparent border border-white rounded-[0px] py-1 px-[28px]" textStyles="text-white"/>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-[#F4FFF5] px-6 py-10 rounded-lg shadow-lg w-[80%] md:w-[50%] flex flex-col justify-center items-center">
                        <img src="/circle-check.png" className="sm:h-[182px] h-[100px]"/>
                        <h2 className="sm:text-[20px] text-[18px] font-primary font-[300] mb-4 text-center">Payment Confirmed successfully</h2>
                        <CustomButton title="Generate Receipt" textStyles="text-white lg:text-[18px] sm:text-[16px] text-[12px] text-center" containerStyles="flex-row-reverse sm:gap-2 gap-1 sm:px-[45px] px-[10px]" icon={<IoArrowForwardCircleOutline />} iconStyles="text-white text-[22px]" handlePress={() => navigate('/payment/1') }/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Payment;
