/* 
    ruvi@Aventure
    ruvi.ijse@hmail.com
*/
import React, { useState } from "react";
import "../../App.css";

import Album from "../Common/Album";
import Album2 from "../Common/Album2";
import { NewFooter, NewHeader } from "../../components/system";
import { AddImageIcon, SingerIcon } from "../../assets";

import frame1 from '../../assets/images/system/Frame (4).png';
import frame2 from '../../assets/images/system/Frame (1).png';
import frame3 from '../../assets/images/system/Frame (2).png';
import frame4 from '../../assets/images/system/Frame (3).png';

import {RxCross2} from 'react-icons/rx';

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
              <pre className="headline font-nunito">
                Publish New Musical Bead Album+
              </pre>
              <div>
                <div>
                  <label className="text-[#555555] ml-28">Mixtape/Album  cover</label>
                  <div className="img_container2 flex justify-center items-center">
                    <img src={AddImageIcon} alt="ico" />
                  </div>
                </div>
                <div className="data_cotainer">
                  <form>
                    <label className="text-[#555555]">Album Name</label>
                    <input type="text" className="album_name text-white" style={{backgroundColor:'#1F1F1F'}}></input>
                    <div>
                      <div>
                        <label className="text-[#555555]">Category</label>
                        <input type="text" className="text-white" style={{backgroundColor:'#1F1F1F'}}></input>
                      </div>

                      <div>
                        <label className="text-[#555555]">Artist</label>
                        <input type="text" className="text-white" style={{backgroundColor:'#1F1F1F'}}></input>
                      </div>
                    </div>
                    <label className="text-[#555555]">Description</label>
                    <textarea className="text-white" style={{backgroundColor:'#1F1F1F'}}></textarea>
                  </form>
                </div>
              </div>
              <p className="text-[#555555]">
                Add Songs <span>(0)</span>
              </p>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
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
                <button className="submit_btn" style={{color:'white'}}>Submit</button>
              </div>
            </div>
            <div className="sub_container1_right">
              <pre className="headline font-nunito">Pending Albums</pre>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="album_sub_wrap2">
                  <div><Album2 /></div>
                  <div><Album2 /></div>
                  <div><Album2 /></div>
                  <div><Album2 /></div>
                  <div><Album2 /></div>
                  <div><Album2 /></div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center",alignItems:'flex-end',marginTop:'4rem'}}>
                <button className="submit_btn" style={{color:'white'}}> Visit Profile </button>
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
                      <p className="pop_addsong font-nunito" style={{color:'white'}}>Add song</p>
                      <span
                        onClick={handleIspopup}
                        style={{ fontSize: "18px", fontWeight: "bold",color:'white' }}
                      >
                        <RxCross2/>
                      </span>
                    </div>

                    <input type="text" placeholder="Song Name"></input>
                    <div className="upload_container">
                      <div className="upload_wrap" style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                        <img src={frame1} alt=""/>
                        <p style={{color:'#767676'}}>Upload Convert</p>
                        <p style={{color:'#767676'}}>(JPG,PNG)</p>
                      </div>
                      <div className="upload_wrap" style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                        <img src={frame2} alt=""/>
                        <p style={{color:'#767676'}}>Upload Video</p>
                        <p style={{color:'#767676'}}>(Mp4,MVO)</p>
                      </div>
                      <div className="upload_wrap" style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                        <img src={frame3} alt=""/>
                        <p style={{color:'#767676'}}>Upload Lyrics</p>
                        <p style={{color:'#767676'}}>(PDF,JPG)</p>
                      </div>
                    </div>
                    <div className="upload_container2" >
                      <div className="up_song" style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',flexDirection:'row'}}>
                        <p style={{color:'#767676'}}>Upload Songs  <p style={{color:'#767676'}}>(MP3,WAV)</p></p>
                       
                        <img src={frame4} alt=""/>
                      </div>
                      <button className="add_btn" style={{color:'white'}}>Add</button>
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

          <div
            className="headline_wrap_container"
            style={{
              marginTop: "2rem",
              borderTopLeftRadius: "50px",
              borderTopRightRadius: "50px",
              background:'rgba(0,0,0,.3)',
              border:'none'
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
               
              }}
            >
              <pre className="headline font-nunito" >My Orders</pre>
            </div>

            <div>
              <pre className="headline_left font-nunito">To Ship</pre>
            </div>
          </div>
          <div className="album_wrap_container" style={{background:'rgba(0,0,0,.3)'}}>
            <div className="album_sub_wrap"  style={{background:'transparent'}}>
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
          <div className="headline_wrap_container" style={{background:'rgba(0,0,0,.3)', border:'none'}}>
            <div>
              <pre className="headline_left font-nunito" >Shipped Orders</pre>
            </div>
          </div>
          <div className="album_wrap_container" style={{background:'rgba(0,0,0,.3)', border:'none'}}>
            <div className="album_sub_wrap" style={{background:'transparent'}}>
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
              background:'rgba(0,0,0,.3)',
              border:'none'
            }}
          >
            <div>
              <pre className="headline font-nunito">Full Order History</pre>
            </div>
          </div>
        </div>
      </main>

      <NewFooter />
    </>
  );
}

export default Musician_Dashboard;
