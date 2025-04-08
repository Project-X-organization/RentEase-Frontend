import { Check, X, Eye } from "lucide-react";
import FadeInSection from "../FadeInSection";

const Pending = ({name, setOpacity}) => {
    const showCustomAlert = () => {
        setOpacity(true);
        const customAlert = document.createElement("div");
        customAlert.innerHTML = `
          <div style="
            position: fixed; top: 40%; left: 50%; transform: translateX(-50%);
            background: white; color: black; padding: 12px 20px; border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 1000; font-size: 16px; width: 30%; height: 20%
            display: flex; flex-direction: column; align-items: center; justify-content: space-around; padding-left: auto; padding-right: auto; padding-top: 2%;
          ">
            <span style="font-weight: 600; font-size: 20px; margin-left: 37%; ">Are You Sure</span>
            <div style="display: flex; justify-content: space-around; margin-top: 15%; margin-left: 14%; margin-bottom: 5%;">
            <button id="closeAlert" style="
             background: #14AE5C; color: white; border: none; 
              padding: 5px 10px; border-radius: 3px; cursor: pointer; font-size: 20px; margin-right: 10%;
            ">Yes</button>
            <button id="closeAlert" style="
               background: #F24822; color: white; border: none; 
              padding: 5px 10px; border-radius: 3px; cursor: pointer; font-size: 20px; margin-left: 14%;
            ">No</button><div>
          </div>
        `;
      
        document.body.appendChild(customAlert);
      
        // Close alert when "OK" button is clicked
        document.getElementById("closeAlert").addEventListener("click", () => {
          customAlert.remove();
          setOpacity(false);
          navigate("/agent/dashboard");
        });
      
    };

    const showRejectAlert = () => {
        setOpacity(true);
        const customAlert = document.createElement("div");
        customAlert.innerHTML = `
            <div style="
                position: fixed; top: 30%; left: 50%; transform: translate(-50%, -30%);
                background: white; padding: 16px 20px; border: 2px solid #F24822; border-radius: 8px; 
                width: 90%; max-width: 400px; height: auto;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 1000; font-size: 16px;
                display: flex; flex-direction: column; gap: 12px;
            ">
                <div style="display: flex; justify-content: flex-end;">
                    <button id="closeBtn" style="
                        background: transparent; border: none; font-size: 20px; cursor: pointer; color: #F24822;
                    ">✖</button>
                </div>

                <textarea placeholder="Please enter reason for rejection" style="
                    width: 100%; height: 150px; border-radius: 5px; border: 1px solid #ccc; 
                    font-size: 15px; text-align: center; line-height: 145px;
                    padding: 0; resize: none; font-family: inherit;
                " oninput="this.style.lineHeight='normal'"></textarea>

                <button id="closeAlert" style="
                    background: #F24822; color: white; border: none; 
                    padding: 10px 20px; border-radius: 5px; cursor: pointer; font-size: 15px;
                    align-self: center;
                ">Submit</button>
            </div>
        `;
      
        document.body.appendChild(customAlert);
      
        document.getElementById("closeBtn").addEventListener("click", () => {
            customAlert.remove();
            setOpacity(false);
          });
          
        document.getElementById("closeAlert").addEventListener("click", () => {
            // You can capture textarea value like this if needed:
            const reason = document.querySelector("textarea").value;
            console.log("Reason submitted:", reason);
          
            customAlert.remove();
            setOpacity(false);
        });
          
      
    };

    return (
        <FadeInSection type="slideRight" className="grid grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-4 space-y-12 mx-auto">
            <label className="lg:pl-16 pl-4 mt-12 lg:text-lg">{name}</label>
            <button className="flex"><Eye className="mr-2" />View</button>
            <button className="flex text-[#14AE5C]" onClick={showCustomAlert}>Approve<Check className="ml-2" /></button>
            <button className="flex text-[#F24822]" onClick={showRejectAlert}>Reject<X className="ml-2" /></button>
        </FadeInSection>
    );
};

export default Pending;