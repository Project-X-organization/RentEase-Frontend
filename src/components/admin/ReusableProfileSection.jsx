import React, { useState, useEffect } from 'react';
import { Edit2 } from 'lucide-react';
import FadeInSection from '../universal/FadeInSection';

// Utility function to convert PascalCase or camelCase to 'Pascal Case'
const formatLabel = (key) => key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();

const ReusableProfileSection = ({ title, fields, onChange, onSave, delay }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localFields, setLocalFields] = useState({});
  const [originalFields, setOriginalFields] = useState({});
  const [modifiedFields, setModifiedFields] = useState([]);

  useEffect(() => {
    setLocalFields(fields);
    setOriginalFields(fields);
  }, [fields]);

  const handleInputChange = (key, value) => {
    const updated = { ...localFields, [key]: value };
    setLocalFields(updated);

    if (value !== originalFields[key] && !modifiedFields.includes(key)) {
      setModifiedFields((prev) => [...prev, key]);
    } else if (value === originalFields[key]) {
      setModifiedFields((prev) => prev.filter((f) => f !== key));
    }

    onChange({ [key]: value });
  };

  const handleSave = () => {
    const updatedFields = {};
    modifiedFields.forEach((key) => {
      updatedFields[key] = localFields[key];
    });
    onSave(updatedFields);
    setOriginalFields(localFields);
    setModifiedFields([]);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setLocalFields(originalFields);
    setModifiedFields([]);
    setIsEditing(false);
  };

  return (
    <FadeInSection type='slideRight' delay={delay} className="lg:mb-6 lg:py-6 lg:px-4 px-2 py-3 mb-3 bg-[#F9FCFF]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="lg:text-xl font-semibold text-[#015A05]">{title}</h2>
        <div className="space-x-2">
        {isEditing ? (
          <div className="flex gap-2">
            <button
              onClick={handleCancel}
              className="px-4 py-1 rounded text-white bg-gray-500 hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={modifiedFields.length === 0}
              className={`px-4 py-1 rounded text-white ${
                modifiedFields.length === 0
                  ? 'bg-green-300 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              Save
            </button>
          </div>
        ) : (
            <button onClick={() => setIsEditing(true)} className="flex bg-[#04D20D] hover:bg-green-700 text-white lg:px-4 px-2 py-1 rounded hover:scale-110">Edit<Edit2 className='ml-2 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 my-auto'/></button>
          )}
        </div>
      </div>

      <div className={`w-full grid ${Object.entries(localFields).length === 6 ? "grid-cols-[2fr_3fr]" : "grid-cols-3"} lg:grid-cols-3 lg:gap-6 gap-2`}>
        {Object.entries(localFields).map(([key, value], index) => (
          <div key={key} className={`flex flex-col lg:${index % 3 === 0 ? 'items-start' : 'items-center'}`}>
            <label className="text-sm font-medium lg:px-3 text-gray-700 mb-1 capitalize">{formatLabel(key)}</label>
            <input
              type="text"
              value={value}
              disabled={!isEditing}
              onChange={(e) => handleInputChange(key, e.target.value)}
              className={`w-full lg:px-3 px-1 py-2 lg:${index % 3 === 0 ? 'items-start' : 'text-center'} border ${
                isEditing ? 'border-gray-300' : 'border-transparent'
              } rounded bg-transparent focus:outline-none focus:ring-1 focus:ring-green-500`}
            />
          </div>
        ))}
      </div>
    </FadeInSection>
  );
};

export default ReusableProfileSection;
