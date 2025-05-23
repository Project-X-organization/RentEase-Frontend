import { useState, useEffect, useRef } from "react";
import { FaUpload, FaEye, FaTrash, FaTimes } from "react-icons/fa";
import FadeInSection from "../../universal/FadeInSection";

const ImageUploadSection = ({ register, setValue, clearErrors, errors, getValues }) => {
  const [images, setImages] = useState([
    { id: 1, label: "Living Room", required: true },
    { id: 2, label: "Bedroom", required: true },
    { id: 3, label: "Kitchen", required: true },
    { id: 4, label: "Bathroom", required: true },
    { id: 5, label: "Add More +" }
  ]);

  const [addingRow, setAddingRow] = useState(false);
  const [newLabel, setNewLabel] = useState("");
  const [fileErrors, setFileErrors] = useState({});
  const [previewURLs, setPreviewURLs] = useState({});
  const [modalImage, setModalImage] = useState(null);
  //const [isInitialized, setIsInitialized] = useState(false);
  const isInitializedRef = useRef(false);


  useEffect(() => {
    try {
      if (!isInitializedRef.current) {
        const formValues = getValues?.();
        console.log("Fetched form values:", formValues);
  
        const defaultLabels = ["Living Room", "Bedroom", "Kitchen", "Bathroom"];
        const existingLabels = new Set(images.map(img => img.label));
  
        const customLabels = formValues
          ? Object.keys(formValues).filter(key =>
              !defaultLabels.includes(key) &&
              !existingLabels.has(key) &&
              formValues[key] &&
              typeof formValues[key] === 'object'
            )
          : [];
  
        if (customLabels.length > 0) {
          const maxId = images.length ? Math.max(...images.map(img => img.id)) : 0;
          const customImages = customLabels.map((label, index) => ({
            id: maxId + index + 1,
            label,
            required: false,
            editable: true,
          }));
  
          setImages(prev => {
            const filtered = prev.filter(img => img.label !== "Add More +");
            return [
              ...filtered,
              ...customImages,
              { id: maxId + customLabels.length + 1, label: "Add More +" }
            ];
          });
        }
  
        isInitializedRef.current = true;
      }
    } catch (err) {
      console.error("Error in useEffect:", err);
    }
  }, []);
  
  

  /* Initialize custom rows from existing form values
  useEffect(() => {
    if (!isInitialized) {
      const formValues = getValues();
      const defaultLabels = ["Living Room", "Bedroom", "Kitchen", "Bathroom"];
      const customLabels = Object.keys(formValues).filter(key => 
        !defaultLabels.includes(key) &&
        formValues[key] && 
        typeof formValues[key] === 'object' // Only file objects
      );

      if (customLabels.length > 0) {
        const maxId = Math.max(...images.map(img => img.id));
        const customImages = customLabels.map((label, index) => ({
          id: maxId + index + 1,
          label: label,
          required: false,
          editable: true
        }));

        setImages(prev => [
          ...prev.slice(0, -1), // Remove "Add More +" temporarily
          ...customImages,
          { id: maxId + customLabels.length + 1, label: "Add More +" }
        ]);
      }
      setIsInitialized(true);
    }
  }, [isInitialized]); // Only depend on isInitialized*/

  // Register fields
  useEffect(() => {
    images.forEach((img) => {
      if (img.label !== "Add More +") {
        register(img.label, img.required ? { required: `${img.label} image is required` } : {});
      }
    });
  }, [images, register]);

  // Load static image previews from public folder
  useEffect(() => {
    const dummyURLs = {
      "Living Room": "/House-1.png",
      "Bedroom": "/House-2.png",
      "Kitchen": "/House-1.png",
      "Bathroom": "/House-2.png"
    };
    const updatedPreviews = {};
    images.forEach((img) => {
      if (img.label !== "Add More +") {
        const value = getValues(img.label);
        if (value && typeof value !== "string") {
          updatedPreviews[img.label] = URL.createObjectURL(value);
        } else if (!value && dummyURLs[img.label]) {
            fetch(dummyURLs[img.label])
              .then((res) => res.blob())
              .then((blob) => {
                const file = new File([blob], dummyURLs[img.label].split('/').pop(), {
                  type: blob.type,
                });
                setValue(img.label, file);
                setPreviewURLs((prev) => ({
                  ...prev,
                  [img.label]: URL.createObjectURL(file),
                }));
              });
        }
      }
    });
    setPreviewURLs(updatedPreviews);
  }, [images, getValues, setValue]);

  // Cleanup blob URLs
  useEffect(() => {
    return () => {
      Object.values(previewURLs).forEach((url) => {
        if (url?.startsWith("blob:")) URL.revokeObjectURL(url);
      });
    };
  }, [previewURLs]);

  const confirmAddRow = () => {
    if (!newLabel.trim()) return;
    const trimmedLabel = newLabel.trim();
    const maxId = Math.max(...images.map(img => img.id));
    setImages((prev) => [
      ...prev.slice(0, -1),
      { id: maxId + 1, label: trimmedLabel, required: false, editable: true },
      { id: maxId + 2, label: "Add More +" }
    ]);
    setNewLabel("");
    setAddingRow(false);
  };

  const removeRow = (id) => {
    const img = images.find((img) => img.id === id);
    if (img) {
      setValue(img.label, null);
      setPreviewURLs((prev) => {
        const updated = { ...prev };
        delete updated[img.label];
        return updated;
      });
      setFileErrors((prev) => {
        const updated = { ...prev };
        delete updated[img.label];
        return updated;
      });
    }

    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleFileChange = (event, label) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setFileErrors((prev) => ({ ...prev, [label]: "File must be under 5MB" }));
        return;
      }

      setValue(label, file);
      clearErrors(label);
      setFileErrors((prev) => ({ ...prev, [label]: null }));

      const fileURL = URL.createObjectURL(file);
      setPreviewURLs((prev) => ({ ...prev, [label]: fileURL }));
    }
  };

  const openModal = (url) => setModalImage(url);
  const closeModal = () => setModalImage(null);

  return (
    <div className="max-w-full mb-12 lg:mx-auto lg:p-12 p-4 mx-4 border border-[#14AE5C] lg:pr-36">
       {/* Image Preview Modal */}
       {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <FadeInSection type="zoom" className="bg-white rounded shadow-lg p-4 relative max-w-[90vw] max-h-[90vh] overflow-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-2xl"
            >
              <FaTimes />
            </button>
            <img src={modalImage} alt="Full Preview" className="max-w-full max-h-[80vh]" />
          </FadeInSection>
        </div>
      )}
      {/* Header */}
      <div className="grid grid-cols-4 gap-2 justify-items-start lg:justify-items-center lg:text-xl pb-2 font-semibold lg:mb-4">
        <span>Image</span>
        <span>File Format</span>
        <span className="ml-[-15px]">Currently Attached</span>
        <span className="ml-[-10px]">Re-Upload</span>
      </div>

      {/* Rows */}
      <div className="grid grid-cols-4 gap-2 justify-items-start lg:justify-items-center mt-2">
        {images.map((img) => (
          <div key={img.id} className="contents">
            {/* Image Label */}
            {img.label !== "Add More +" ? (
              <div className="flex gap-2">
                {img.editable ? (
                  <>
                    <input
                      value={img.label}
                      onChange={(e) =>
                        setImages((prev) =>
                          prev.map((i) =>
                            i.id === img.id ? { ...i, label: e.target.value } : i
                          )
                        )
                      }
                      className="border-b border-gray-400 px-2 py-1 focus:outline-none focus:border-[#428242] text-sm lg:text-base"
                    />
                    <button onClick={() => removeRow(img.id)} className="text-red-600 text-xs">
                      <FaTrash />
                    </button>
                  </>
                ) : (
                  <span className="py-2 lg:text-xl">{img.label}</span>
                )}
              </div>
            ) : addingRow ? (
              <input
                type="text"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
                placeholder="Image Name..."
                className="border-b border-gray-400 text-xl focus:border-[#428242] focus:outline-none px-2 py-1"
              />
            ) : (
              <button
                type="button"
                onClick={() => setAddingRow(true)}
                className="text-[#428242] font-semibold text-left lg:mt-2"
              >
                {img.label}
              </button>
            )}

            {/* File Format */}
            {img.label !== "Add More +" && <span className="py-2 text-sm lg:text-base">.PNG /.JPEG /Image</span>}

            {/* View Eye Icon */}
            {img.label !== "Add More +" && (
              <button
                type="button"
                onClick={() => previewURLs[img.label] && openModal(previewURLs[img.label])}
                disabled={!previewURLs[img.label]}
                className={`p-2 rounded-full flex h-10 text-sm lg:text-base ml-[-20px] ${
                  previewURLs[img.label] ? "text-green-600 hover:bg-green-100" : "text-gray-300"
                }`}
              >
                View <FaEye className="ml-2 mt-1" />
              </button>
            )}

            {/* Upload Input */}
            {img.label !== "Add More +" && (
              <div className="relative w-full flex flex-col items-center">
                <input
                  type="file"
                  accept="image/*"
                  id={`file-upload-${img.id}`}
                  className="hidden"
                  onChange={(e) => handleFileChange(e, img.label)}
                />
                <label
                  htmlFor={`file-upload-${img.id}`}
                  className="cursor-pointer flex items-center space-x-2 bg-[#428242] text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                >
                  <FaUpload className="text-xs lg:text-base" />
                  <span className="text-sm lg:text-base">Upload</span>
                </label>

                {/* File Name or Static Image Name */}
                {(getValues(img.label)?.name || previewURLs[img.label]) && (
                  <p className="text-gray-700 text-sm mt-1">
                    {getValues(img.label)?.name || previewURLs[img.label]?.split("/").pop()}
                  </p>
                )}

                {/* Thumbnail */}
                {previewURLs[img.label] && (
                  <img
                    src={previewURLs[img.label]}
                    alt="preview"
                    className="w-20 h-20 mt-2 object-cover border rounded"
                  />
                )}

                {/* Errors */}
                {fileErrors[img.label] && (
                  <p className="text-red-600 text-sm mt-1">{fileErrors[img.label]}</p>
                )}
                {errors[img.label] && !fileErrors[img.label] && (
                  <p className="text-red-600 text-sm mt-1">{errors[img.label].message}</p>
                )}
              </div>
            )}

            {/* Confirm Button */}
            {img.label === "Add More +" && addingRow && (
              <button
                type="button"
                onClick={confirmAddRow}
                className="text-white bg-[#428242] px-4 py-2 rounded-md hover:bg-green-700 transition col-span-4 mt-2"
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