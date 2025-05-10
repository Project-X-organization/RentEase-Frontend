const FormContainer = ({children}) => {
    return (
        <div className="h-auto min-h-screen bg-[url('/form-bf.jpg')] bg-cover bg-center relative flex items-start">
            {/*Gray overlay */}
            <div className="absolute inset-0 bg-gray-500 bg-opacity-50"></div>
            <div className="relative z-10 w-full px-4 pb-4 lg:px-4 mx-auto lg:mx-0 lg:pb-8">
                {/* Logo + Name (Centered on Mobile) */}
                <div className="flex items-center justify-center lg:justify-start text-white font-medium text-xl lg:mx-8 lg:mb-4 lg:mt-4 my-4 mx-auto">
                    <img src="/icon.png" alt="Logo" />
                    <p className="lg:ml-2 mt-4">MyCareTaker</p>
                </div>
                <div className="bg-white bg-opacity-75 rounded-3xl lg:w-[60%] mx-auto my-auto lg:px-16 lg:py-20 p-4 pb-8">{children}</div>
            </div>
        </div>
    );
};

export default FormContainer;