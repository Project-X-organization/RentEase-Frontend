const CustomButton = ({containerStyles, textStyles, iconStyles, icon, title, handlePress}) => {
    return ( 
        <div className={`${containerStyles} flex items-center justify-center bg-[#015A05] space-x-5 cursor-pointer w-[195px] py-[15px] px-[16px] rounded-[6px]`} onClick={handlePress}>
            <span className={`${iconStyles} text-white text-[16px] font-[700]`}>{icon}</span>
            <span className={`${textStyles} text-white font-primary text-[16px] leading-[24px] font-[500]`}>{title}</span>
        </div>
     );
}
 
export default CustomButton;