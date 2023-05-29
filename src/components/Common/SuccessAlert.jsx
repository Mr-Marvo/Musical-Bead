import React from 'react';
import './SuccessAlert.css';
import {CiCircleCheck} from 'react-icons/ci';
import { RxCross2 } from "react-icons/rx";

const SuccessAlert = ({ show, message }) => {
    const onClose = () => {
        /* 
         Handle
        */
     }
  return (
    <>
      {show && (
        <div className="loading-circle-container">
            <div className="loading-circle-overlay">
            </div>
            <div className="loading-circle-spinner">
                <div className="success-box-wrap">
                    <div className="success-box">
                        <button className="close-button" onClick={onClose} style={{ position: "absolute", top: "15", right: "15" }}>
                            <RxCross2 />
                        </button>
                        <div style={{display:'flex',flexDirection:'row'}}>
                            <span style={{fontSize:48,color:'red',fontWeight:800,marginRight:5}}><CiCircleCheck /></span>
                            <h4 style={{color:'#fff',fontSize:28}}>Sucessful!</h4>
                        </div>
                        <p style={{color:'green'}}>{message}</p>
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