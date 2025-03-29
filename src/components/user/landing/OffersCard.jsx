const OfferCard = ({ image, title, location, price }) => {
    return (
      <div className={`bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.25),0px_-4px_10px_rgba(0,0,0,0.1)] text-sm lg:text-lg rounded-md w-full transition-all duration-300 hover:scale-110 hover:text-green-900 hover:text-xl hover:pb-4`}>
        <img src={image} alt={title} className="rounded-md mb-3 w-full h-40 lg:h-64 object-cover" />
        <h3 className="font-semibold px-4">{title}</h3>
        <p className="flex text-gray-600 lg:px-4 px-2 my-2 text-sm lg:text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-green-900"
            >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2.25c-3.865 0-7 3.134-7 7 0 4.477 7 12.5 7 12.5s7-8.023 7-12.5c0-3.866-3.135-7-7-7zm0 9.75a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
            />
          </svg>
        {location}</p>
        <p className="font-bold text-green-600 px-4 pb-8 shadow-lg">{price}</p>
      </div>
    );
  };
  
  export default OfferCard;
  