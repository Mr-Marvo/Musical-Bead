/* 
    ruvi@Aventure
    ruvi.ijse@hmail.com
*/
import React, { useState } from "react";
import "../../App.css";

import Album from "../Common/Album";
import Album2 from "../Common/Album2";
import { NewFooter, NewHeader } from "../../components/system";
import { SingerIcon } from "../../assets";

function Musician_Dashboard() {
  const [fullnameTag, setFullnameTag] = useState("Oliver Fernadoz");

  const [isPopup, setIsPopup] = useState(false);

  const handleIspopup = () => {
    setIsPopup(!isPopup);
  };

  return (
    <>
      <NewHeader />
      {/* Body Content */}
      <main className="font-nunito">
        <div className="musician_dashboard_container">
          <div className="musician_dashboard_sub_container1">
            <div className="sub_container1_left">
              <pre className="headline">Publish New Musical Bead Album+</pre>
              <div>
                <div className="img_container2"></div>
                <div className="data_cotainer">
                  <form>
                    <label>Album Name</label>
                    <input
                      type="text"
                      placeholder="Album Name"
                      className="album_name"
                    ></input>
                    <div>
                      <div>
                        <label>Category</label>
                        <input type="text" placeholder="Category"></input>
                      </div>

                      <div>
                        <label>Artist</label>
                        <input type="text" placeholder="Artist"></input>
                      </div>
                    </div>
                    <label>Description</label>
                    <textarea>Description ...</textarea>
                  </form>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button className="submit_btn"> Submit </button>
                  </div>
                </div>
              </div>
              <p>
                Add Songs <span>(0)</span>
              </p>
              <div>
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
            <div className="sub_container1_right">
              <pre className="headline">Pending Albums</pre>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="album_sub_wrap2">
                  <Album2 />
                  <Album2 />
                  <Album2 />
                  <Album2 />
                  <Album2 />
                  <Album2 />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="submit_btn"> Visit Profile </button>
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
                      <p className="pop_addsong font-nunito">Add song</p>
                      <span
                        onClick={handleIspopup}
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        -
                      </span>
                    </div>

                    <input type="text" placeholder="Song Name"></input>
                    <div className="upload_container">
                      <div className="upload_wrap"></div>
                      <div className="upload_wrap"></div>
                      <div className="upload_wrap"></div>
                    </div>
                    <div className="upload_container2">
                      <div className="up_song"></div>
                      <button className="add_btn">Add</button>
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
                src={SingerIcon}
                alt="User Image"
                className="singer_image"
                style={{ width: "60px" }}
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

          <div
            className="headline_wrap_container"
            style={{
              marginTop: "2rem",
              borderTopLeftRadius: "50px",
              borderTopRightRadius: "50px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <pre className="headline">My Orders</pre>
            </div>

            <div>
              <pre className="headline_left">To Ship</pre>
            </div>
          </div>
          <div className="album_wrap_container">
            <div className="album_sub_wrap">
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
            </div>
          </div>
          <div className="headline_wrap_container">
            <div>
              <pre className="headline_left">Shipped Orders</pre>
            </div>
          </div>
          <div className="album_wrap_container">
            <div className="album_sub_wrap">
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
            </div>
          </div>
          <div
            className="headline_wrap_container"
            style={{
              marginbottpm: "2rem",
              borderBottomLeftRadius: "50px",
              borderBottomRightRadius: "50px",
            }}
          >
            <div>
              <pre className="headline">Full Order History</pre>
            </div>
          </div>
        </div>
      </main>

      <NewFooter />
    </>
  );
}

export default Musician_Dashboard;