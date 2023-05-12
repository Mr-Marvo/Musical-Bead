import React, { useState } from "react";
import "../../App.css";

import { RiArrowUpSFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";
import { NewFooter, NewHeader } from "../../components/system";
import { RxCross2 } from "react-icons/rx";
import { DocumentIcon, ImageIcon, MusicIcon, VideoIcon } from "../../assets";

function New_Musician_Dashboard() {
  const [isCollapsed1, setIsCollapsed1] = useState(false);

  const handleToggleCollapse1 = () => {
    setIsCollapsed1(!isCollapsed1);
    Name();
  };

  const [isCollapsed2, setIsCollapsed2] = useState(false);

  const handleToggleCollapse2 = () => {
    setIsCollapsed2(!isCollapsed2);
  };

  const [fullname, setFullname] = useState("Oliver Ferdison");

  const Name = () => {
    setFullname("Oliver Ferdison");
  };

  const [isPopup, setIsPopup] = useState(false);

  const handleIspopup = () => {
    setIsPopup(!isPopup);
  };

  return (
    <>
      <NewHeader />

      {/* Body Content */}
      <main className="font-nunito">
        <h2 className="greeting font-nunito">Welcome ! to the Musical Beads</h2>
        <div className="step_container">
          <div>
            <div onClick={handleToggleCollapse1}>
              <div className="step">
                <div className="step_cover">
                  <div className="box">Step 01</div>
                </div>
                <span className="step_healine text-white">
                  Complete Your Musical Profile
                </span>
                <span className="step_toggle">
                  {isCollapsed1 ? (
                    <RiArrowUpSFill fontSize={48} />
                  ) : (
                    <RiArrowDownSFill fontSize={48} />
                  )}
                </span>
              </div>
            </div>
            {isCollapsed1 ? null : (
              <div className="step_content">
                <div
                  className="img_container1"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img src={VideoIcon} alt='icon'/>
                  <p style={{ color: "#767676" }}>Upload</p>
                  <p style={{ color: "#767676" }}>Profile Picture</p>
                </div>
                <div className="data_container">
                  <span
                    className="font-nunito text-white"
                    style={{ fontSize: "24px" }}
                  >
                    {fullname}
                  </span>
                  <form>
                    <input
                      type="text"
                      placeholder="Title"
                      className="text-white"
                    ></input>
                    <textarea className="text-white">Add Bio...</textarea>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="step_container">
          <div>
            <div onClick={handleToggleCollapse2}>
              <div className="step">
                <div className="step_cover">
                  <div className="box">Step 02</div>
                </div>
                <span className="step_healine text-white">
                  Complete Your First Musical Bead Profile
                </span>
                <span className="step_toggle">
                  {isCollapsed2 ? (
                    <RiArrowUpSFill fontSize={48} />
                  ) : (
                    <RiArrowDownSFill fontSize={48} />
                  )}
                </span>
              </div>
            </div>
            {isCollapsed2 ? null : (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="step_content">
                  <div
                    className="img_container2"
                    style={{
                      marginTop: "5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img src={VideoIcon} alt='icon' />
                  </div>
                  <div className="data_container data_container2">
                    <form>
                      <label className="font-nunito text-white">
                        Album Name
                      </label>
                      <input
                        type="text"
                        className="album_name text-white"
                      ></input>
                      <div>
                        <div>
                          <label className="font-nunito text-white">
                            Category
                          </label>
                          <input type="text" className="text-white"></input>
                        </div>

                        <div>
                          <label className="font-nunito text-white">
                            Artist
                          </label>
                          <input
                            type="text"
                            className="text-white"
                            value={fullname}
                          ></input>
                        </div>
                      </div>
                      <label className="font-nunito text-white">
                        Description
                      </label>
                      <textarea className="text-white"></textarea>
                    </form>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "2rem",
                  }}
                  className="song_wrap"
                >
                  <p style={{ color: "white", marginLeft: "10px" }}>
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
                </div>
              </div>
            )}
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
                        <img src={VideoIcon} alt="" />
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
                        <img src={DocumentIcon} alt="" />
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
                        <img src={MusicIcon} alt="" />
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

                        <img src={ImageIcon} alt="" />
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
        </div>
        <button
          className="review_submit_btn font-nunito"
          style={{ color: "white", fontWeight: "700" }}
        >
          Submit For Review
        </button>
      </main>

      <NewFooter />
    </>
  );
}

export default New_Musician_Dashboard;
