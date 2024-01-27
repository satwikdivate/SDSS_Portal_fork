// ConfirmationModal.js
import React from "react";
import "./ConfirmationModal.css";

const ConfirmationModal = ({ action, onConfirm, onCancel }) => {
  return (
    <div className="confirmation-modal-wrapper">
      <div className="confirmation-modal">
        <div className="alert-icon-container">
          <div className="alert-icon">
            <h1>!</h1>
          </div>
        </div>
        <p>Are you sure you want to {action}?</p>
        <div className="confirmation-buttons">
          <button className="confirm-button" onClick={onConfirm}>
            Confirm
          </button>
          <button className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
