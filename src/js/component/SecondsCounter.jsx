import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = ({ seconds }) => {
  const formatNumber = (num) => num.toString().padStart(6, "0").split("");

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="bg-dark text-white px-3 py-2 mx-1 rounded">
        <i className="fas fa-clock"></i>
      </div>
      {formatNumber(seconds).map((digit, index) => (
        <div key={index} className="bg-dark text-white px-3 py-2 mx-1 rounded">
          {digit}
        </div>
      ))}
    </div>
  );
};

SecondsCounter.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default SecondsCounter;
