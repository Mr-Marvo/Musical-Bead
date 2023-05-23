import React, { useState,useRef } from 'react';
import './Popup.css'; // Import the CSS file for Popup component
import { DocumentIcon, ImageIcon, MusicIcon, VideoIcon } from "../../assets";
import { RxCross2 } from "react-icons/rx";

const Popup = ({ onClose, onPhotoUpload, onSongUpload }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [lyricsPreview, setLyricsPreview] = useState(null);
  const [songFile, setSongFile] = useState(null);
  

  //const [fileInput, setFileInput] = useState(null);
  const fileInput = useRef(null);
  const fileInput1 = useRef(null);
  const fileInput2 = useRef(null);
  const fileInput3 = useRef(null);

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


    const handleButtonClickImage = () => {
        fileInput.current.click();
    };

    const handleButtonClickVideo = () => {
        fileInput1.current.click();
    };

    const handleButtonClickLyrics = () => {
        fileInput2.current.click();
    };

    const handleButtonClickAudio = () => {
        fileInput3.current.click();
    };

  return (
    <div className="popup-background">
        <div className="popup-box">
            <div className="popup-header" style={{position:'relative'}}>
                     <p
                        className="pop_addsong font-nunito"
                        style={{ color: "white" }}
                      >
                        Add song
                      </p>
                <button className="close-button" onClick={onClose} style={{position:'absolute',top:'0',right:'0'}}>
                    <RxCross2 />
                </button>
            </div>
            <div className="popup-content">
                <div className="upload_container">
                    {imagePreview == null ? 
                        <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <button onClick={handleButtonClickImage} className="upload_wrap" style={{display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column",borderRadius:'10px'}}>
                            <input accept="image/*"  type="file" onChange={handleImageChange}  ref={fileInput} style={{ display: 'none' }}/>
                            <img src={ImageIcon} alt='icon'/>
                            <p style={{ color: "#767676" }}>Upload Convert</p>
                            <p style={{ color: "#767676" }}>(JPG,PNG)</p>
                        </button>
                        </div>
                    :
                        <div onClick={handleButtonClickImage} style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <input accept="image/*"  type="file" onChange={handleImageChange}  ref={fileInput} style={{ display: 'none' }}/>
                            <div style={{display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column",borderRadius:'10px',width:'175px',height:'175px'}}>
                                <img className="playerProfilePic_home_tile upload_wrap" src={imagePreview} style={{borderRadius:'10px'}}/>
                            </div>
                        </div>
                    }

                    {videoPreview == null ? 
                        <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <button onClick={handleButtonClickVideo} className="upload_wrap" style={{display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column",borderRadius:'10px'}}>
                                <input accept="video/mp4, video/WAV"  type="file" ref={fileInput1} onChange={handleVideoChange} style={{ display: 'none' }}/>
                                <img src={VideoIcon} alt="" />
                                <p style={{ color: "#767676" }}>Upload Video</p>
                                <p style={{ color: "#767676" }}>(Mp4,MVO)</p>
                            </button>
                        </div>
                    :
                        <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <div onClick={handleButtonClickVideo} style={{display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column",borderRadius:'10px'}}>
                            <input accept="video/mp4, video/WAV"  type="file" ref={fileInput1} onChange={handleVideoChange} style={{ display: 'none' }}/>
                            <video controls style={{borderRadius:'10px'}} className="upload_wrap">
                                <source src={videoPreview} type="video/mp4" />
                                <source src={videoPreview} type="video/quicktime" />
                                Your browser does not support the video tag.
                            </video>
                            </div>
                        </div>
                    }

                    {lyricsPreview == null ? 
                        <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <button onClick={handleButtonClickLyrics} className="upload_wrap" style={{display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column"}}>
                                <input accept="PDF,image/*"  type="file" ref={fileInput2} onChange={handleLyricsChange} style={{ display: 'none' }}/>
                                <img src={DocumentIcon} alt="" />
                                <p style={{ color: "#767676" }}>Upload Lyrics</p>
                                <p style={{ color: "#767676" }}>(PDF,JPG)</p>
                            </button>
                        </div>
                    :
                        <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <div onClick={handleButtonClickLyrics} style={{display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column",borderRadius:'10px'}}>
                                <input accept="PDF,image/*"  type="file" ref={fileInput2} onChange={handleLyricsChange} style={{ display: 'none' }}/>
                                <img src={lyricsPreview} alt="Lyrics Preview" className="upload_wrap"/>
                            </div>
                        </div>
                    }
                
                </div>

                <div className="upload_container2" style={{width:'90%'}}>
                    <div className="up_song" style={{display: "flex",alignItems: "center",justifyContent: "space-evenly",flexDirection: "row",height:'84px'}} onClick={handleButtonClickAudio}>
                        <input
                            type="file"
                            accept="audio/mpeg, audio/wav"
                            onChange={handleSongChange}
                            ref={fileInput3}
                            style={{ display: 'none' }}
                        />
                        <p style={{ color: "#767676" }}>Upload Songs{" "}<p style={{ color: "#767676" }}>(MP3,WAV)</p></p>
                        <img src={MusicIcon} alt="" />
                    </div>
                    <button className="add_btn" style={{ color: "white" }} onClick={handleSubmit}>
                            Add
                    </button>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Popup;