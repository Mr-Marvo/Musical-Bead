import React, { useState, useRef } from "react";
import "./Popup.css"; // Import the CSS file for Popup component
import { DocumentIcon, ImageIcon, MusicIcon, VideoIcon } from "../../assets";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { useContentContext } from "../../providers/ContentContext";
import LoadingCircle from "./LoadingCircle";

const Popup = ({ onClose, onPhotoUpload,albumID }) => {
  const [isLoadingClircle, setIsLoadingCircle] = useState(false);
    const [errorPopup,setErrorPopup] = useState('');

  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [video, setVideo] = useState(null);
  const [lyricsPreview, setLyricsPreview] = useState(null);
  const [lyrics, setLyrics] = useState(null);
  const [songFile, setSongFile] = useState(null);
  const [songName, setSongName] = useState();
  const [audioUrl, setAudioUrl] = useState(null);


  let { url } = useContentContext();
  const token = localStorage.getItem("token");

  //const [fileInput, setFileInput] = useState(null);
  const fileInput = useRef(null);
  const fileInput1 = useRef(null);
  const fileInput2 = useRef(null);
  const fileInput3 = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
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
      setVideo(file);
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
      setLyrics(file);
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

     // Read the audio file and generate a preview URL
     const reader = new FileReader();
     reader.onload = () => {
       setAudioUrl(reader.result);
     };
     reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (imagePreview && fileInput) {
      onPhotoUpload(imagePreview);
    }
    if (imagePreview && videoPreview && lyricsPreview && songFile) {
        setErrorPopup('');
      setIsLoadingCircle(true);
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      let data1 = new FormData();
      data1.append("album_id", albumID);
      data1.append("musician_user_id", localStorage.getItem("userid"));
      data1.append("title", songName);
      data1.append("file_extension1", image?.name.split("."[1]));
      data1.append("file_extension2", lyrics?.name.split("."[1]));
      data1.append("file_extension3",songFile?.name.split("."[1]));
      data1.append("file_extension4", video?.name.split("."[1]));
      data1.append("created_by", localStorage.getItem("userid"));
      data1.append("cover_image", image);
      data1.append("lyrics_file", lyrics);
      data1.append("audio_file", songFile);
      data1.append("video_file", video);

      axios
        .post(url + "/song/add", data1, config)
        .then((response) => {
          console.log(response);
          if (response?.status === 200) {
            onClose();
            setIsLoadingCircle(false);
          } else {
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }else {
        setErrorPopup('* All Media Are Required');
    }
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
    <>
    <div className="popup-background">
      <div className="popup-box-wrap">
        <div className="popup-box">
          <div className="popup-header" style={{ position: "relative" }}>
            <p className="pop_addsong font-nunito" style={{ color: "white" }}>
              Add song
            </p>
            <button
              className="close-button"
              onClick={onClose}
              style={{ position: "absolute", top: "0", right: "0" }}
            >
              <RxCross2 />
            </button>
          </div>
          <div className="popup-content">
            <input
              type="text"
              placeholder="Song Name"
              className="song_name_in text-white"
              style={{
                background: "#313131",
                borderRadius: "10px",
                padding: "5px",
                marginTop: "10px",
              }}
              onChange={(e) => setSongName(e.target.value)}
            />
            <div className="upload_container">
              {imagePreview == null ? (
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    onClick={handleButtonClickImage}
                    className="upload_wrap"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      borderRadius: "10px",
                    }}
                  >
                    <input
                      accept="image/*"
                      type="file"
                      onChange={handleImageChange}
                      ref={fileInput}
                      style={{ display: "none" }}
                    />
                    <img src={ImageIcon} alt="icon" />
                    <p style={{ color: "#767676" }}>Upload Convert</p>
                    <p style={{ color: "#767676" }}>(JPG,PNG)</p>
                  </button>
                </div>
              ) : (
                <div
                  className="upload_wrap"
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    onClick={handleButtonClickImage}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      borderRadius: "10px",
                    }}
                  >
                    <input
                      accept="image/*"
                      type="file"
                      onChange={handleImageChange}
                      ref={fileInput}
                      style={{ display: "none" }}
                    />
                    <img className="upload_wrap" src={imagePreview} />
                  </div>
                </div>
              )}

              {videoPreview == null ? (
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    onClick={handleButtonClickVideo}
                    className="upload_wrap"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      borderRadius: "10px",
                    }}
                  >
                    <input
                      accept="video/mp4, video/WAV"
                      type="file"
                      ref={fileInput1}
                      onChange={handleVideoChange}
                      style={{ display: "none" }}
                    />
                    <img src={VideoIcon} alt="" />
                    <p style={{ color: "#767676" }}>Upload Video</p>
                    <p style={{ color: "#767676" }}>(Mp4,MVO)</p>
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    onClick={handleButtonClickVideo}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      borderRadius: "10px",
                    }}
                  >
                    <input
                      accept="video/mp4, video/WAV"
                      type="file"
                      ref={fileInput1}
                      onChange={handleVideoChange}
                      style={{ display: "none" }}
                    />
                    <video
                      controls
                      style={{ borderRadius: "10px" }}
                      className="upload_wrap"
                    >
                      <source src={videoPreview} type="video/mp4" />
                      <source src={videoPreview} type="video/quicktime" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}

              {lyricsPreview == null ? (
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    onClick={handleButtonClickLyrics}
                    className="upload_wrap"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <input
                      accept="PDF,image/*"
                      type="file"
                      ref={fileInput2}
                      onChange={handleLyricsChange}
                      style={{ display: "none" }}
                    />
                    <img src={DocumentIcon} alt="" />
                    <p style={{ color: "#767676" }}>Upload Lyrics</p>
                    <p style={{ color: "#767676" }}>(PDF,JPG)</p>
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    onClick={handleButtonClickLyrics}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      borderRadius: "10px",
                    }}
                  >
                    <input
                      accept="PDF,image/*"
                      type="file"
                      ref={fileInput2}
                      onChange={handleLyricsChange}
                      style={{ display: "none" }}
                    />
                    <img
                      src={lyricsPreview}
                      alt="Lyrics Preview"
                      className="upload_wrap"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="upload_container2 lst_cont">
              <div
                className="up_song"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                  height: "84px",
                }}
                onClick={handleButtonClickAudio}
              >
                <input
                  type="file"
                  accept="audio/mpeg, audio/wav"
                  onChange={handleSongChange}
                  ref={fileInput3}
                  style={{ display: "none" }}
                />
                {!audioUrl && (
                <p style={{ color: "#767676" }}>
                  Upload Songs <p style={{ color: "#767676" }}>(MP3,WAV)</p>
                </p>
                )}
                {audioUrl && (
                  <div  className="up_song"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      flexDirection: "row",
                      height: "84px",
                     
                    }}>
                    <div>
                        <p style={{color:'rgb(118,118,118)'}}>{songFile.name}</p>
                        {/*<audio controls>
                            <source src={audioUrl} type="audio/mpeg" />
                            Your browser does not support the audio tag.
                        </audio>*/}
                    </div>
                   
                  </div>
                )} 
              </div>
              <button
                className="add_btn"
                style={{ color: "white" }}
                onClick={handleSubmit}
              >
                Add
              </button>
             
            </div>
            {errorPopup && <div className="error" style={{marginTop:'5px'}}>{errorPopup}</div>}  
          </div>
        </div>
      </div>
    </div>
    <LoadingCircle show={isLoadingClircle}/>
    </>
  );
};

export default Popup;
