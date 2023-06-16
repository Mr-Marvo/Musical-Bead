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
import { useEffect } from "react";

const BeadEdit = ({ show, bead, onClose }) => {
  let { url } = useContentContext();
  const token = localStorage.getItem("token");

  const [imgData, setImgData] = useState(null);
  const [picture, setPicture] = useState(null);
  const [beadDescription, setBeadDescription] = useState(bead.features);
  const [beadPrice, setBeadPrice] = useState(bead.price);
  const [beadName, setBeadName] = useState(bead.title);
  const [beadModel, setBeadModel] = useState(bead.model_number);
  const [beadDimension, setBeadDimension] = useState(bead.dimension);
  const [beadKeyRing, setBeadKeyRing] = useState(bead.key_ring);
  const [qty, setQty] = useState(bead.available_qty);

  const [beadDescriptionE, setBeadDescriptionE] = useState();
  const [beadPriceE, setBeadPriceE] = useState();
  const [beadNameE, setBeadNameE] = useState();
  const [beadModelE, setBeadModelE] = useState();
  const [beadDimensionE, setBeadDimensionE] = useState();
  const [beadKeyRingE, setBeadKeyRingE] = useState();
  const [qtyE, setQtyE] = useState();

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

  const validateBead = () => {
    if (beadDescription === "") {
      setBeadDescriptionE("* required");
    } else {
      setBeadDescriptionE("");
    }

    if (beadDimension === "") {
      setBeadDimensionE("* required");
    } else {
      setBeadDimensionE("");
    }

    if (beadName === "") {
      setBeadNameE("* required");
    } else {
      setBeadNameE("");
    }

    if (beadModel === "") {
      setBeadModelE("* required");
    } else {
      setBeadModelE("");
    }

    if (beadKeyRing === "") {
      setBeadKeyRingE("* required");
    } else {
      setBeadKeyRingE("");
    }

    if (beadPrice === "") {
      setBeadPriceE("* required");
    } else {
      setBeadPriceE("");
    }
    if (qty === "") {
      setQtyE("* required");
    } else {
      setQtyE("");
    }
  };

  const addBead = () => {
    console.log(beadDescription);
    if (
      beadDescription !== "" &&
      beadDescription !== undefined &&
      beadDimension !== "" &&
      beadDimension !== undefined &&
      beadName !== "" &&
      beadName !== undefined &&
      beadModel !== "" &&
      beadModel !== undefined &&
      beadKeyRing !== "" &&
      beadKeyRing !== undefined &&
      beadPrice !== undefined &&
      beadPrice !== "" &&
      qty !== undefined &&
      qty !== ""
    ) {
      setIsLoadingCircle(true);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      let data3 = new FormData();
      data3.append("bead_id", bead.bead_id);
      data3.append("user_id", localStorage.getItem("userid"));
      data3.append("title", beadName);
      data3.append("model_number", beadModel);
      data3.append("features", beadDescription);
      data3.append("dimension", beadDimension);
      data3.append("key_ring", beadKeyRing);
      data3.append("price", beadPrice);
      data3.append("bead_image", picture);
      data3.append("file_extension", picture?.name.split(".")[1]);
      data3.append("qty", qty);

      axios
        .post(url + "/bead/edit", data3, config)
        .then((response) => {
          console.log(response);
          if (response?.status === 200) {
            setIsLoadingCircle(false);
            setSuccessTitle("Bead Added!");
            setSuccessShow(true);
            setBeadDescription("");
            setBeadDimension("");
            setBeadName("");
            setBeadModel("");
            setBeadKeyRing("");
            setBeadPrice("");
            setImgData(null);
            setQty(0);
            onClose();
          } else {
            console.log(response);
            onClose();
            setErrorTitle("Error");
            setErrorShow(true);
          }
        })
        .catch((error) => {
          setIsLoadingCircle(false);
          console.log(error);
          onClose();
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
                    ORDER DETAILS
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
                    padding: "0.5rem",
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
                      <label className="text-[#555555]">Upload Image</label>
                      <button
                        onClick={handleButtonClick}
                        className="upload_wrap"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          width: "150px",
                          height: "150px",
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
                      <label className="text-[#555555]">Upload Image</label>
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
                          width: "150px",
                          height: "150px",
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
                            width: "150px",
                            height: "150px",
                          }}
                          alt="bead"
                        />
                      </div>
                    </div>
                  )}

                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label className="text-[#555555]">Name</label>
                    <input
                      type="text"
                      style={{
                        backgroundColor: "#1F1F1F",
                        color: "#ffff",
                        borderRadius: "25px",
                        height: "30px",
                        padding: "10px",
                        width: "100%",
                      }}
                      value={beadName}
                      onChange={(e) => {
                        setBeadName(e.target.value);
                      }}
                      onKeyUp={validateBead}
                    ></input>
                    {beadNameE && (
                      <div className="error" style={{ marginTop: "5px" }}>
                        {beadNameE}
                      </div>
                    )}

                    <label className="text-[#555555]">Model Number</label>
                    <input
                      type="text"
                      style={{
                        backgroundColor: "#1F1F1F",
                        color: "#ffff",
                        borderRadius: "25px",
                        height: "30px",
                        padding: "10px",
                      }}
                      value={beadModel}
                      onChange={(e) => {
                        setBeadModel(e.target.value);
                      }}
                      onKeyUp={validateBead}
                    ></input>
                    {beadModelE && (
                      <div className="error" style={{ marginTop: "5px" }}>
                        {beadModelE}
                      </div>
                    )}

                    <label className="text-[#555555]">Key Ring</label>
                    <input
                      type="text"
                      style={{
                        backgroundColor: "#1F1F1F",
                        color: "#ffff",
                        borderRadius: "25px",
                        height: "30px",
                        padding: "10px",
                      }}
                      value={beadKeyRing}
                      onChange={(e) => {
                        setBeadKeyRing(e.target.value);
                      }}
                      onKeyUp={validateBead}
                    ></input>
                    {beadKeyRingE && (
                      <div className="error" style={{ marginTop: "5px" }}>
                        {beadKeyRingE}
                      </div>
                    )}
                    <label className="text-[#555555]">Qty</label>
                    <input
                      type="number"
                      style={{
                        backgroundColor: "#1F1F1F",
                        color: "#ffff",
                        borderRadius: "25px",
                        height: "30px",
                        padding: "10px",
                      }}
                      value={qty}
                      onChange={(e) => {
                        setQty(e.target.value);
                      }}
                      onKeyUp={validateBead}
                    ></input>
                    {qtyE && (
                      <div className="error" style={{ marginTop: "5px" }}>
                        {qtyE}
                      </div>
                    )}
                    <label className="text-[#555555]">Price</label>
                    <input
                      type="number"
                      style={{
                        backgroundColor: "#1F1F1F",
                        color: "#ffff",
                        borderRadius: "25px",
                        height: "30px",
                        padding: "10px",
                      }}
                      value={beadPrice}
                      onChange={(e) => {
                        setBeadPrice(e.target.value);
                      }}
                      onKeyUp={validateBead}
                    ></input>
                    {beadPriceE && (
                      <div className="error" style={{ marginTop: "5px" }}>
                        {beadPriceE}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-[#555555]">Features</label>
                  <textarea
                    type="text"
                    style={{
                      backgroundColor: "#1F1F1F",
                      color: "#ffff",
                      borderRadius: "25px",

                      padding: "10px",
                    }}
                    value={beadDescription}
                    onChange={(e) => {
                      setBeadDescription(e.target.value);
                    }}
                    onKeyUp={validateBead}
                  ></textarea>
                  {beadDescriptionE && (
                    <div className="error" style={{ marginTop: "5px" }}>
                      {beadDescriptionE}
                    </div>
                  )}
                  <label className="text-[#555555]">Dimensions</label>
                  <textarea
                    type="text"
                    style={{
                      backgroundColor: "#1F1F1F",
                      color: "#ffff",
                      borderRadius: "25px",

                      padding: "10px",
                    }}
                    value={beadDimension}
                    onChange={(e) => {
                      setBeadDimension(e.target.value);
                    }}
                    onKeyUp={validateBead}
                  ></textarea>
                  {beadDimensionE && (
                    <div className="error" style={{ marginTop: "5px" }}>
                      {beadDimensionE}
                    </div>
                  )}
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
                      onClick={addBead}
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

export default BeadEdit;
