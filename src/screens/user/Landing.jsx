import Navbar from "../../components/user/landing/Navbar";
import HeroSection from "../../components/user/landing/Hero";
import AboutSection from "../../components/user/landing/AboutSection";
import ServicesSection from "../../components/user/landing/Services";
import TopOffersSection from "../../components/user/landing/Offers";
import TestimonialsSection from "../../components/user/landing/Testimonials";
import Footer from "../../components/user/landing/Footer";
import FadeInSection from "../../components/FadeInSection";

const LandingPage = () => {
  return (
    <main className="relative w-full">
      <FadeInSection type="slideUp"><Navbar /></FadeInSection>
      <FadeInSection type="fade"><HeroSection /></FadeInSection>
      <FadeInSection type="zoom"><AboutSection /></FadeInSection>
      <FadeInSection type="slideLeft"><ServicesSection /></FadeInSection>
      <FadeInSection type="slideRight"><TopOffersSection /></FadeInSection>
      <FadeInSection type="slideUp"><TestimonialsSection /></FadeInSection>
      <FadeInSection type="slideDown"><Footer /></FadeInSection>
    </main>
  );
};

export default LandingPage;
