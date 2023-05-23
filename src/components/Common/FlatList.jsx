// FlatList.js
import React, { useState } from 'react';
import Popup from './Popup';

import './FlatList.css'; // Import the CSS file for FlatList component

const FlatList = () => {
  const [items, setItems] = useState([{}, {}, {}, {}]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(null);

  const handleAddItem = () => {
    setCurrentItemIndex(items.length); // Set the current item index to the newly added item
    setItems([...items, {}]); // Add a new empty object to the items array
    setPopupOpen(true); // Open the popup for photo upload
  };

  const handleClosePopup = () => {
    setCurrentItemIndex(null);
    setPopupOpen(false);
  };

  const handlePhotoUpload = (photo) => {
    if (currentItemIndex !== null) {
      const updatedItems = [...items];
      updatedItems[currentItemIndex] = { ...updatedItems[currentItemIndex], photo };
      setItems(updatedItems);
    }
  };

  return (
    <div className="flat-list-container">
      <div className="item-container">
        {items.map((item, index) => (
          <div key={index} className="item">
            {!item.photo && (
              <div
                className="icon"
                onClick={() => {
                  setCurrentItemIndex(index);
                  setPopupOpen(true);
                }}
              >
                +
              </div>
            )}
            {item.photo && <img src={item.photo} alt="Preview" />}
          </div>
        ))}
      </div>
      <div className="item">
        <div className="icon" onClick={handleAddItem}>
          +
        </div>
      </div>
      {popupOpen && (
        <Popup onClose={handleClosePopup} onPhotoUpload={handlePhotoUpload} />
      )}
    </div>
  );
};

export default FlatList;
