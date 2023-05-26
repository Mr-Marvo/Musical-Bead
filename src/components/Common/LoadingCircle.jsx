import React from 'react';
import './LoadingCircle.css';

const LoadingCircle = ({ show }) => {
  return (
    <>
      {show && (
        <div className="loading-circle-container">
            
            <div className="loading-circle-overlay">
           
            </div>
            
            <div className="loading-circle-spinner">
            <h4 style={{color:'#fff'}}>Please wait...</h4>
            <div className="loading-circle">
            
            </div>
          </div>
        </div>
      )}
    </>
  );
};


export default LoadingCircle;
