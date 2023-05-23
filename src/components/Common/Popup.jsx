import React, { useState } from 'react';
import './Popup.css'; // Import the CSS file for Popup component

const Popup = ({ onClose, onPhotoUpload, onSongUpload }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [lyricsPreview, setLyricsPreview] = useState(null);
  const [songFile, setSongFile] = useState(null);

  const [fileInput, setFileInput] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVideoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLyricsChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLyricsPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSongChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSongFile(file);
    }
  };

  const handleSubmit = () => {
    if (imagePreview && fileInput) {
      onPhotoUpload(imagePreview);
    }
    if (imagePreview && videoPreview && lyricsPreview && songFile) {
      const songData = {
        imagePreview,
        videoPreview,
        lyricsPreview,
        songFile
      };
      onSongUpload(songData);
    }
    onClose();
  };

  return (
    <div className="popup-background">
      <div className="popup-box">
        <div className="popup-header">
          <h4>Add Photo</h4>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="popup-content">
        <div className="row">
            <div className="upload-box">
              <h5>Image Upload</h5>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={(input) => setFileInput(input)}
              />
              {imagePreview && (
                <div className="preview-box">
                  <img src={imagePreview} alt="Image Preview" />
                </div>
              )}
            </div>
            <div className="upload-box">
              <h5>Video Upload</h5>
              <input
                type="file"
                accept="video/mp4, video/quicktime"
                onChange={handleVideoChange}
              />
              {videoPreview && (
                <div className="preview-box">
                  <video controls>
                    <source src={videoPreview} type="video/mp4" />
                    <source src={videoPreview} type="video/quicktime" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
            <div className="upload-box">
              <h5>Lyrics Upload</h5>
              <input
                type="file"
                accept=".pdf, image/jpeg"
                onChange={handleLyricsChange}
              />
              {lyricsPreview && (
                <div className="preview-box">
                  <img src={lyricsPreview} alt="Lyrics Preview" />
                </div>
              )}
            </div>
            <div className="song-upload-box">
              <h5>Song Upload</h5>
              <input
                type="file"
                accept="audio/mpeg, audio/wav"
                onChange={handleSongChange}
              />
              {songFile && <p>{songFile.name}</p>}
            </div>
          </div>
          </div>
          <button className="add-button" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
    
  );
};

export default Popup;