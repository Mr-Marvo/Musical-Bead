import React from 'react';
import './CustomCheckbox.css';

const CustomCheckbox = ({ checked, onChange }) => {
    
  return (
    <div>
      <label>
            <input
                type="checkbox"
                checked={checked}
               
                style={{ display: 'none' }}
            />
            <div
                className={`custom-checkbox ${checked ? 'checked' : ''}`}
                onClick={onChange}
            >
            {checked && <span>✓</span>}
            </div>
      </label>
    </div>
  );
};

export default CustomCheckbox;
