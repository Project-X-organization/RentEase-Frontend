import { X, Eye } from "lucide-react";
import FadeInSection from "../universal/FadeInSection";

const Deleted = ({name, deleted_at}) => {
    
    return (
        <FadeInSection type="slideRight" className="lg:w-[80%] grid grid-cols-3 lg:grid-cols-[3fr_2fr_2fr] lg:gap-2 space-y-12 mx-auto">
            <label className="lg:pl-0 pl-4 mt-12 lg:text-lg">{name}</label>
            <button className="flex justify-center hover:text-xl lg:min-w-[50%]"><Eye className="mr-2" />View</button>
            <label className="flex text-[#F24822] hover:text-xl lg:min-w-[55%] italic mr-4">Deleted {deleted_at}</label>
        </FadeInSection>
    );
};

export default Deleted;