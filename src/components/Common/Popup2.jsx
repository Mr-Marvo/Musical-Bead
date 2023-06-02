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
                <p className="pop_addsong font-nunito" style={{ color: "white" ,fontSize:'15px', fontWeight:400 }}>ORDER DETAILS</p>
                <button className="close-button" onClick={onClose} style={{ position: "absolute", top: "0", right: "0" }}>
                    <RxCross2 />
                </button>
            </div>
            <div style={{display:'flex',flexDirection:'row',width:'100%',padding:'2rem'}}>
                <div style={{width:'25%',borderRight:'1px solid #4E4E4E'}}>

                </div>
                <div style={{width:'50%',borderRight:'1px solid #4E4E4E'}}>

                </div>
                <div style={{width:'25%'}}>
                    
                </div>
            </div>
        </div>
      </div>
    </div>
    <LoadingCircle show={isLoadingClircle}/>
    </>
  );
};

export default Popup;
