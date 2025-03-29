import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
const VerifiedCard = ({image, title, location, price}) => {
    return (
        <div className={`shadow-[0px_8px_20px_rgba(0,0,0,0.25),0px_-4px_10px_rgba(0,0,0,0.1)] w-[100%] rounded-[8px] pb-10 bg-white`}>
            <div>
                <img src={image} alt="House" className={`h-[208px] w-full rounded-t-[8px]`}/>
            </div>
            <div className={`pt-4 px-5`}>
                
                <div className="flex justify-end items-end cursor-pointer">
                <span className="flex items-center justify-center border border-gray-300 rounded-full p-2 text-[#015A05] text-[14px]"><FaArrowRight/></span>
                </div>
                <div className="space-y-1">
                <h2 className="text-[20px] font-[400] font-primary text-[#015A05]">{title}</h2>
                <div className="flex items-center gap-2">
                    <span className="text-[#015A05]"><IoLocationOutline /></span>
                    <p className="text-[20px] font-[400] font-primary text-[#015A05]">{location}</p>
                </div>
                <p className="text-[#015A05] font-primary text-[20px] font-[700]">{price}</p>
                </div>
            </div>
        </div>
    );
}

export default VerifiedCard;