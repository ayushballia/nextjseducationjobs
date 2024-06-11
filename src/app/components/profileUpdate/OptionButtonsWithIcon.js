import Image from "next/image";
import React, { useEffect, useState } from "react";

const OptionButtonsWithIcon = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].label);

  useEffect(() => {
    onSelect(selectedOption);
  }, [selectedOption, onSelect]);

  const handleSelect = (option) => {
    setSelectedOption(option.label);
    onSelect(option.label);
  };

  return (
    <div className="flex space-x-6">
      {options.map((option) => (
        <button
          key={option.label}
          type="button"
          className={`flex gap-4 px-[27px] border border-gray-300 rounded-[15px] text-[20px] items-center ${
            selectedOption === option.label ? "bg-blue-500 font-semibold text-white" : "bg-white text-black"
          }`}
          onClick={() => handleSelect(option)}
        >
          <span>{option.label}</span>
          {option.icon && (
            <Image src={option.icon} width={63} height={63} alt={`${option.label} icon`} />
          )}
        </button>
      ))}
    </div>
  );
};

export default OptionButtonsWithIcon;
