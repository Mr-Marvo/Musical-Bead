import React, { useState, useRef, useEffect } from "react";
import "../../App.css";

import { RiArrowUpSFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";
import { NewFooter, NewHeader } from "../../components/system";
import { RxCross2 } from "react-icons/rx";
import { ImageIcon } from "../../assets";
import FlatList from "../../components/Common/FlatList";
import { useContentContext } from "../../providers/ContentContext";
import axios from "axios";

function New_Musician_Dashboard() {
  const [categories, setCategories] = useState([]);
  const [state, setState] = useState(0);
  const [albumID, setAlbumID] = useState(null);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      key: "value",
    };

    axios
      .post(url + "/auth/user", bodyParameters, config)
      .then((response) => {
        if (response?.status === 200) {
          if (response.data.output[0].user_type_id === 2) {
            if (response.data.output[0].album_count !== 0) {
              // window.location.replace("/dashboard");
            }
          } else {
            // window.location.replace("/dashboard");
          }
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    loadCategories();
  }, []);

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
        console.log(response);
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

  let { url } = useContentContext();
  const token = localStorage.getItem("token");

  /* UseRefs ... this is to hide photo inputs and give that ability to respective buttons */
  const fileInputRef = useRef(null);
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const [selectedSong, setSelectedSong] = useState(null);
  /* This is to handle photo upload hidden function */
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleButtonClick1 = () => {
    fileInputRef1.current.click();
  };
  const handleButtonClickSong = () => {
    fileInputRef2.current.click();
  };

  /* This is to take the photos and keep the previewing */
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [picture1, setPicture1] = useState(null);
  const [imgData1, setImgData1] = useState(null);

  /* This is to handle photo upload again again */
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
  const fullname = localStorage.getItem("username");
  const [title, setTitle] = useState("");
  const [titleE, setTitleE] = useState("");
  const [bio, setBio] = useState();
  const [bioE, setBioE] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [albumNameE, setAlbumNameE] = useState("");
  const [category, setCategory] = useState(1);
  const [categoryE, setCategoryE] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionE, setDescriptionE] = useState("");

  const [price, setPrice] = useState(0);

  const [loading, setLoading] = useState(false);

  /* This is to open add song after sumbit button clicked */
  const [isSubmit, setIsSubmit] = useState(false);
  /* This method handle all inputs adn save them in DB */

  const submitNewMusicianForReview = () => {
    setLoading(true);

    if (state === 0) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      let data1 = new FormData();
      data1.append("user_id", localStorage.getItem("userid"));
      data1.append("file_extension", picture?.name.split("."[1]));
      data1.append("updated_by", localStorage.getItem("userid"));
      data1.append("profile_picture", picture);
      data1.append("type", 0);

      axios
        .post(url + "/user/image", data1, config)
        .then((response) => {
          console.log(response);
          if (response?.status === 200) {
          } else {
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });

      let data2 = new FormData();
      data2.append("user_id", localStorage.getItem("userid"));
      data2.append("short_description", title);
      data2.append("description", bio);
      data2.append("title", null);
      data2.append("file_extension1", null);
      data2.append("file_extension2", null);
      data2.append("file_extension3", null);
      data2.append("created_by", localStorage.getItem("userid"));
      data2.append("image1", null);
      data2.append("image2", null);
      data2.append("image3", null);

      axios
        .post(url + "/musician/manage", data2, config)
        .then((response) => {
          console.log(response);
          if (response?.status === 200) {
          } else {
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });

      let data3 = new FormData();
      data3.append("musician_user_id", localStorage.getItem("userid"));
      data3.append("category_id", category);
      data3.append("title", albumName);
      data3.append("album_amount", price);
      data3.append("slogan", null);
      data3.append("description", description);
      data3.append("image_extension", picture1?.name.split(".")[1]);
      data3.append("created_by", localStorage.getItem("userid"));
      data3.append("cover_image", picture1);
      data3.append("sample_audio", selectedSong);
      data3.append("file_extension", selectedSong?.name.split(".")[1]);

      axios
        .post(url + "/album/add", data3, config)
        .then((response) => {
          console.log(response);
          if (response?.status === 200) {
            setAlbumID(response.data.output.id);
            setIsSubmit(!isSubmit);
            setState(1);
            setLoading(false);
          } else {
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });

      validate();
    } else {
      window.location.replace("/dashboard");
    }
  };

  const validate = () => {
    if (title === "") {
      setTitleE("* required");
    } else {
      setTitleE("");
    }
    if (!/^[a-z A-Z]*$/.test(title)) {
      setTitleE("* Please Enter Only Letters");
    }

    if (bio === "") {
      setBioE("* required");
    } else {
      setBioE("");
    }
    if (!/^[a-z A-Z]*$/.test(bio)) {
      setBioE("* Please Enter Only Letters");
    }

    if (albumName === "") {
      setAlbumNameE("* required");
    } else {
      setAlbumNameE("");
    }
    if (!/^[a-z A-Z]*$/.test(albumName)) {
      setAlbumNameE("* Please Enter Only Letters");
    }

    if (category === "") {
      setCategoryE("* required");
    } else {
      setCategoryE("");
    }

    if (description === "") {
      setDescriptionE("* required");
    } else {
      setDescriptionE("");
    }
    if (!/^[a-z A-Z]*$/.test(description)) {
      setDescriptionE("* Please Enter Only Letters");
    }
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
                {imgData == null ? (
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      onClick={handleButtonClick}
                      className="img_container1"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
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
                        right: 50,
                        top: 50,
                      }}
                      onClick={() => {
                        setImgData(null);
                      }}
                    />
                    <div
                      className="img_container1"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <img
                        className="playerProfilePic_home_tile"
                        src={imgData}
                        style={{
                          borderRadius: "100px",
                          width: "200px",
                          height: "200px",
                        }}
                        alt="profile pic"
                      />
                    </div>
                  </div>
                )}

                <div className="data_container">
                  <span
                    className="font-nunito text-white"
                    style={{ fontSize: "24px" }}
                  >
                    {fullname}
                  </span>
                  <div>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      onKeyUp={validate}
                      placeholder="Title"
                      className="text-white"
                    ></input>
                    {titleE && <div className="error">{titleE}</div>}
                    <textarea
                      className="text-white"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      onKeyUp={validate}
                      placeholder="Bio"
                    ></textarea>
                    {bioE && <div className="error">{bioE}</div>}
                  </div>
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
                  {imgData1 == null ? (
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <p
                        style={{
                          color: "#ffff",
                          marginBottom: "-70px",
                          marginTop: "50px",
                        }}
                      >
                        Mixtape/Album Cover
                      </p>
                      <button
                        onClick={handleButtonClick1}
                        className="img_container2"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          marginTop: 70,
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
                          right: 25,
                          top: 50,
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
                          marginTop: 70,
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
                          alt="alubm cover"
                        />
                      </div>
                    </div>
                  )}
                  <div className="data_container data_container2">
                    <div>
                      <label className="font-nunito text-white">
                        Album Name
                      </label>
                      <input
                        type="text"
                        className="album_name text-white"
                        value={albumName}
                        onChange={(e) => setAlbumName(e.target.value)}
                        onKeyUp={validate}
                      ></input>
                      {albumNameE && <div className="error">{albumNameE}</div>}
                      <div>
                        <div>
                          <label className="font-nunito text-white">
                            Category
                          </label>
                          <select
                            type="text"
                            className="text-white"
                            onChange={(e) => {
                              console.log(e.target.value);
                              setCategory(e.target.value);
                            }}
                            style={{ marginTop: "-10px" }}
                          >
                            {categories.map((category) => {
                              return (
                                <option id={category.id} value={category.id}>
                                  {category.title}
                                </option>
                              );
                            })}
                          </select>
                          {categoryE && (
                            <div className="error">{categoryE}</div>
                          )}
                        </div>

                        <div>
                          <label className="font-nunito text-white">
                            Artist
                          </label>
                          <input
                            type="text"
                            className="text-white"
                            value={fullname}
                            style={{ marginTop: "-10px" }}
                            disabled
                          ></input>
                        </div>
                      </div>
                      <label className="font-nunito text-white">
                        Description
                      </label>
                      <textarea
                        className="text-white"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        onKeyUp={validate}
                      ></textarea>
                      {descriptionE && (
                        <div className="error">{descriptionE}</div>
                      )}

                      <div>
                        <div>
                          <label className="font-nunito text-white">
                            Price $
                          </label>
                          <input
                            type="number"
                            className="text-white"
                            value={price}
                            style={{ marginTop: "-10px" }}
                            onChange={(e) => {
                              setPrice(e.target.value);
                            }}
                          />
                        </div>

                        <div>
                          <label className="font-nunito text-white">
                            Sample Audio
                          </label>
                          <button
                            onClick={handleButtonClickSong}
                            style={{
                              height: "40px",
                              width: "200px",
                              borderRadius: "10px",
                              background: "#313131",
                              color: "#fff",
                              marginTop: "-10px",
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
                            <span className="text-white">
                              {selectedSong.name}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {isSubmit && (
                  <div>
                    <p
                      style={{ color: "white" }}
                      className="add_song_heading_wrap"
                    >
                      Add Songs <span>(0)</span>
                    </p>
                    <div className="Flatlist_container1">
                      <FlatList albumID={albumID} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <button
          className="review_submit_btn font-nunito"
          style={{ color: "white", fontWeight: "700" }}
          onClick={submitNewMusicianForReview}
          disabled={false}
        >
          {state === 0 ? "Submit For Review" : "Go to Dashboard"}
        </button>
      </main>

      <NewFooter />
    </>
  );
}

export default New_Musician_Dashboard;
