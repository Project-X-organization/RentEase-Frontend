import { Link } from "react-router-dom";
import FadeInSection from "../../FadeInSection";
// Card Component
export default function Card({ title, count, link }) {
    return (
      <Link to={link} className="border p-4 rounded shadow-lg hover:bg-blue-200 hover:scale-110 text-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-xl font-bold">{count}</p>
      </Link>
    );
}