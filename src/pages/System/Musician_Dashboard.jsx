import React, { useState, useRef, useEffect } from "react";
import "../../App.css";

import Album2 from "../Common/Album2";
import { NewFooter, NewHeader } from "../../components/system";
import { ProfileImage } from "../../assets";
import { RiArrowUpSFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";

import { ImageIcon } from "../../assets";

import { RxCross2 } from "react-icons/rx";
import OrderAlbum from "../Common/OrderAlbum";
import ShipAlbum from "../Common/ShipAlbum";
import { useContentContext } from "../../providers/ContentContext";
import axios from "axios";
import FlatList from "../../components/Common/FlatList";
import LoadingCircle from "../../components/Common/LoadingCircle";
import ErrorAlertBox from "../../components/Common/ErrorAlertBox";

function Musician_Dashboard() {
    const [isLoadingClircle,setIsLoadingCircle] = useState(false);
   

  /* Error Handling useStates */
  const [albumNameE,setAlbumNameE] = useState('');
  const [priceE,setPriceE] = useState('');
  const [descriptionE,setDescriptionE] = useState('');

  const fileInputRef = useRef(null);
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const [selectedSong, setSelectedSong] = useState(null);

  let { url } = useContentContext();
  const token = localStorage.getItem("token");
  const [albumID, setAlbumID] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(1);

  const [pendingAlbums, setPendingAlbums] = useState([]);
  const [currentAlbumId, setCurrentAlbumId] = useState(null);

  const [isSubmit, setIsSubmit] = useState(false);

  const handleAlbumClick = (albumId) => {
    setCurrentAlbumId(albumId);
  };

  const handleButtonClick = () => {
    // Trigger the hidden file input
    fileInputRef.current.click();
  };
  const handleButtonClick1 = () => {
    // Trigger the hidden file input
    fileInputRef1.current.click();
  };
  const handleButtonClickSong = () => {
    fileInputRef2.current.click();
  };

  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [picture1, setPicture1] = useState(null);
  const [imgData1, setImgData1] = useState(null);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState('');

  const [state, setState] = useState(0);

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
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData1(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedSong(file);
  };

  useEffect(() => {
    loadPendingAlbums();
    loadCategories();
    if (usertype === "1") {
      loadPendingAlbums(0);
    } else {
      loadPendingAlbums(localStorage.getItem("userid"));
    }
  }, []);

  const loadPendingAlbums = (userid) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      user_id: localStorage.getItem("userid"),
      musician_user_id: userid,
      status: 0,
    };

    axios
      .post(url + "/album/all", bodyParameters, config)
      .then((response) => {
        if (response?.status === 200) {
          setPendingAlbums(response.data.output.albums.slice(0, 9));
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [fullnameTag, setFullnameTag] = useState("Oliver Fernadoz");
  const usertype = localStorage.getItem("usertype");

  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [isCollapsed2, setIsCollapsed2] = useState(true);

  const handleToggleCollapse2 = () => {
    setIsCollapsed2(!isCollapsed2);
  };

  const loadCategories = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      status: "1",
    };

    axios
      .post(url + "/category/all", bodyParameters, config)
      .then((response) => {
        if (response?.status === 200) {
          setCategories(response.data.output);
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitAlbum = () => {
    if (state === 0) {
        if ((title !== "") && (/^[a-z A-Z]*$/.test(title)) && (price !== "") && (/^[0-9]*$/.test(price)) && (description !== "") && (/^[a-z A-Z]*$/.test(description)) && selectedSong){
          
            setIsLoadingCircle(true);
            const config = {
            headers: { Authorization: `Bearer ${token}` },
            };

            let data3 = new FormData();
            data3.append("musician_user_id", localStorage.getItem("userid"));
            data3.append("category_id", category);
            data3.append("title", title);
            data3.append("album_amount", price);
            data3.append("slogan", null);
            data3.append("description", description);
            data3.append("image_extension", picture1?.name.split(".")[1]);
            data3.append("created_by", localStorage.getItem("userid"));
            data3.append("cover_image", picture1);
            data3.append("sample_audio", selectedSong);
            data3.append("file_extension", selectedSong?.name.split(".")[1]);

            axios.post(url + "/album/add", data3, config)
                .then((response) => {
                console.log(response);
                if (response?.status === 200) {
                    setAlbumID(response.data.output.id);
                    setIsSubmit(!isSubmit);
                  
                    setIsLoadingCircle(false);
                    setState(1);
                   
                    if (usertype === "1") {
                    loadPendingAlbums(0);
                    } else {
                    loadPendingAlbums(localStorage.getItem("userid"));
                    }
                } else {
                    console.log(response);
                    
                }
                })
                .catch((error) => {
                console.log(error);
                });
           
        }else {
           
            validate();
            
        }
    } else {
      window.location.reload();
    }
  };

  const validate = () => {
    if (title === "") {
      setAlbumNameE("* required");
    } else {
      setAlbumNameE("");
    }
    if (!/^[a-z A-Z]*$/.test(title)) {
      setAlbumNameE("* Please Enter Only Letters");
    }

    if (price === "") {
      setPriceE("* required");
    } else {
      setPriceE("");
    }
    if (!/^[0-9]*$/.test(price)) {
      setPriceE("* Please Enter Only Numberss");
    }

    if (description === "") {
      setDescriptionE("* required");
    } else {
      setDescriptionE("");
    }
    if (!/^[a-z A-Z]*$/.test(description)) {
      setDescriptionE("* Please Enter Only Letters");
    }
  }

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

                  {imgData1 == null ? (
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <button
                        onClick={handleButtonClick1}
                        className="img_container2"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <input
                          accept="image/*"
                          type="file"
                          onChange={onChangePicture1}
                          ref={fileInputRef1}
                          style={{ display: "none" }}
                        />
                        <img src={ImageIcon} alt="icon" />
                        <p style={{ color: "#767676" }}>Upload</p>
                        <p style={{ color: "#767676" }}>Profile Picture</p>
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
                      <RxCross2
                        style={{
                          color: "#fff",
                          position: "absolute",
                          right: 20,
                          top: 0,
                        }}
                        onClick={() => {
                          setImgData1(null);
                        }}
                      />
                      <div
                        className="img_container2"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <img
                          className="playerProfilePic_home_tile"
                          src={imgData1}
                          style={{
                            borderRadius: "60px",
                            width: "260px",
                            height: "260px",
                          }}
                          alt="profile pick"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="data_cotainer">
                  <div className="form_div">
                    <label className="text-[#555555]">Album Name</label>
                    <input
                      type="text"
                      className="album_name text-white"
                      style={{ backgroundColor: "#1F1F1F" }}
                      onChange={(e) => setTitle(e.target.value)}
                      onKeyUp={validate}
                    ></input>
                     {albumNameE && <div className="error">{albumNameE}</div>}
                    <div>
                      <div>
                        <label className="text-[#555555]">Category</label>
                        <select
                          type="text"
                          className="text-white"
                          onChange={(e) => {
                            setCategory(e.target.value);
                          }}
                          style={{ backgroundColor: "#1F1F1F" }}
                        >
                          {categories.map((category) => {
                            return (
                              <option id={category.id} value={category.id}>
                                {category.title}
                              </option>
                            );
                          })}
                        </select>
                       
                      </div>

                      <div>
                        <label className="text-[#555555]">Price $</label>
                        <input
                          type="number"
                          className="text-white"
                          value={price}
                          onChange={(e) => {
                            setPrice(e.target.value);
                          }}
                          onFocus={() => {
                            setPrice("");
                          }}
                          onKeyUp={validate}
                          style={{background:'rgb(31,31,31)'}}
                        />
                        {priceE && <div className="error">{priceE}</div>}
                      </div>
                    </div>
                    <label className="text-[#555555]">Description</label>
                    <textarea
                      className="text-white"
                      style={{ backgroundColor: "#1F1F1F" }}
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      onKeyUp={validate}
                    />
                    {descriptionE && <div className="error">{descriptionE}</div>}
                    <label className="text-[#555555] mt-4">Sample Audio</label>
                    <button
                      onClick={handleButtonClickSong}
                      style={{
                        height: "44px",
                        borderRadius: "10px",
                        background: "rgb(31,31,31)",
                        color: "#555555",
                        marginTop: "10px",
                      }}
                    >
                      Choose You Music
                      <input
                        type="file"
                        accept="audio/mp3"
                        ref={fileInputRef2}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                    </button>
                    {selectedSong && (
                      <span className="text-white">{selectedSong.name}</span>
                    )}
                  </div>
                </div>
              </div>

              {isSubmit && (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{ color: "#555555" }}
                    className="add_song_heading_wrap"
                  >
                    Add Songs <span style={{ color: "#555555" }}>(0)</span>
                  </p>
                  <div className="Flatlist_container2">
                    <FlatList albumID={albumID} />
                  </div>
                </div>
              )}

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  className="submit_btn"
                  style={{ color: "white" }}
                  onClick={submitAlbum}
                >
                  {state === 0 ? "SUBMIT" : "Create New Album"}
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
                  {pendingAlbums.map((album) => {
                    return (
                      <div>
                        <Album2
                          key={album.id}
                          album={album}
                          isPlaying={currentAlbumId === album.id}
                          onAlbumClick={handleAlbumClick}
                        />
                      </div>
                    );
                  })}
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
                <button
                  className="submit_btn"
                  style={{ color: "white" }}
                  onClick={() => {
                    if (usertype === "1") {
                      window.location.replace("/pending");
                    } else {
                      window.location.replace("/profile");
                    }
                  }}
                >
                  {usertype === "1" ? "View All" : "Visit Profile"}
                </button>
              </div>
            </div>
          </div>

          {usertype === "1" ? (
            <>
              <div
                className="new_bead_add_container"
                style={{
                  backgroundColor: "rgba(0,0,0,0.32)",
                  marginTop: "10px",
                  borderRadius: "25px",
                  padding: "1rem",
                }}
              >
                {imgData == null ? (
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className="justify-center items-center"
                  >
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
                      width: "250px",
                    }}
                  >
                    <RxCross2
                      style={{
                        color: "#fff",
                        position: "absolute",
                        right: 0,
                        top: 0,
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
            </>
          ) : (
            <>
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
                  <pre
                    className="user_tag"
                    style={{ background: "transparent" }}
                  >
                    {fullnameTag}
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
                    Update Your Profile
                  </button>
                </div>
              </div>
            </>
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
      <LoadingCircle show={isLoadingClircle}/>
      
    </>
  );
}

export default Musician_Dashboard;
