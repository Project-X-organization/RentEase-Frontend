import Header from "../../components/user/home/Header";
import ImageGrid from "../../components/user/propertydes/ImageGrid";
import Description from "../../components/user/propertydes/Description";
import Footer from "../../components/user/landing/Footer";
import FadeInSection from "../../components/FadeInSection";

const PropertyDescription = () => {
    const images = [
        "/propertydesimg.png",
        "/propertydesimg.png",
        "/propertydesimg.png",
        "/propertydesimg.png",
        "/propertydesimg.png",

        // You can add more image URLs here
      ];
  return (
    <div>
      {/* Header */}
      <Header />

    <div className="px-10">
 {/* Property Images */}
     <div className="">
     <FadeInSection type="fade"><ImageGrid images={images}/></FadeInSection>
     </div>
     <FadeInSection type="fade"><Description/></FadeInSection>
     </div>
      {/* Footer */}
      <FadeInSection type="slideDown"><Footer /></FadeInSection>
    </div>
  );
};

export default PropertyDescription;
