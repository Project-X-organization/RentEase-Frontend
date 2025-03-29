import Header from "../../components/user/home/Header";
import CustomButton from "../../components/user/home/CustomButton";
import VerifiedHomes from "../../components/user/home/VerifiedHomes";
import FadeInSection from "../../components/FadeInSection";
import Philosophy from "../../components/user/home/Philosophy";
import Footer from "../../components/user/landing/Footer";
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative bg-[url(/home-hero.png)] bg-cover bg-center bg-no-repeat h-screen bg-fixed">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

        {/* Your content */}
        <div className="relative z-20 top-[30%] sm:pl-10 pl-5">
        <FadeInSection type="fade"><h2 className="md:text-[64px] sm:text-[54px] text-[40px] font-[700] text-white leading-[128%] tracking-[-2%] font-primary">
            The perfect Home
            <br />
            Designed just for you
          </h2></FadeInSection>
          <FadeInSection type="fade"><p className="font-poly italic md:text-[32px] sm:text-[22px] text-[20px] text-white font-[400] leading-[128%] mt-3">
            Find it, Love it, Rent it
          </p></FadeInSection>
        </div>
      </div>

      <div className="bg-white sm:px-14 px-10">
      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 items-center justify-center  my-10">
      <FadeInSection type="fade"><CustomButton title="Date" icon={<FaAngleDown />} containerStyles="bg-transparent border-[3px] border-[#015A05]" textStyles="text-black" iconStyles="text-black"/></FadeInSection>
      <FadeInSection type="fade"> <CustomButton title="Properties" icon={<FaAngleDown />} containerStyles="bg-transparent border-[3px] border-[#015A05]" textStyles="text-black" iconStyles="text-black"/></FadeInSection>
      <FadeInSection type="fade"> <CustomButton title="Location" icon={<FaAngleDown />} containerStyles="bg-transparent border-[3px] border-[#015A05]" textStyles="text-black" iconStyles="text-black"/></FadeInSection>
      <FadeInSection type="fade"> <CustomButton title="Amenities" icon={<FaAngleDown />} containerStyles="bg-transparent border-[3px] border-[#015A05]" textStyles="text-black" iconStyles="text-black"/></FadeInSection>
      <FadeInSection type="fade"><CustomButton title="Price" icon={<FaAngleDown />} containerStyles="bg-transparent border-[3px] border-[#015A05]" textStyles="text-black" iconStyles="text-black"/></FadeInSection>
      <FadeInSection type="fade"><CustomButton title="Search" icon={<IoSearch />} textStyles="text-white" iconStyles="text-white"/></FadeInSection>
      </div>

      {/* Verified Listed Homes */}
      <FadeInSection type="fade"><VerifiedHomes /></FadeInSection>

      {/* Our Philosphy */}
      <FadeInSection type="fade"><Philosophy /></FadeInSection>
      </div>
      
      {/* Footer */}
      <FadeInSection type="slideDown"><Footer /></FadeInSection>
    </div>
  );
};
export default Home;
