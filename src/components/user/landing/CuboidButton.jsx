import { Link } from "react-router-dom";

const CuboidButton = () => {
  return (
    <div className="relative inline-block my-10 ml-6 pt-2 hover:scale-110 ">
      {/* Black "shadow" rectangle */}
      <div className="absolute left-[-6px] top-[12px] bottom-[-5px] w-full h-full bg-black rounded-md p-5 z-0"></div>

      {/* Main Button */}
      <Link 
        to="/your-link"
        className="relative px-4 py-2 lg:px-6 lg:py-3 bg-[#015A05] text-white font-bold lg:text-lg lg:hover:text-xl rounded-md shadow-lg hover:bg-green-800 transition-all z-1"
      >
        Check available houses
      </Link>
    </div>
  );
};

export default CuboidButton;
