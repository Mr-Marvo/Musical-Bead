import React, { useState,useRef } from "react";
import "../../App.css";

import { RiArrowUpSFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";
import { NewFooter, NewHeader } from "../../components/system";
import { RxCross2 } from "react-icons/rx";
import { DocumentIcon, ImageIcon, MusicIcon, VideoIcon } from "../../assets";

function New_Musician_Dashboard() {
    const handleThisClick = () => {
        addObject();
        handleIspopup();
    }
    const fileInputRef = useRef(null);
    const fileInputRef1 = useRef(null);
    const fileInputRef2 = useRef(null);
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const [picture1, setPicture1] = useState(null);
    const [imgData1, setImgData1] = useState(null);
    const [picture2, setPicture2] = useState(null);
    const [imgData2, setImgData2] = useState(null);

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

    const onChangePicture2 = e => {
        if (e.target.files[0]) {
          console.log("picture: ", e.target.files);
          setPicture1(e.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setImgData2(reader.result);
          });
          reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleButtonClick = () => {
        // Trigger the hidden file input
        fileInputRef.current.click();
    };
    const handleButtonClick1 = () => {
        // Trigger the hidden file input
        fileInputRef1.current.click();
    };
    const handleButtonClick2 = () => {
        // Trigger the hidden file input
        fileInputRef2.current.click();
    };
   


    const [data, setData] = useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // Existing items in the array
      ]);
    
      const addObject = () => {
        // Create a new object
        const newObject = { id: data.length + 1, name: `Item ${data.length + 1}` };
    
        // Update the data array by adding the new object
        setData([...data, newObject]);
      };
      

      

   

  





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
                {imgData == null ? 
                    <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <button onClick={handleButtonClick} className="img_container1" style={{display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column",}}>
                            <input accept="image/*" id="profilePic" type="file" onChange={onChangePicture}  ref={fileInputRef} style={{ display: 'none' }}/>
                            <img src={ImageIcon} alt='icon'/>
                            <p style={{ color: "#767676" }}>Upload</p>
                            <p style={{ color: "#767676" }}>Profile Picture</p>
                        </button>
                    </div>
                  
                : 
                    <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}}>
                         <RxCross2 style={{color:'#fff',position:'absolute',right:50,top:50}} onClick={()=> {setImgData(null)}}/>
                        <div className="img_container1" style={{display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column",}}>
                            <img className="playerProfilePic_home_tile" src={imgData} style={{borderRadius:'100px',width:'200px',height:'200px'}}/>
                        </div>
                    </div>  
                }
               
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
                 
                  {imgData1 == null ? 
                   <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <button onClick={handleButtonClick1} className="img_container2" style={{display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column",marginTop:70}}>
                            <input accept="image/*" type="file" onChange={onChangePicture1}  ref={fileInputRef1} style={{ display: 'none' }}/>
                            <img src={ImageIcon} alt='icon'/>
                            <p style={{ color: "#767676" }}>Upload</p>
                            <p style={{ color: "#767676" }}>Profile Picture</p>
                        </button>
                    </div>
                  : 
                    <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}}>
                         <RxCross2 style={{color:'#fff',position:'absolute',right:25,top:50}} onClick={()=> {setImgData1(null)}}/>
                        <div className="img_container2" style={{display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column",marginTop:70}}>
                            <img className="playerProfilePic_home_tile" src={imgData1} style={{borderRadius:'60px',width:'260px',height:'260px'}}/>
                        </div>
                    </div>
                  }
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
                      overflowX:'scroll',
                      width:'1200px'
                    }}
                  >
                    {data.map((item) => (
                        <div key={item.id}  className="song_container2" style={{padding:'50px',cursor:'pointer'}} onClick={handleThisClick}>+</div>
                    ))}
               
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
                      
                        {imgData2 == null ? 
                            <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <button onClick={handleButtonClick2} className="upload_wrap" style={{display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column",width:'200px',height:'200px'}}>
                                    <input accept="image/*" id="profilePic" type="file" onChange={onChangePicture2}  ref={fileInputRef2} style={{ display: 'none' }}/>
                                    <img src={ImageIcon} alt='icon'/>
                                    <p style={{ color: "#767676" }}>Upload Convert</p>
                                    <p style={{ color: "#767676" }}>(JPG,PNG)</p>
                                </button>
                            </div>
                        
                        : 
                            <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center',width:'250px'}}>
                                <RxCross2 style={{color:'#fff',position:'absolute',right:0,top:0}} onClick={()=> {setImgData2(null)}}/>
                                <div className="upload_wrap" style={{display: "flex",alignItems: "center",justifyContent: "center",flexDirection: "column",width:'200px',height:'200px'}}>
                                    <img className="playerProfilePic_home_tile" src={imgData2} style={{borderRadius:'5px',width:'200px',height:'200px'}}/>
                                </div>
                            </div>  
                        }
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
