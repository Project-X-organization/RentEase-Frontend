import { useState } from "react";
import { Star } from "lucide-react";

const StarRating = ({ rating, setRating, size = 40 }) => {
  const [hover, setHover] = useState(0);

  const handleMouseMove = (e, value) => {
    const { offsetX, target } = e.nativeEvent;
    const width = target.clientWidth;
    const isHalf = offsetX < width / 2; // Detect if cursor is on the left half
    setHover(isHalf ? value - 0.5 : value);
  };

  return (
    <div className="flex justify-center space-x-2">
      {[...Array(5)].map((_, index) => {
        const value = index + 1;
        const isFull = hover >= value || rating >= value;
        const isHalf = hover === value - 0.5 || rating === value - 0.5;

        return (
          <span
            key={index}
            className="relative cursor-pointer"
            onMouseMove={(e) => handleMouseMove(e, value)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(hover || value)}
          >
            {/* Full Star */}
            <Star
              size={size}
              className="text-gray-300"
              strokeWidth={2}
              fill="none"
            />
            {/* Filled Star */}
            <Star
              size={size}
              className="absolute left-0 top-0 text-green-500"
              fill="currentColor"
              strokeWidth={0}
              style={
                isHalf
                  ? { clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }
                  : isFull
                  ? {}
                  : { display: "none" }
              }
            />
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
