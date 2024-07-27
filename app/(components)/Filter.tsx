import React, { useState } from "react";

const Filter = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex: any) => {
    setActiveButton(buttonIndex);
  };

  const buttonBaseClass = "px-2 py-1 rounded-md";

  return (
    <div className="flex justify-center gap-3 items-center flex-wrap text-[0.75rem]">
      <button
        className={`${buttonBaseClass} ${
          activeButton === 0
            ? "bg-green-100 border-green-400"
            : "bg-gray-50 border-gray-900 border-[1px]"
        }`}
        onClick={() => handleButtonClick(0)}
      >
        Production Collection
      </button>
      <button
        className={`${buttonBaseClass} ${
          activeButton === 1
            ? "bg-green-100 border-green-800"
            : "bg-gray-50 border-gray-900 border-[1px]"
        }`}
        onClick={() => handleButtonClick(1)}
      >
        Contains
      </button>
      <button
        className={`${buttonBaseClass} ${
          activeButton === 2
            ? "bg-green-100 border-green-400"
            : "bg-gray-50 border-gray-900 border-[1px]"
        }`}
        onClick={() => handleButtonClick(2)}
      >
        Anarkali Kurtas
      </button>
    </div>
  );
};

export default Filter;
