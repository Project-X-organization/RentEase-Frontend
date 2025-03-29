import { useState, useEffect } from "react";
import { FaUpload } from "react-icons/fa";

const ImageUploadSection = ({ register, setValue, clearErrors, errors, getValues }) => {
  const [images, setImages] = useState([
    { id: 1, label: "Living Room", required: true },
    { id: 2, label: "Bedroom", required: true },
    { id: 3, label: "Kitchen", required: true },
    { id: 4, label: "Bathroom", required: true },
    { id: 5, label: "Add More +" } // Special row for adding new images
  ]);

  const [newLabel, setNewLabel] = useState("");
  const [addingRow, setAddingRow] = useState(false);
  const [fileErrors, setFileErrors] = useState({});

  useEffect(() => {
    // Register image fields dynamically
    images.forEach((img) => {
      if (img.label !== "Add More +") {
        register(img.label, img.required ? { required: `${img.label} image is required` } : {});
      }
    });
  }, [images, register]);

  // Handle Adding a New Row
  const confirmAddRow = () => {
    if (!newLabel.trim()) return;
    setImages((prev) => [
      ...prev.slice(0, prev.length - 1), // Remove "Add More +"
      { id: prev.length + 1, label: newLabel, required: false },
      { id: prev.length + 2, label: "Add More +" } // Re-add "Add More +"
    ]);
    setNewLabel("");
    setAddingRow(false);
  };

  // Handle File Selection and Validation
  const handleFileChange = (event, label) => {
    const file = event.target.files[0];

    if (file) {
      // Validate file size (Max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setFileErrors((prev) => ({ ...prev, [label]: "File must be under 5MB" }));
        return;
      }

      // Store file in form data
      setValue(label, file);
      clearErrors(label); // Clear errors if file is valid
      setFileErrors((prev) => ({ ...prev, [label]: null }));
    }
  };

  return (
    <div className="max-w-full mb-12 lg:mx-auto lg:p-12 p-4 mx-4 border border-blue-600 lg:pr-36">
      {/* Table Header */}
      <div className="grid grid-cols-3 gap-4 justify-items-center lg:text-xl pb-2 font-semibold lg:mb-4">
        <span>Image</span>
        <span>File Format</span>
        <span>Upload</span>
      </div>

      {/* Table Rows */}
      <div className="grid grid-cols-3 gap-4 justify-items-center mt-2">
        {images.map((img) => (
          <div key={img.id} className="contents">
            {/* First Column - Image Label */}
            {img.label !== "Add More +" ? (
              <span className="py-2 lg:text-xl">{img.label}</span>
            ) : addingRow ? (
              <input
                type="text"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
                placeholder="Image Name..."
                className="border-b border-gray-400 text-xl focus:border-blue-600 focus:outline-none px-2 py-1"
              />
            ) : (
              <button
                type="button"
                onClick={() => setAddingRow(true)}
                className="text-blue-600 font-semibold text-left lg:mt-2"
              >
                {img.label}
              </button>
            )}

            {/* Second Column - File Format */}
            {img.label !== "Add More +" && <span className="py-2">.PNG /.JPEG /Image</span>}

            {/* Third Column - Upload Button */}
            {img.label !== "Add More +" && (
              <div className="relative w-[70%]">
                {/* Hidden File Input */}
                <input
                  type="file"
                  accept="image/*"
                  id={`file-upload-${img.id}`}
                  className="hidden"
                  onChange={(e) => handleFileChange(e, img.label)}
                />

                {/* Custom Upload Button */}
                <label
                  htmlFor={`file-upload-${img.id}`}
                  className="cursor-pointer flex items-center lg:space-x-2 bg-blue-600 text-white justify-center px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  <FaUpload className="lg:text-lg text-xs" />
                  <span>Upload</span>
                </label>

                {/* Display Selected File Name (Persisted) */}
                {getValues(img.label) && (
                  <p className="text-gray-700 text-sm mt-1">{getValues(img.label)?.name}</p>
                )}

                {/* Show Validation Error Message */}
                {fileErrors[img.label] && (
                  <p className="text-red-600 text-sm mt-1">{fileErrors[img.label]}</p>
                )}
                {errors[img.label] && !fileErrors[img.label] && (
                  <p className="text-red-600 text-sm mt-1">{errors[img.label].message}</p>
                )}
              </div>
            )}

            {/* Confirm Button for Adding New Row */}
            {img.label === "Add More +" && addingRow && (
              <button
                type="button"
                onClick={confirmAddRow}
                className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Confirm
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploadSection;
