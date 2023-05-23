/* 
    ruvi@Aventure
    ruvi.ijse@hmail.com
*/
import React, { useState, useRef } from "react";
import "../../App.css";

import Album2 from "../Common/Album2";
import { NewFooter, NewHeader } from "../../components/system";
import { AddImageIcon, ProfileImage } from "../../assets";
import { RiArrowUpSFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";

import { DocumentIcon, ImageIcon, MusicIcon, VideoIcon } from "../../assets";

import { RxCross2 } from "react-icons/rx";
import OrderAlbum from "../Common/OrderAlbum";
import ShipAlbum from "../Common/ShipAlbum";

function Musician_Dashboard() {
  const fileInputRef = useRef(null);
  const fileInputRef1 = useRef(null);

  const handleButtonClick = () => {
    // Trigger the hidden file input
    fileInputRef.current.click();
  };
  const handleButtonClick1 = () => {
      // Trigger the hidden file input
      fileInputRef1.current.click();
    };
const [picture, setPicture] = useState(null);
const [imgData, setImgData] = useState(null);
const [picture1, setPicture1] = useState(null);
const [imgData1, setImgData1] = useState(null);
const onChangePicture = e => {
  if (e.target.files[0]) {
    console.log("picture: ", e.target.files);
    setPicture(e.target.files[0]);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImgData(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  }
};

const onChangePicture1 = e => {
  if (e.target.files[0]) {
    console.log("picture: ", e.target.files);
    setPicture1(e.target.files[0]);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImgData1(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  }
};

  const [fullnameTag, setFullnameTag] = useState("Oliver Fernadoz");
  const usertype = localStorage.getItem("usertype");

  const [isPopup, setIsPopup] = useState(false);

  const handleIspopup = () => {
    setIsPopup(!isPopup);
  };

  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [isCollapsed2, setIsCollapsed2] = useState(true);

  const handleToggleCollapse2 = () => {
    setIsCollapsed2(!isCollapsed2);
  };

  return (
    <>
      <NewHeader />
      {/* Body Content */}
      <main className="font-nunito">
        <div className="musician_dashboard_container">
          <div className="musician_dashboard_sub_container1">
            <div className="sub_container1_left">
              <pre className="headline font-nunito">
                Publish New Musical Bead Album+
              </pre>
              <div>
                <div>
                  <label className="text-[#555555] ml-28">
                    Mixtape/Album cover
                  </label>
                  
                  {imgData1 == null ? 
                   <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <button onClick={handleButtonClick1} className="img_container2" style={{display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column"}}>
                            <input accept="image/*" type="file" onChange={onChangePicture1}  ref={fileInputRef1} style={{ display: 'none' }}/>
                            <img src={ImageIcon} alt='icon'/>
                            <p style={{ color: "#767676" }}>Upload</p>
                            <p style={{ color: "#767676" }}>Profile Picture</p>
                        </button>
                    </div>
                  : 
                    <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}}>
                         <RxCross2 style={{color:'#fff',position:'absolute',right:20,top:0}} onClick={()=> {setImgData1(null)}}/>
                        <div className="img_container2" style={{display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column"}}>
                            <img className="playerProfilePic_home_tile" src={imgData1} style={{borderRadius:'60px',width:'260px',height:'260px'}}/>
                        </div>
                    </div>
                  }
                </div>
                <div className="data_cotainer">
                  <form>
                    <label className="text-[#555555]">Album Name</label>
                    <input
                      type="text"
                      className="album_name text-white"
                      style={{ backgroundColor: "#1F1F1F" }}
                    ></input>
                    <div>
                      <div>
                        <label className="text-[#555555]">Category</label>
                        <input
                          type="text"
                          className="text-white"
                          style={{ backgroundColor: "#1F1F1F" }}
                        ></input>
                      </div>

                      <div>
                        <label className="text-[#555555]">Artist</label>
                        <input
                          type="text"
                          className="text-white"
                          style={{ backgroundColor: "#1F1F1F" }}
                        ></input>
                      </div>
                    </div>
                    <label className="text-[#555555]">Description</label>
                    <textarea
                      className="text-white"
                      style={{ backgroundColor: "#1F1F1F" }}
                    ></textarea>
                  </form>
                </div>
              </div>
              <p className="text-[#555555]">
                Add Songs <span>(0)</span>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <div className="song_container2" onClick={handleIspopup}>
                  +
                </div>
                <div className="song_container2" onClick={handleIspopup}>
                  +
                </div>
                <div className="song_container2" onClick={handleIspopup}>
                  +
                </div>
                <div className="song_container2" onClick={handleIspopup}>
                  +
                </div>
                <div className="song_container2" onClick={handleIspopup}>
                  +
                </div>
                <div className="song_container2" onClick={handleIspopup}>
                  +
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="submit_btn" style={{ color: "white" }}>
                  Submit
                </button>
              </div>
            </div>
            <div className="sub_container1_right">
              <pre className="headline font-nunito">Pending Albums</pre>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <div className="album_sub_wrap2">
                  <div>
                    <Album2 />
                  </div>
                  <div>
                    <Album2 />
                  </div>
                  <div>
                    <Album2 />
                  </div>
                  <div>
                    <Album2 />
                  </div>
                  <div>
                    <Album2 />
                  </div>
                  <div>
                    <Album2 />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  marginTop: "4rem",
                }}
              >
                <button className="submit_btn" style={{ color: "white" }}>
                  {" "}
                  Visit Profile{" "}
                </button>
              </div>
            </div>
            {isPopup ? (
              <div className="popup_container">
                <div className="popup_wrap">
                  <div className="popup">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        className="pop_addsong font-nunito"
                        style={{ color: "white" }}
                      >
                        Add song
                      </p>
                      <span
                        onClick={handleIspopup}
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        <RxCross2 />
                      </span>
                    </div>

                    <input type="text" placeholder="Song Name"></input>
                    <div className="upload_container">
                      <div
                        className="upload_wrap"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <img src={ImageIcon} alt="" />
                        <p style={{ color: "#767676" }}>Upload Convert</p>
                        <p style={{ color: "#767676" }}>(JPG,PNG)</p>
                      </div>
                      <div
                        className="upload_wrap"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <img src={VideoIcon} alt="" />
                        <p style={{ color: "#767676" }}>Upload Video</p>
                        <p style={{ color: "#767676" }}>(Mp4,MVO)</p>
                      </div>
                      <div
                        className="upload_wrap"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <img src={DocumentIcon} alt="" />
                        <p style={{ color: "#767676" }}>Upload Lyrics</p>
                        <p style={{ color: "#767676" }}>(PDF,JPG)</p>
                      </div>
                    </div>
                    <div className="upload_container2">
                      <div
                        className="up_song"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                          flexDirection: "row",
                        }}
                      >
                        <p style={{ color: "#767676" }}>
                          Upload Songs{" "}
                          <p style={{ color: "#767676" }}>(MP3,WAV)</p>
                        </p>

                        <img src={MusicIcon} alt="" />
                      </div>
                      <button className="add_btn" style={{ color: "white" }}>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className="musician_dashboard_sub_container2">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={ProfileImage}
                alt="User"
                className="singer_dashimage w-20 h-20"
              />
              <pre className="user_tag" style={{ background: "transparent" }}>
                {" "}
                {fullnameTag}{" "}
              </pre>
            </div>
            <div>
              <aside
                className="headline font-nunito"
                style={{ textAlign: "left" }}
              >
                Profile Completeness:
              </aside>
              <div>
                <div></div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="submit_btn bar-btn">
                {" "}
                Update Your Profile{" "}
              </button>
            </div>
          </div>

          {usertype === 1 ? (
            <div
              className="new_bead_add_container"
              style={{
                backgroundColor: "rgba(0,0,0,0.32)",
                marginTop: "10px",
                borderRadius: "25px",
                padding: "1rem",
              }}
            >
              {imgData == null ? 
                    <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <button onClick={handleButtonClick} className="upload_wrap" style={{display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column",width:'200px',height:'200px'}}>
                            <input accept="image/*" id="profilePic" type="file" onChange={onChangePicture}  ref={fileInputRef} style={{ display: 'none' }}/>
                            <img src={ImageIcon} alt='icon'/>
                            <p style={{ color: "#767676" }}>Upload Convert</p>
                            <p style={{ color: "#767676" }}>(JPG,PNG)</p>
                        </button>
                    </div>
                  
                : 
                    <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center',width:'250px'}}>
                         <RxCross2 style={{color:'#fff',position:'absolute',right:0,top:0}} onClick={()=> {setImgData(null)}}/>
                        <div className="upload_wrap" style={{display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column",width:'200px',height:'200px'}}>
                            <img className="playerProfilePic_home_tile" src={imgData} style={{borderRadius:'5px',width:'200px',height:'200px'}}/>
                        </div>
                    </div>  
                }
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label className="text-[#555555]">Special Description</label>
              <textarea
                type="text"
                style={{
                  backgroundColor: "#1F1F1F",
                  color: "#ffff",
                  borderRadius: "25px",
                  height: "180px",
                }}
              ></textarea>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "20px",
              }}
            >
              <label className="text-[#555555]">Price</label>
              <input
                type="text"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "20px",
                }}
              >
                <label className="text-[#555555]">Price</label>
                <input
                  type="text"
                  style={{
                    backgroundColor: "#1F1F1F",
                    color: "#ffff",
                    borderRadius: "25px",
                    height: "30px",
                  }}
                ></input>

                <label className="text-[#555555]">Name</label>
                <input
                  type="text"
                  style={{
                    backgroundColor: "#1F1F1F",
                    color: "#ffff",
                    borderRadius: "25px",
                    height: "30px",
                  }}
                ></input>

                <button
                  style={{
                    color: "white",
                    width: "100px",
                    height: "30px",
                    marginTop: "10px",
                    fontSize: "16px",
                    background:
                      "linear-gradient(270deg, #2AAEC0 0%, #12E45A 100%)",
                    borderRadius: "25px",
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}

          <div
            className="headline_wrap_container"
            style={{
              marginTop: "2rem",
              borderTopLeftRadius: "50px",
              borderTopRightRadius: "50px",
              background: "rgba(0,0,0,.3)",
              border: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <pre className="headline font-nunito" style={{ width: "30%" }}>
                {" "}
              </pre>
              <pre className="headline font-nunito">MY ORDERS</pre>
              <div
                style={{ display: "flex", flexDirection: "row" }}
                className="dsb_ar"
              >
                <pre style={{ color: "#555555" }}>Order Status:All</pre>
                {isCollapsed ? (
                  <RiArrowUpSFill
                    fontSize={20}
                    style={{ marginRight: "10px" }}
                    color="#555555"
                    onClick={handleToggleCollapse}
                  />
                ) : (
                  <RiArrowDownSFill
                    fontSize={20}
                    style={{ marginRight: "10px" }}
                    color="#555555"
                    onClick={handleToggleCollapse}
                  />
                )}
                <pre style={{ color: "#555555" }}>Last 30 Days</pre>
                {isCollapsed2 ? (
                  <RiArrowUpSFill
                    fontSize={20}
                    color="#555555"
                    onClick={handleToggleCollapse2}
                  />
                ) : (
                  <RiArrowDownSFill
                    fontSize={20}
                    color="#555555"
                    onClick={handleToggleCollapse2}
                  />
                )}
              </div>
            </div>

            <div>
              <pre className="headline_left font-nunito">TO SHIP</pre>
            </div>
          </div>
          <div
            className="album_wrap_container"
            style={{ background: "rgba(0,0,0,.3)" }}
          >
            <div
              className="album_sub_wrap"
              style={{ background: "transparent" }}
            >
              <OrderAlbum />
              <OrderAlbum />
              <OrderAlbum />
              <OrderAlbum />
              <OrderAlbum />
              <OrderAlbum />
              <OrderAlbum />
              <OrderAlbum />
            </div>
          </div>
          <div
            className="headline_wrap_container"
            style={{ background: "rgba(0,0,0,.3)", border: "none" }}
          >
            <div>
              <pre className="headline_left font-nunito">SHIPPED ORDERS</pre>
            </div>
          </div>
          <div
            className="album_wrap_container"
            style={{ background: "rgba(0,0,0,.3)", border: "none" }}
          >
            <div
              className="album_sub_wrap"
              style={{ background: "transparent" }}
            >
              <ShipAlbum />
              <ShipAlbum />
              <ShipAlbum />
              <ShipAlbum />
              <ShipAlbum />
              <ShipAlbum />
              <ShipAlbum />
              <ShipAlbum />
            </div>
          </div>
          <div
            className="headline_wrap_container"
            style={{
              marginbottpm: "2rem",
              borderBottomLeftRadius: "50px",
              borderBottomRightRadius: "50px",
              background: "rgba(0,0,0,.3)",
              border: "none",
            }}
          >
            <div>
              <pre
                className=" font-nunito"
                style={{
                  color: "#929292",
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Full Order History
              </pre>
            </div>
          </div>
        </div>
      </main>

      <NewFooter />
    </>
  );
}

export default Musician_Dashboard;
