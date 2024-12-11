import React from "react";
import PropTypes from "prop-types";
import InputField from "../atoms/InputField";
import Button from "../atoms/Button";

const SearchBar = ({ query, setQuery, onSearch }) => {
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setQuery(""); // Clear the search input
  };

  return (
    <div
      className="bg-white border-2 p-1 pl-4 rounded-full flex justify-center items-center space-x-4"
      aria-label="Search Bar"
    >
      {/* Input Field */}
      <InputField
        type="text"
        value={query}
        label="Search"
        onChange={handleInputChange}
        placeholder="Search for products..."
        className="w-80"
      />

      {/* Clear Search Button */}
      {query && (
        <button
          onClick={handleClearSearch}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Clear search"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}

      {/* Search Button */}
      <Button
        onClick={onSearch}
        className="bg-blue-500 text-white p-2 rounded-full"
        aria-label="Search"
      >
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
      </Button>
    </div>
  );
};

// Prop type validation
SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
