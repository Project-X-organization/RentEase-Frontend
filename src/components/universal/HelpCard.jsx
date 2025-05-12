import { Link } from "react-router-dom";

const HelpCard = ({ icon, header, description, path }) => {
    return (
        <Link to={path} className="flex flex-col mx-auto w-[66%] md:w-[80%] lg:w-[70%] lg:px-8 px-6 lg:pt-8 pt-8 lg:pb-6 pb-6 border border-gray-300 border-b-4 border-r-4 justify-center text-center hover:scale-110">
            <div className="font-bold">{icon}</div>
            <p className="font-bold lg:mt-8 mt-3 lg:mb-12 mb-6 lg:text-xl">{header}</p>
            <p className="text-gray-600 lg:text-lg">{description}</p>
        </Link>
    );
};

export default HelpCard;