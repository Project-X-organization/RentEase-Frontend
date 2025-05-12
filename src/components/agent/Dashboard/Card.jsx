import { Link } from "react-router-dom";

// Card Component
export default function Card({ title, count, link }) {
    return (
      <Link to={link} className="border p-4 rounded shadow-lg hover:bg-[#015A05] hover:bg-opacity-50 hover:scale-110 text-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-xl font-bold">{count}</p>
      </Link>
    );
}