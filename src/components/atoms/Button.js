import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onClick, className, disabled }) => {
  const handleClick = (e) => {
    try {
      if (disabled) {
        e.preventDefault();
        return;
      }
      if (onClick) {
        onClick(e);
      }
    } catch (error) {
      console.error("Button click error:", error.message);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-blue-500 text-white px-4 py-2 rounded transition duration-200 ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
      } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// Add prop type validation
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

// Add default props
Button.defaultProps = {
  onClick: null,
  className: "",
  disabled: false,
};

export default Button;
