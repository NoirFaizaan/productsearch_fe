import React from "react";
import PropTypes from "prop-types";

const InputField = ({ 
  value, 
  onChange, 
  placeholder, 
  className, 
  type, 
  error, 
  maxLength 
}) => (
  <div className="flex flex-col">
    <input
      type={type}
      value={value}
      onChange={(e) => {
        try {
          if (onChange) onChange(e);
        } catch (err) {
          console.error("Error in InputField onChange:", err.message);
        }
      }}
      placeholder={placeholder}
      maxLength={maxLength}
      className={`rounded p-2 ${
        error ? "border-red-500" : "border-gray-300"
      } ${className}`}
    />
    {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
  </div>
);

// Add prop type validation
InputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  maxLength: PropTypes.number,
};

// Add default props
InputField.defaultProps = {
  onChange: null,
  placeholder: "",
  className: "",
  type: "text",
  error: "",
  maxLength: 255,
};

export default InputField;
