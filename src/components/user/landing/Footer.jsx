import { Link } from "react-router-dom";
// Footer Component
export default function Footer() {
    return (
      <footer className="bg-green-950 text-white lg:p-16 p-3 mt-4">
        <div className="grid grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_1fr] text-xs lg:text-lg">
          <div className="flex text-white font-bold lg:text-xl"><img src="/icon.png" className="lg:w-[10%] lg:h-[40%] w-[24%] h-[24%] "/><p className="lg:mt-8 lg:ml-2 mt-3">MyCareTaker</p></div>
          <div className="flex flex-col space-y-2 ml-4">
            <h3 className="font-bold">Quick Links</h3>
            <Link to="/about" className="hover:text-black hover:text-sm lg:hover:text-xl">About Us</Link>
            <Link to="/faqs" className="hover:text-black hover:text-sm lg:hover:text-xl">FAQs</Link>
            <Link to="/terms" className="hover:text-black hover:text-sm lg:hover:text-xl">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-black hover:text-sm lg:hover:text-xl">Privacy Policy</Link>
          </div>
          <div className="flex flex-col space-y-2 ml-4">
            <h3 className="font-bold">Stay Connected</h3>
            <Link to="/instagram" className="hover:text-black hover:text-sm lg:hover:text-xl">Instagram</Link>
            <Link to="/facebook" className="hover:text-black hover:text-sm lg:hover:text-xl">Facebook</Link>
            <Link to="/twitter" className="hover:text-black hover:text-sm lg:hover:text-xl">Twitter</Link>
            <Link to="/linkedin" className="hover:text-black hover:text-sm lg:hover:text-xl">LinkedIn</Link>
          </div>
          <div className="flex flex-col space-y-2 ml-4">
            <h3 className="font-bold">Contact Us</h3>
            <Link className="hover:text-black hover:text-sm lg:hover:text-xl">Email</Link>
            <Link className="hover:text-black hover:text-sm lg:hover:text-xl">Phone</Link>
            <Link className="hover:text-black hover:text-sm lg:hover:text-xl">Address</Link>
          </div>
        </div>
      </footer>
    );
}