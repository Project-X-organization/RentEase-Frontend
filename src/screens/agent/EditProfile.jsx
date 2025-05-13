  import React, { useState } from 'react';
  import ReusableProfileSection from '../../components/admin/ReusableProfileSection';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { UserRoundPen, Edit2 } from 'lucide-react';
  import FadeInSection from '../../components/universal/FadeInSection';
  import Navbar from '../../components/agent/NavBar';
  import Header from '../../components/agent/Header';

  const EditProfile = () => {
    const [profileImage, setProfileImage] = useState(null);           // preview image
    const [savedImage, setSavedImage] = useState(null);               // final saved image
    const [showImageControls, setShowImageControls] = useState(false);
    const [showImageModal, setShowImageModal] = useState(false);

    const [profileData, setProfileData] = useState({
      ProfileImage: null, // NEW
      // Section 1
      FirstName: "Esther",
      MiddleName: "Odawale",
      Surname: "Oyedeji",
      Email: "esther@mycaretaker.com",
      PhoneNumber: "1234567890",
      DateOfBirth: "2023-01-01",

      // Section 2
      City: "Surulere",
      State: "Lagos",
      Country: "Nigeria",
    });

    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfileImage(reader.result);
          setShowImageControls(true);
        };
        reader.readAsDataURL(file);
      }
    };
    
    const handleImageSave = () => {
      setSavedImage(profileImage);
      setProfileData(prev => ({
        ...prev,
        ProfileImage: profileImage
      }));
      setShowImageControls(false);
      toast.success("Profile image updated!");
      console.log("Saving full profile:", profileData);
    };
    
    const handleImageCancel = () => {
      setProfileImage(null);
      setShowImageControls(false);
    };
    

    const handleFieldChange = (updatedFields) => {
      setProfileData((prev) => ({ ...prev, ...updatedFields }));
    };

    const handleSaveProfile = async (updatedFields) => {
      try {
        // Send all data at once
        console.log("Saving full profile:", profileData);
        // await axios.post('/api/update-profile', profileData);
        const formatted = Object.keys(updatedFields).map(
          (key) =>
            key
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, (str) => str.toUpperCase())
              .trim()
        );
        toast.success(`Updated Profile field(s): ${formatted.join(', ')} Successfully`);
      } catch (error) {
        toast.error("Failed to update profile");
      }
    };

    return (
      <FadeInSection type="slideDown">
        <Navbar />
        <Header agentEmail={profileData.Email} text="Agent Profile "/>
        <div className="w-full pt-8 lg:py-16 lg:px-20 px-4 py-4">
        {/*<h1 className="lg:mb-16 mb-8 lg:text-xl ml-8 lg:ml-8 lg:mt-4">Welcome Back, <span className="font-semibold">Esther</span></h1>*/}
        <div className="flex justify-center lg:mb-8">
            <hr className="flex-1 bg-gray-400 h-1 mt-4 mr-4"/>
            <h2 className="lg:text-3xl text-xl text-[#428242] font-bold">My Profile</h2>
            <hr className="flex-1 bg-gray-400 h-1 mt-4 ml-4 mb-4"/>
          </div>
        <input
          type="file"
          accept="image/*"
          id="profile-image-upload"
          className="hidden"
          onChange={handleImageUpload}
        />

        <div className='flex flex-col lg:flex-row'><FadeInSection type='zoom' className="hidden lg:block">
          <div className="relative w-fit lg:mr-16">
            <div
              className="cursor-pointer rounded-full overflow-hidden bg-[#015A05] hover:bg-green-500 hover:scale-110 lg:h-64 lg:w-64 h-12 w-12 flex items-center justify-center text-white"
              onClick={() => savedImage ? setShowImageModal(true) : document.getElementById("profile-image-upload").click()}
            >
              {savedImage || profileImage ? (
                <img
                  src={profileImage || savedImage}
                  alt="Profile Preview"
                  className="object-cover w-full h-full"
                />
              ) : (
                <UserRoundPen className="h-6 w-6 lg:h-20 lg:w-20" />
              )}
            </div>

            {/* Edit Icon Positioned Outside */}
            {savedImage && !showImageControls && (
              <div
                className="absolute bottom-0 -right-1 bg-[#04D20D] bg-opacity-70 p-1 rounded-full cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById("profile-image-upload").click();
                }}
              >
                <Edit2 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-10 lg:h-10" color="white" />
              </div>
            )}
          </div>

          {showImageControls && (
            <div className="ml-auto flex space-x-2 lg:mr-16 mt-8 items-center">
              <button
                onClick={handleImageSave}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 lg:w-[50%] rounded"
              >
                Save
              </button>
              <button
                onClick={handleImageCancel}
                className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 lg:w-[50%] rounded"
              >
                Cancel
              </button>
            </div>
          )}

          {showImageModal && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              onClick={() => setShowImageModal(false)}
            >
              <img
                src={savedImage}
                alt="Large View"
                className="max-w-[80%] max-h-[80%] rounded shadow-lg bg-black"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </FadeInSection>

        <FadeInSection className="lg:w-[77%]"><FadeInSection type="slideRight" delay="1" className="hidden lg:flex bg-[#F9FCFF] lg:pr-8 py-4 justify-self end lg:pl-4 pl-2 lg:mb-6 mb-3">
          <div className="lg:w-[70%] w-[90%] lg:text-xl my-auto">
            <p className="font-bold text-[#015A05]">{profileData.FirstName} {profileData.Surname}</p>
            <p className='text-gray-500'>Agent</p>
          </div>
        </FadeInSection>

        <FadeInSection type="slideRight" delay="1" className="flex lg:hidden bg-[#F9FCFF] lg:pr-8 py-4 justify-self end lg:pl-4 pl-2 lg:mb-6 mb-3">
          <div className="relative w-fit">
            <div
              className="cursor-pointer rounded-full overflow-hidden bg-[#015A05] hover:bg-green-500 hover:scale-110 lg:h-24 lg:w-24 h-12 w-12 flex items-center justify-center text-white"
              onClick={() => savedImage ? setShowImageModal(true) : document.getElementById("profile-image-upload").click()}
            >
              {savedImage || profileImage ? (
                <img
                  src={profileImage || savedImage}
                  alt="Profile Preview"
                  className="object-cover w-full h-full"
                />
              ) : (
                <UserRoundPen className="h-6 w-6 lg:h-10 lg:w-10" />
              )}
            </div>

            {/* Edit Icon Positioned Outside */}
            {savedImage && !showImageControls && (
              <div
                className="absolute bottom-0 -right-1 bg-[#04D20D] bg-opacity-70 p-1 rounded-full cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById("profile-image-upload").click();
                }}
              >
                <Edit2 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" color="white" />
              </div>
            )}
          </div>

          <div className="lg:w-[70%] w-[90%] lg:text-lg lg:ml-4 ml-2 my-auto">
            <p className="font-bold text-[#015A05]">{profileData.FirstName} {profileData.Surname}</p>
            <p className='text-gray-500'>Admin</p>
          </div>

          {showImageControls && (
            <div className="ml-auto flex space-x-2 items-center">
              <button
                onClick={handleImageSave}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
              >
                Save
              </button>
              <button
                onClick={handleImageCancel}
                className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
              >
                Cancel
              </button>
            </div>
          )}

          {showImageModal && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              onClick={() => setShowImageModal(false)}
            >
              <img
                src={savedImage}
                alt="Large View"
                className="max-w-[80%] max-h-[80%] rounded shadow-lg bg-black"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

        </FadeInSection>

        <ReusableProfileSection
          title="Personal Information"
          fields={{
            FirstName: profileData.FirstName,
            MiddleName: profileData.MiddleName,
            Surname: profileData.Surname,
            Email: profileData.Email,
            PhoneNumber: profileData.PhoneNumber,
            DateOfBirth: profileData.DateOfBirth,
          }}
          onChange={handleFieldChange}
          onSave={handleSaveProfile}
          delay="3"
        />

        <ReusableProfileSection
          title="Address"
          fields={{
            City: profileData.City,
            State: profileData.State,
            Country: profileData.Country,
          }}
          onChange={handleFieldChange}
          onSave={handleSaveProfile}
          delay="5"
        /></FadeInSection></div>

        <ToastContainer position="top-right" autoClose={3000} />
      </div></FadeInSection>
    );
  };

export default EditProfile;
