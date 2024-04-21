import React from "react";
import "./../styles/Popup.css";
const Popup = ({ handleClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <p>Points in red have crossed the threshold</p>
      </div>
    </div>
  );
};

export default Popup;
