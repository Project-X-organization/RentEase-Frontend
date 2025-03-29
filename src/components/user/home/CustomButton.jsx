const CustomButton = ({containerStyles, textStyles, iconStyles, icon, title, handlePress}) => {
    return ( 
        <div className={`${containerStyles} flex items-center justify-center bg-[#015A05] space-x-5 cursor-pointer py-[15px] px-[45px] rounded-[6px]`} onClick={handlePress}>
            <span className={`${iconStyles} text-[16px] font-[700]`}>{icon}</span>
            <span className={`${textStyles}  font-primary text-[16px] leading-[24px] font-[500]`}>{title}</span>
        </div>
     );
}
 
export default CustomButton;