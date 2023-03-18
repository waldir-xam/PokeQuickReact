import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center rounded-lg bg-white py-2 px-3 shadow-md">
      <FaSearch className="mr-2 text-gray-400" />
      <input
        type="text"
        className="w-full outline-none"
        placeholder="Search for a Pokemon"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
