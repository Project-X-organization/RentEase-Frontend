import { FaGoogle } from "react-icons/fa"

const BottomButtons = ({ label }) => {
    return (
        <div className="flex flex-col items-center lg:mt-12">
            <button type="submit" className="bg-[#015A05] w-full p-2 lg:p-4 text-center lg:text-2xl text-white rounded hover:scale-110">{label}</button>
            <div className="flex w-full my-4 lg:my-8 mx-auto">
                <hr className="w-full h-1 bg-gray-500 mt-2"/>
                <h2 className="text-gray-500 text-center mx-4">OR</h2>
                <hr className="w-full h-1 bg-gray-500 mt-2"/>
            </div>
            <button className="flex items-center justify-center p-2 lg:p-4 w-full mx-auto mb-16 border-b bg-gray-300 lg:text-lg text-center rounded hover:scale-110">
                <img src="/Google.png" className="mr-2"/>
                <p>Continue with Google</p>
            </button>
        </div>
    );
};

export default BottomButtons;