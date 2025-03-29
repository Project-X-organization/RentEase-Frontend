import React from "react";

const ImageGrid = ({ images }) => {
  // Split images into rows: 2 images in the first row, 3 in the second
  const row1 = images.slice(0, 2); // First 2 images
  const row2 = images.slice(2, 5); // Next 3 images

  return (
    <div className="container mx-auto sm:pt-[8%] pt-[30%]">
      {/* First Row: 2 images */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
        {row1.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-[640px] h-[364px]"
            />
          </div>
        ))}
      </div>

      {/* Second Row: 3 images */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {row2.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Image ${index + 3}`}
              className="sm:w-[416px] w-[640px] sm:h-[296px] h-[364px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
