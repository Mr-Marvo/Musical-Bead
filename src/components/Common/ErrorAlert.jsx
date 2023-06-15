import React from "react";
import "./SuccessAlert.css";
import { CiCircleRemove } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const ErrorAlert = ({ show, message, onClose }) => {
  return (
    <>
      {show && (
        <div className="loading-circle-container">
          <div className="loading-circle-overlay"></div>

          <div className="loading-circle-spinner">
            <div className="success-box-wrap">
              <div className="success-box">
                <button
                  className="close-button"
                  onClick={onClose}
                  style={{ position: "absolute", top: "5", right: "5" }}
                >
                  <RxCross2 />
                </button>
                <div style={{ display: "flex", flexDirection: "column",width:'100%' }}>
                  <div style={{ display: "flex", flexDirection: "row",width:'100%' ,height:60}}>
                    <span
                      style={{
                        fontSize: 48,
                        color: "red",
                        fontWeight: 800,
                        marginRight: 20,
                      }}
                    >
                      <CiCircleRemove />
                    </span>
                    <h4 style={{ color: "#fff", fontSize: 28 }}>Error!</h4>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row",width:'100%' }}>
                    <p style={{ color: "red",marginLeft:'10px' }}>{message}</p>
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorAlert;
