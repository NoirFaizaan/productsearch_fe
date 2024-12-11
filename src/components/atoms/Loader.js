import React from "react";
import PropTypes from "prop-types";
import { ClipLoader } from "react-spinners";

const LoadingModal = ({ show, message, size, color, overlayColor }) => {
  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center ${
        overlayColor ? `bg-${overlayColor}` : "bg-black bg-opacity-50"
      }`}
    >
      <div className="bg-white p-6 rounded shadow-lg flex flex-col items-center">
        <ClipLoader size={size} color={color} />
        {message && <p className="mt-4">{message}</p>}
      </div>
    </div>
  );
};

// Prop type validation
LoadingModal.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  overlayColor: PropTypes.string,
};

// Default props
LoadingModal.defaultProps = {
  message: "Loading...",
  size: 50,
  color: "#3498db",
  overlayColor: "black bg-opacity-50",
};

export default LoadingModal;
