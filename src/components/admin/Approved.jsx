import { X, Eye } from "lucide-react";
import FadeInSection from "../universal/FadeInSection";

const Approved = ({name, setOpacity}) => {
    const showCustomAlert = () => {
        setOpacity(true);
        const customAlert = document.createElement("div");
        customAlert.innerHTML = `
            <div style="
                position: fixed; 
                top: 30%; 
                left: 50%; 
                transform: translateX(-50%);
                background: white; 
                color: black; 
                padding: 16px 24px; 
                border-radius: 8px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1); 
                z-index: 1000; 
                font-size: 16px; 
                width: 90%; 
                max-width: 400px; 
                display: flex; 
                flex-direction: column; 
                align-items: center;
                gap: 100px;
                text-align: center;
            ">
                <span style="font-weight: 600; font-size: 20px;">Are You Sure?</span>
    
                <div style="
                    display: flex; 
                    justify-content: space-between; 
                    width: 100%; 
                    max-width: 250px;
                    gap: 100px;
                ">
                    <button id="confirmYes" style="
                        flex: 1;
                        background: #14AE5C; 
                        color: white; 
                        border: none; 
                        padding: 10px 0; 
                        border-radius: 4px; 
                        cursor: pointer; 
                        font-size: 16px;
                    ">Yes</button>

                    <button id="confirmNo" style="
                        flex: 1;
                        background: #F24822; 
                        color: white; 
                        border: none; 
                        padding: 10px 0;         
                        border-radius: 4px; 
                        cursor: pointer; 
                        font-size: 16px;
                    ">No</button>
                </div>
            </div>
        `;

      
        document.body.appendChild(customAlert);
      
        // Close alert when "OK" button is clicked
        document.getElementById("confirmYes").addEventListener("click", () => {
          customAlert.remove();
          setOpacity(false);
          navigate("/agent/dashboard");
        });
      
    };

    

    return (
        <FadeInSection type="slideRight" className="lg:w-[80%] grid grid-cols-3 lg:grid-cols-[3fr_2fr_2fr] lg:gap-2 space-y-12 mx-auto">
            <label className="lg:pl-0 pl-4 mt-12 lg:text-lg">{name}</label>
            <button className="flex justify-center hover:text-xl lg:min-w-[50%]"><Eye className="mr-2" />View</button>
            <button className="flex justify-center text-[#F24822] hover:text-xl lg:min-w-[55%] mr-4" onClick={showCustomAlert}>Delete<X className="ml-2" /></button>
        </FadeInSection>
    );
};

export default Approved;