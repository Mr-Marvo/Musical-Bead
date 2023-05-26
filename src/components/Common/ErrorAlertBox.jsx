import React, { useState } from 'react';
import './ErrorAlertBox.css';

const ErrorAlertBox = ({ message, show }) => {

  return (
    <>
     { show && (
        <div className="error-alert-container">
          <div className="error-alert-icon">
            <span className="icon"></span>
          </div>
          <div className="error-alert-message">{message}</div>
          <button className="close-button" onClick={show}>
            <span style={{color:'black'}}>*</span>
          </button>
        </div>
      )}
    </>
  );
};

export default ErrorAlertBox;
