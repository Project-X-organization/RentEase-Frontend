import { usePDF } from "react-to-pdf";
import { LuDot } from "react-icons/lu";
import CustomButton from "../../components/user/home/CustomButton";
const Reciept = () => {
  const { toPDF, targetRef } = usePDF({ filename: "myCareTaker.pdf" });
  return (
    <div>
      <div ref={targetRef}>
        <div className="px-10 pt-2 pb-10">
          <img src="/logo.png" className="h-[60px]" />
        </div>
        <div className="bg-[#015A05] h-[10vh] flex justify-end items-end">
          <div className="bg-white flex justify-center items-center py-2 lg:w-[30%] w-[100%] sm:mr-32 mr-10">
            <p className="font-primary font-[700] md:text-[34px] text-[26px] tracking-[128%]">
              Payment Receipt
            </p>
          </div>
        </div>
        <div className="px-8">
          <h4 className="font-primary sm:text-[26px] text-[22px] font-[700] tracking-[128%] my-8">
            Payment Confirmation to:
          </h4>
          <div className="lg:w-[50%] sm:w-[80%] w-[100%] space-y-4">
            <h4 className="font-primary sm:text-[26px] text-[22px] font-[700] tracking-[128%]">
              Name:
            </h4>

            <div className="flex justify-between">
              <p className="font-primary sm:text-[28px] text-[20px] font-[500]">Email:</p>
              <p className="font-primary sm:text-[28px] text-[20px] font-[400]">
                CiromaAG@gmail.com
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-primary sm:text-[28px] text-[20px] font-[500]">
                Phone number:
              </p>
              <p className="font-primary sm:text-[28px] text-[20px] font-[400]">
                07055****6167
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-primary sm:text-[28px] text-[20px] font-[500]">Date:</p>
              <p className="font-primary sm:text-[28px] text-[20px] font-[400]">
                22nd February 2025
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-primary sm:text-[28px] text-[20px] font-[500]">
                Payment Method:
              </p>
              <p className="font-primary sm:text-[28px] text-[20px] font-[400]">
                Mobile Transfer
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-0 my-14">
            <LuDot />
            <span className="border-t border-[#000000] w-[70%]"></span>
            <LuDot />
          </div>
          <div>
            <h4 className="font-primary sm:text-[26px] text-[18px] font-[500] tracking-[128%] mt-8 mb-5">
              Payment breakdown
            </h4>
            <div className="border border-black bg-[#F4FFF5] sm:px-10 px-6 py-2">
            <div className="flex sm:space-x-14 space-x-5">
              <div className="py-5 space-y-1.5">
                <p className="font-primary sm:text-[28px] text-[20px] font-[500]">
                  Annual Rent
                </p>
                <p className="font-primary sm:text-[28px] text-[20px] font-[500]">
                  Service Charge
                </p>
                <p className="font-primary sm:text-[28px] text-[20px] font-[500]">V.A.T</p>
              </div>
              <div className="border-l border-black h-[28vh]"></div>
              <div className="py-5 space-y-1.5">
                <p className="font-primary sm:text-[28px] text-[20px] font-[500]">N700,000</p>
                <p className="font-primary sm:text-[28px] text-[20px] font-[500]">N50,000</p>
                <p className="font-primary sm:text-[28px] text-[20px] font-[500]">N0</p>
              </div>
            </div>
            <div className="flex sm:space-x-28 space-x-10 items-centet justify-end">
              <p className="font-primary sm:text-[28px] text-[20px] font-[600] text-[#428242]">
                Grand Total
              </p>
              <p className="font-primary sm:text-[28px] text-[20px] font-[600] text-[#428242]">
                N750,000
              </p>
            </div>
            </div>
          </div>
          </div>
          </div>
          <div className="px-8">
          <div>
            <p className="text-[18px] font-[300] font-primary my-4">Print your receipt <span className="text-[#428242] underline cursor-pointer" onClick={() => toPDF()}>Here</span></p>
          </div>
          <div className="lg:w-[30%] md:w-[50%] w-[100%] space-y-3 mb-10">
            <CustomButton title="Done! Leave a feedback" textStyles="text-white sm:text-[20px] text-center text-[16px] font-[500]"/>
            <CustomButton title="No, next time" containerStyles="bg-[#6CE9A6] py-[8px]" textStyles="text-[#428242] sm:text-[18px] text-[14px]"/>
          </div>
          </div>
        
    </div>
  );
};

export default Reciept;
