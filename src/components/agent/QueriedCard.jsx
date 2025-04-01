import { Link } from "react-router-dom";

const QueriedCard = ({ image, title, location, query, queryTitle,  }) => {
    return (
      <div className="lg:px-12 px-4 lg:my-4 grid grid-cols-1 lg:grid-cols-[1fr_4fr] rounded-md w-full transition-all duration-300 ">
        <img src={image} alt={title} className="rounded-md mb-3 lg:mb-0 w-full h-44 lg:h-64 object-cover" />
        <div className="flex flex-col justify-between lg:ml-4">
            <div className="grid lg:grid-cols-[3fr_2fr] lg:mt-4">
                <div><h3 className="font-semibold lg:px-4 lg:text-xl lg:mt-8">{title}</h3>
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
                    <p className="text-sm text-red-500 lg:text-lg"><span className="font-bold mr-1">{queryTitle}</span>{query}</p>
                    <div className="text-center justify-self-end mt-8">
                        <Link className="bg-[#4F4FFF] rounded-md lg:px-8 lg:py-4 px-4 py-2 text-sm lg:text-md text-white hover:scale-110 hover:bg-blue-700">Resolve</Link>
                    </div>
                </div>
            </div>
            <hr className="w-[99%] lg:ml-4 h-[2px] bg-gray-300 my-4"/>
        </div>
      </div>
    );
};
  
export default QueriedCard;
  