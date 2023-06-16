import React from "react";
import "./Popup.css"; // Import the CSS file for Popup component
import "./Popup2.css"; // Import the CSS file for Popup component

import { useRef } from "react";
import { useState } from "react";
import { ImageIcon } from "../../assets";
import { RxCross2 } from "react-icons/rx";
import { useContentContext } from "../../providers/ContentContext";
import LoadingCircle from "./LoadingCircle";
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";
import axios from "axios";

const ProfileUpdate = ({ show, onClose }) => {
  let { url } = useContentContext();
  const token = localStorage.getItem("token");

  const [imgData, setImgData] = useState(null);
  const [picture, setPicture] = useState(null);
  const [picture1, setPicture1] = useState(null);
  const [picture2, setPicture2] = useState(null);
  const [picture3, setPicture3] = useState(null);
  const [title, setTitle] = useState();
  const [shortDescription, setShortDescription] = useState();
  const [description, setDescription] = useState();

  const [titleE, setTitleE] = useState();
  const [shortDescriptionE, setShortDescriptionE] = useState();
  const [descriptionE, setDescriptionE] = useState();

  const fileInputRef = useRef(null);

  const [successTitle, setSuccessTitle] = useState();
  const [successShow, setSuccessShow] = useState(false);
  const [errorTitle, setErrorTitle] = useState();
  const [errorShow, setErrorShow] = useState(false);
  const [isLoadingClircle, setIsLoadingCircle] = useState(false);

  const successClose = () => {
    setSuccessShow(false);
  };
  const errorClose = () => {
    setErrorShow(false);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onChangePicture1 = (e) => {
    if (e.target.files[0]) {
      setPicture1(e.target.files[0]);
    }
  };

  const onChangePicture2 = (e) => {
    if (e.target.files[0]) {
      setPicture2(e.target.files[0]);
    }
  };

  const onChangePicture3 = (e) => {
    if (e.target.files[0]) {
      setPicture3(e.target.files[0]);
    }
  };

  const validateBead = () => {
    if (title === "") {
      setTitleE("* required");
    } else {
      setTitleE("");
    }

    if (shortDescription === "") {
      setShortDescriptionE("* required");
    } else {
      setShortDescriptionE("");
    }

    if (description === "") {
      setDescriptionE("* required");
    } else {
      setDescriptionE("");
    }
  };

  const updateProfile = () => {
    if (
      title !== "" &&
      title !== undefined &&
      description !== "" &&
      description !== undefined &&
      shortDescription !== "" &&
      shortDescription !== undefined
    ) {
      setIsLoadingCircle(true);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      let data2 = new FormData();
      data2.append("user_id", localStorage.getItem("userid"));
      data2.append("file_extension", picture?.name.split(".")[1]);
      data2.append("created_by", localStorage.getItem("userid"));
      data2.append("profile_picture", picture);
      data2.append("type", 0);

      axios
        .post(url + "/user/image", data2, config)
        .then((response) => {
          if (response?.status === 200) {
            let data3 = new FormData();
            data3.append("user_id", localStorage.getItem("userid"));
            data3.append("title", title);
            data3.append("short_description", shortDescription);
            data3.append("description", description);
            data3.append("created_by", localStorage.getItem("userid"));
            data3.append("image1", picture1);
            data3.append("file_extension1", picture1?.name.split(".")[1]);
            data3.append("image2", picture2);
            data3.append("file_extension2", picture2?.name.split(".")[1]);
            data3.append("image3", picture3);
            data3.append("file_extension3", picture3?.name.split(".")[1]);

            axios
              .post(url + "/musician/manage", data3, config)
              .then((response) => {
                if (response?.status === 200) {
                  setIsLoadingCircle(false);
                  setSuccessTitle("Profile Updated!");
                  setSuccessShow(true);
                  setTitle("");
                  setShortDescription("");
                  setDescription("");
                  setImgData(null);
                  setSuccessShow(false);
                  onClose();
                } else {
                  console.log(response);

                  setErrorTitle("Error");
                  setErrorShow(true);
                }
              })
              .catch((error) => {
                console.log(error);
                setIsLoadingCircle(false);
                setErrorTitle("Error");
                setErrorShow(true);
              });
          } else {
            console.log(response);

            setErrorTitle("Error");
            setErrorShow(true);
          }
        })
        .catch((error) => {
          console.log(error);

          setErrorTitle("Error");
          setErrorShow(true);
        });
    } else {
      setErrorTitle("All Fields Required!");
      setErrorShow(true);
    }
  };

  return (
    <>
      {show && (
        <>
          <div className="popup-background">
            <div className="popup-box-custom">
              <div className="popup-box2 m-2">
                <div className="popup-header" style={{ position: "relative" }}>
                  <p
                    className="pop_addsong font-nunito"
                    style={{
                      color: "white",
                      fontSize: "15px",
                      fontWeight: 400,
                    }}
                  >
                    Profile Update
                  </p>
                  <button
                    className="close-button"
                    onClick={onClose}
                    style={{ position: "absolute", top: "0", right: "0" }}
                  >
                    <RxCross2 />
                  </button>
                </div>
                <div
                  className="bead_edit_cont"
                  style={{
                    backgroundColor: "#000",
                    marginTop: "10px",
                    borderRadius: "25px",
                    padding: "1rem",
                    display: "grid",
                    gap: "2.5rem",
                  }}
                >
                  {imgData == null ? (
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                      className="justify-center items-center"
                    >
                      <label className="text-[#555555]">Profile Image</label>
                      <button
                        onClick={handleButtonClick}
                        className="upload_wrap"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          width: "200px",
                          height: "200px",
                        }}
                      >
                        <input
                          accept="image/*"
                          id="profilePic"
                          type="file"
                          onChange={onChangePicture}
                          ref={fileInputRef}
                          style={{ display: "none" }}
                        />
                        <img src={ImageIcon} alt="icon" />
                        <p style={{ color: "#767676" }}>Upload Convert</p>
                        <p style={{ color: "#767676" }}>(JPG,PNG)</p>
                      </button>
                    </div>
                  ) : (
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                      className="justify-center items-center"
                    >
                      <label className="text-[#555555]">Profile Image</label>
                      <RxCross2
                        style={{
                          color: "#fff",
                          position: "absolute",
                          right: 70,
                          top: 20,
                        }}
                        onClick={() => {
                          setImgData(null);
                        }}
                      />
                      <div
                        className="upload_wrap"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          width: "200px",
                          height: "200px",
                        }}
                      >
                        <img
                          className="playerProfilePic_home_tile"
                          src={imgData}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            borderRadius: "5px",
                            width: "200px",
                            height: "200px",
                          }}
                          alt="bead"
                        />
                      </div>
                    </div>
                  )}

                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label className="text-[#555555]">Title</label>
                    <input
                      type="text"
                      style={{
                        backgroundColor: "#1F1F1F",
                        color: "#ffff",
                        borderRadius: "25px",
                        height: "30px",
                        padding: "10px",
                      }}
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                      onKeyUp={validateBead}
                    ></input>
                    {titleE && (
                      <div className="error" style={{ marginTop: "5px" }}>
                        {titleE}
                      </div>
                    )}

                    <label className="text-[#555555]">Short Description</label>
                    <input
                      type="text"
                      style={{
                        backgroundColor: "#1F1F1F",
                        color: "#ffff",
                        borderRadius: "25px",
                        height: "30px",
                        padding: "10px",
                      }}
                      value={shortDescription}
                      onChange={(e) => {
                        setShortDescription(e.target.value);
                      }}
                      onKeyUp={validateBead}
                    ></input>
                    {shortDescriptionE && (
                      <div className="error" style={{ marginTop: "5px" }}>
                        {shortDescriptionE}
                      </div>
                    )}

                    <label className="text-[#555555]">Description</label>
                    <textarea
                      type="text"
                      style={{
                        backgroundColor: "#1F1F1F",
                        color: "#ffff",
                        borderRadius: "25px",

                        padding: "10px",
                      }}
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      onKeyUp={validateBead}
                    ></textarea>
                    {descriptionE && (
                      <div className="error" style={{ marginTop: "5px" }}>
                        {descriptionE}
                      </div>
                    )}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "col" }}>
                  <div className="flex flex-col">
                    <label className="text-[#FFF]">Image 1</label>
                    <input type="file" accept="image/*" className="text-white" onChange={onChangePicture1} />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[#FFF]">Image 2</label>
                    <input type="file" accept="image/*" className="text-white" onChange={onChangePicture2} />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[#FFF]">Image 2</label>
                    <input type="file" accept="image/*" className="text-white" onChange={onChangePicture3} />
                  </div>
                  <div>
                    <button
                      style={{
                        color: "white",
                        width: "160px",
                        height: "30px",
                        marginTop: "30px",
                        fontSize: "16px",
                        background:
                          "linear-gradient(270deg, #2AAEC0 0%, #12E45A 100%)",
                        borderRadius: "25px",
                        float: "right",
                      }}
                      onClick={updateProfile}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <LoadingCircle show={isLoadingClircle} />
          <SuccessAlert
            show={successShow}
            message={successTitle}
            onClose={successClose}
          />
          <ErrorAlert
            show={errorShow}
            message={errorTitle}
            onClose={errorClose}
          />
        </>
      )}
    </>
  );
};

export default ProfileUpdate;
