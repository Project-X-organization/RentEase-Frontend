import { Link } from "react-router-dom";

const ListingsCard = ({ image, title, location,  }) => {
    return (
      <div className="lg:px-12 px-4 lg:my-4 grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-md w-full transition-all duration-300 ">
        <img src={image} alt={title} className="rounded-md lg:mb-3 w-full h-44 lg:h-64 object-cover" />
            <div className="lg:mt-16">
                <h3 className="font-semibold lg:px-4 lg:text-xl lg:mt-4">{title}</h3>
                <p className="flex lg:px-4 lg:px-2 my-2 text-md lg:text-xl lg:mt-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 lg:mt-1 lg:mr-2 lg:ml-1 ml-[-5px]"
                    >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2.25c-3.865 0-7 3.134-7 7 0 4.477 7 12.5 7 12.5s7-8.023 7-12.5c0-3.866-3.135-7-7-7zm0 9.75a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
                    />
                </svg>
                {location}</p>
            </div>
      </div>
    );
};
  
export default ListingsCard;
  