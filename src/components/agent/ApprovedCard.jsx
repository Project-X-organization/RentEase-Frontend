import { Link } from "react-router-dom";

const ApprovedCard = ({ image, title, location, duration,  }) => {
    return (
      <div className="lg:px-12 px-4 lg:my-4 grid grid-cols-1 lg:grid-cols-[1fr_4fr] rounded-md w-full transition-all duration-300 ">
        <img src={image} alt={title} className="rounded-md mb-3 lg:mb-0 w-full h-44 lg:h-64 object-cover" />
        <div className="flex flex-col justify-between lg:ml-4">
            <div className="grid lg:grid-cols-[3fr_1fr] lg:mt-16">
                <div><h3 className="font-semibold lg:px-4 lg:text-xl">{title}</h3>
                <p className="flex lg:px-4 lg:px-2 my-2 text-md lg:text-xl">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mt-1 lg:mr-2"
                    >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2.25c-3.865 0-7 3.134-7 7 0 4.477 7 12.5 7 12.5s7-8.023 7-12.5c0-3.866-3.135-7-7-7zm0 9.75a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
                    />
                </svg>
                {location}</p></div>
                <div>
                    <div className="text-center justify-self-end">
                        <Link className="bg-[#428242] rounded-md lg:px-8 lg:py-4 p-2 text-sm lg:text-md text-white hover:scale-110 hover:bg-green-700">Approved</Link>
                    </div>
                    <p className="text-right lg:mt-6 mt-4 text-sm lg:text-md">Uploaded {duration}</p>
                </div>
            </div>
            <hr className="w-[99%] lg:ml-4 h-[2px] bg-gray-300 my-4"/>
        </div>
      </div>
    );
};
  
export default ApprovedCard;
  