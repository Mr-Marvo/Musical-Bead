import React, { useState,useRef,useEffect } from "react";
import "../../App.css";

import { RiArrowUpSFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";
import { NewFooter, NewHeader } from "../../components/system";
import { RxCross2 } from "react-icons/rx";
import { DocumentIcon, ImageIcon, MusicIcon, VideoIcon } from "../../assets";
import FlatList from "../../components/Common/FlatList";

function New_Musician_Dashboard() {
    
    useEffect(() => {
        /* This method is called until we get the musician name from signin or login screen */
        Name();
        
    });

    /* UseRefs ... this is to hide photo inputs and give that ability to respective buttons */
    const fileInputRef = useRef(null);
    const fileInputRef1 = useRef(null);
    /* This is to handle photo upload hidden function */
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const handleButtonClick1 = () => {
        fileInputRef1.current.click();
    };


   /* This is to take the photos and keep the previewing */
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const [picture1, setPicture1] = useState(null);
    const [imgData1, setImgData1] = useState(null);
   
    /* This is to handle photo upload again again */
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
   
   
    /* This is to handle open and close 2 steps  */
    const [isCollapsed1, setIsCollapsed1] = useState(false);
    const handleToggleCollapse1 = () => {
        setIsCollapsed1(!isCollapsed1);
    };

    const [isCollapsed2, setIsCollapsed2] = useState(false);
    const handleToggleCollapse2 = () => {
        setIsCollapsed2(!isCollapsed2);
    };

    /* UseStates to handle input data */
    const [fullname, setFullname] = useState('');
    const [title, setTitle] = useState('');
    const [titleE, setTitleE] = useState('');
    const [bio, setBio] = useState('');
    const [bioE, setBioE] = useState('');
    const [albumName, setAlbumName] = useState('');
    const [albumNameE, setAlbumNameE] = useState('');
    const [category, setCategory] = useState('');
    const [categoryE, setCategoryE] = useState('');
    const [description, setDescription] = useState('');
    const [descriptionE, setDescriptionE] = useState('');

    /* This is to handle the musician name  */
    const Name = () => {
        /* this should be passed from login screen or signin screen.. from useEffect we should get the value.. This temp till do so */
        setFullname("Oliver Ferdison");
        
    };

    /* This method handle all inputs adn save them in DB */
    const submitNewMusicianForReview = () => {
        console.log("FIRST Music Profile Data")
        console.log("Title: "+title+"Bio: "+bio);
        console.log("Profile Image: "+imgData)
        console.log("FIRST Music Bead Profile Data")
        console.log("Album Name: "+albumName+"Category: "+category+"Description: "+description);
        console.log("Bead Profile Image: "+imgData1)
        validate();
        
    }

    const validate = () => {
        if (title === '') {
            setTitleE("* required");
        }else{
            setTitleE("");
        }
        if (!/^[a-z A-Z]*$/.test(title)){
            setTitleE("* Please Enter Only Letters");
        }


        if (bio === '') {
            setBioE("* required");
           
        }else{
            setBioE("");
        }
        if (!/^[a-z A-Z]*$/.test(bio)){
            setBioE("* Please Enter Only Letters");
        }


        if (albumName === '') {
            setAlbumNameE("* required");
           
        }else{
            setAlbumNameE("");
        }
        if (!/^[a-z A-Z]*$/.test(albumName)){
            setAlbumNameE("* Please Enter Only Letters");
        }



        if (category === '') {
            setCategoryE("* required");
           
        }else{
            setCategoryE("");
        }
        if (!/^[a-z A-Z]*$/.test(category)){
            setCategoryE("* Please Enter Only Letters");
        }


        if (description === '') {
            setDescriptionE("* required");
           
        }else{
            setDescriptionE("");
        }
        if (!/^[a-z A-Z]*$/.test(description)){
            setDescriptionE("* Please Enter Only Letters");
        }



    }








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
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} onKeyUp={validate} placeholder="Title" className="text-white"></input>
                    {titleE && <div className="error">{titleE}</div>}
                    <textarea className="text-white" value={bio} onChange={(e) => setBio(e.target.value) } onKeyUp={validate}>Add Bio...</textarea>
                    {bioE && <div className="error">{bioE}</div>}
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
                        value={albumName} onChange={(e) => setAlbumName(e.target.value)} onKeyUp={validate}
                      ></input>
                      {albumNameE && <div className="error">{albumNameE}</div>}
                      <div>
                        <div>
                          <label className="font-nunito text-white">
                            Category
                          </label>
                          <input type="text" className="text-white" value={category} onChange={(e) => setCategory(e.target.value)} onKeyUp={validate}></input>
                          {categoryE && <div className="error">{categoryE}</div>}
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
                      <textarea className="text-white"  value={description} onChange={(e) => setDescription(e.target.value)} onKeyUp={validate}></textarea>
                      {descriptionE && <div className="error">{descriptionE}</div>}
                    </form>
                  </div>
                </div>
               
                    <p style={{ color: "white"}} className="add_song_heading_wrap">
                        Add Songs <span>(0)</span>
                    </p>
                  <div className="Flatlist_container1" >
                      <FlatList/>
                  </div>
                </div>
             
            )}
           
          </div>
        </div>
        <button
          className="review_submit_btn font-nunito"
          style={{ color: "white", fontWeight: "700" }}
          onClick={submitNewMusicianForReview}
        >
          Submit For Review
        </button>
      </main>
      
      <NewFooter />
    </>
  );
}

export default New_Musician_Dashboard;
