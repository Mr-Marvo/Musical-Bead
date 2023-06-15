import React from 'react';
import './SuccessAlert.css';
import {CiCircleCheck} from 'react-icons/ci';
import { RxCross2 } from "react-icons/rx";

const SuccessAlert = ({ show, message, onClose }) => {
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
                  <div style={{ display: "flex", flexDirection: "row",width:'100%' ,height:50}}>
                    <span
                      style={{
                        fontSize: 48,
                        color: "green",
                        fontWeight: 800,
                        marginRight: 10,
                      }}
                    >
                      <CiCircleCheck />
                    </span>
                    <h4 style={{ color: "#fff", fontSize: 28 }}>Successful!</h4>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row",width:'100%' }}>
                    <p style={{ color: "green",marginLeft:'10px' }}>{message}</p>
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

export default SuccessAlert;

/*
// Import Like This
import SuccessAlert from '../../components/Common/SuccessAlert';

//Maintain a useState
const [showSuccessAlert,setShowSuccessAlert] = useState(false);

const handleSuccessAlert =  () => {
    setShowSuccessAlert(!showSuccessAlert);
}

//Within The ' return () ' method, Bind The Handle Function with a button
<button onClick = {handleSuccessAlert}>Submit</button> 

// Within The ' return () ' method, call like below,
{showSuccessAlert ? 
    <SuccessAlert show={isSuccessAlert} />
:
    null
}
<SuccessAlert show={isSuccessAlert} />
*/