import { Link } from "react-router-dom";
import Navbar from "../../components/agent/NavBar";
import Header from "../../components/agent/Header";
import Card from "../../components/agent/Dashboard/Card";
import Footer from "../../components/agent/Dashboard/Footer";
import FadeInSection from "../../components/FadeInSection";

// Main Component
export default function AgentDashboard({ agent="MyCareTaker@gmail.com", user="Esther Oyedeji" }) {
  return (
    <div>
      <FadeInSection type="slideUp"><Navbar /></FadeInSection>
      <FadeInSection type="slideRight"><Header agentEmail={agent} /></FadeInSection>

      <FadeInSection type="slideLeft"><div className="relative z-0 flex flex-col lg:flex-row lg:justify-between p-6">
        {/* Mobile View: Logged in User (Appears Below Header) */}
        <div className="flex lg:hidden justify-between text-center py-4">
            <h3 className="text-lg font-semibold">Logged in:</h3>
            <p className="text-gray-600 font-medium">{user}</p>
            <Link to="/edit-profile" className="text-blue-500">Edit Profile</Link>
        </div>
        {/* Left Section - New & Existing Listings */}
        <div className="space-y-6 lg:w-2/3 w-full">
          <FadeInSection type="slideUp"><div className="flex justify-center">
            <hr className="lg:w-[42%] w-[20%] bg-gray-400 h-1 mt-4 mr-4"/>
            <h2 className="text-xl text-[#4F4FFF] font-bold">New Listings</h2>
            <hr className="lg:w-[42%] w-[20%] bg-gray-400 h-1 mt-4 ml-4 mb-4"/>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card title="New" count={0} link="/agent/dashboard/new-listing" />
            <Card title="Submitted" count={3} link="/agent/dashboard/submitted-listings" />
            <Card title="Queried" count={1} link="/agent/dashboard/queried-listings" />
            <Card title="Approved" count={15} link="/agent/dashboard/approved-listings" />
          </div></FadeInSection>

          <FadeInSection type="slideDown"><div className="flex justify-center">
            <hr className="lg:w-[40%] w-[18%] bg-gray-400 h-1 mt-4 mr-4"/>
            <h2 className="text-xl text-[#4F4FFF] font-bold">Existing Listings</h2>
            <hr className="lg:w-[42%] w-[18%] bg-gray-400 h-1 mt-4 ml-4 mb-4"/>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card title="Edit" count={0} link="/agent/dashboard/edit-existing-listings" />
            <Card title="Letting" count={25} link="/agent/dashboard/letting-listings" />
            <Card title="Rented" count={14} link="/agent/dashboard/rented-listings" />
            <Card title="Deleted" count={6} link="/agent/dashboard/deleted-listings" />
          </div></FadeInSection>
        </div>

        {/* Right Section - User Info */}
        <div className="hidden lg:block lg:w-1/3 text-right pr-12">
          <h3 className="text-lg font-semibold">Logged in:</h3>
          <p className="text-gray-600 font-medium my-3">{user}</p>
          <Link to="/edit-profile" className="text-blue-500 hover:text-blue-800 hover:text-lg">Edit Profile</Link>
        </div>
      </div></FadeInSection>

      {/* Horizontal Divider with Dots */}
      <div className="flex items-center justify-center my-6">
        <div className="h-1 bg-gray-300 flex-1" />
        <span className="mx-2 text-gray-500">•</span>
        <div className="h-1 bg-gray-300 flex-1" />
      </div>

      {/* Announcement Section */}
      <FadeInSection type="slideUp"><div className="flex grid grid-cols-1 lg:grid-cols-2">
        <img src="/coming-soon.png" className="w-auto mx-auto"/>
        <FadeInSection type="zoom"><div className="border p-4 rounded-3xl shadow-lg p-6 text-center lg:text-xl mb-4 mx-6">
            <h2 className="text-xl lg:text-3xl font-bold text-gray-900 lg:my-8">MyCareTaker Will be <span className="text-red-500">LIVE</span> from April 30</h2>
            <p>Your one-stop shop for rental needs launches at <span className="text-blue-400">www.mycaretaker.com</span> on April 30th at 4 PM.</p>
            <p>All listings will also be available on that day.</p>
            <p>Keep a date with us and inform others as there are many things in store for everyone ranging from verified available homes, discount for first  persons to rent their homes through us and lots of branded goodies for everyone. If you snooze, you go lose oh.</p>
        </div></FadeInSection>
      </div></FadeInSection>

      <FadeInSection type="slideDown"><Footer/></FadeInSection>
    </div>
  );
}
