import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = ({ seconds }) => {
  // Formatear los dígitos
  const formatNumber = (num) => num.toString().padStart(2, "0");

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="bg-dark text-white px-3 py-2 mx-1 rounded">
        <i className="fas fa-clock"></i>
      </div>
      <div className="bg-dark text-white px-3 py-2 mx-1 rounded">{formatNumber(Math.floor(seconds / 10000))}</div>
      <div className="bg-dark text-white px-3 py-2 mx-1 rounded">{formatNumber(Math.floor((seconds / 1000) % 10))}</div>
      <div className="bg-dark text-white px-3 py-2 mx-1 rounded">{formatNumber(Math.floor((seconds / 100) % 10))}</div>
      <div className="bg-dark text-white px-3 py-2 mx-1 rounded">{formatNumber(Math.floor((seconds / 10) % 10))}</div>
      <div className="bg-dark text-white px-3 py-2 mx-1 rounded">{formatNumber(seconds % 10)}</div>
    </div>
  );
};

SecondsCounter.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default SecondsCounter;
