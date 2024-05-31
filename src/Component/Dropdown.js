import React, { useState } from "react";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow rounded group">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleDropdown}
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>
      </div>
      {isOpen && <div className="p-4 font-bold">{children}</div>}
    </div>
  );
};

export default Dropdown;
