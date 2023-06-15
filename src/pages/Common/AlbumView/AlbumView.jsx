import React, { useEffect, useState } from "react";
import "./AlbumView.css";
import { NewHeader, NewFooter } from "../../../components/system";
import {
  DefaultAlbum,
  EqualizerLarge,
  PauseButtonLarge,
  PlayButtonLarge,
  TagTop,
} from "../../../assets";

import img1 from "../../../assets/images/system/Rectangle 139.png";
import img2 from "../../../assets/images/system/Rectangle 140.png";
import img3 from "../../../assets/images/system/Rectangle 141.png";
import img4 from "../../../assets/images/system/Rectangle 142.png";
import img5 from "../../../assets/images/system/Rectangle 143.png";
import img6 from "../../../assets/images/system/Rectangle 144.png";
import btn_img from "../../../assets/images/system/Group 72.png";
import SingerImage from "../../../assets/images/system/profile.png";

import { useLocation, useNavigate, useParams } from "react-router";
import { useRef } from "react";
import axios from "axios";
import { useContentContext } from "../../../providers/ContentContext";

const LongText = ({ text, maxLength }) => {
  const truncatedText =
    text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

  return <div>{truncatedText}</div>;
};

function AlbumView() {
  let params = useParams();
  const audioRef = useRef(null);
  const [fullnameTag, setFullnameTag] = useState("Olivia Fernandez");
  const [isPlaying, setIsPlaying] = useState(false);

  const usertype = localStorage.getItem("usertype");
  let { url } = useContentContext();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState();

  const { state } = useLocation();
  const { album } = state;

  useEffect(() => {
    getMusician();
    viewAlbum(params.album_id);
  },[]);

  const getMusician = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const data = {
      user_id: album.musician_user_id,
      user_type_id: 2,
      status: 0,
    };

    axios
      .post(url + "/musician/all", data, config)
      .then((response) => {
        if (response?.status === 200) {
          console.log(response.data.output[0]);
          setFullnameTag(response.data.output[0].full_name);
          setProfileImage(response.data.output[0].profile_picture);
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  const viewAlbum = (id) => {};

  const [num, setNum] = useState(0);
  const handlePlus = () => {
    if (num + 1 < 11) {
      setNum(num + 1);
    } else {
      setNum(10);
    }
  };
  const handleMinus = () => {
    if (num - 1 < 0) {
      setNum(0);
    } else {
      setNum(num - 1);
    }
  };

  const handlePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  const gotProfile = () => {
    navigate("/profile-view", { state: { id: album.musician_user_id } });
  };

  const approve = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const data = {
      updated_by: album.musician_user_id,
      album_id: album.id,
      status: 2,
    };

    axios
      .post(url + "/album/status", data, config)
      .then((response) => {
        if (response?.status === 200) {
          window.location.replace('/pending');
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reject = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const data = {
      updated_by: album.musician_user_id,
      album_id: album.id,
      status: -1,
    };

    axios
      .post(url + "/album/status", data, config)
      .then((response) => {
        if (response?.status === 200) {
          window.location.replace('/pending');
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <NewHeader />
      <main>
        <div className="album_view_main_container">
          <div className="album_view_left_container">
            <button className="hippop_btn font-nunito">Hip hop</button>
            <div className="album_view_container">
              <div className="flex flex-row gap-3 justify-center items-center my-2">
                <div className="flex flex-col bg-[#000000 41%] w-fit h-fit rounded-xl p-4 relative">
                  <div className="flex">
                    <img
                      src={album.cover_image_path}
                      alt="default album"
                      className="w-[350px] rounded-3xl"
                    />
                    <div className="absolute right-4 bottom-4 z-10">
                      <div className="flex flex-col">
                        <img
                          src={TagTop}
                          className="3xl:w-[200px] w-[120px]"
                          alt="Bead"
                        />
                        <div className="flex bg-tag-bottom bg-cover bg-center w-[120px] h-[112px] 3xl:w-[200px] 3xl:h-[190px] justify-center items-center">
                          <img
                            src={album.cover_image_path}
                            className="flex 3xl:w-[135px] w-[80px] h-[80px] rounded-full mb-2 mr-[2px] 3xl:mb-4 3xl:mr-1"
                            alt="Bead"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <audio ref={audioRef} src={album.sample_url} />
                  <div className="flex text-[24px] font-normal text-[#BA55C2] mt-1">
                    <LongText text={album.title} maxLength={20} />
                  </div>
                  <div className="flex flex-row gap-4 mt-2">
                    <div className="flex">
                      <img
                        src={EqualizerLarge}
                        alt="equalizer"
                        className="w-8"
                      />
                    </div>
                    <div className="flex">
                      <img
                        src={isPlaying ? PauseButtonLarge : PlayButtonLarge}
                        alt="playbutton"
                        className="w-8"
                        onClick={(e) => {
                          handlePlay();
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <span className="songs_list font-nunito">Songs List</span>

              <div className="songs_container">
                <div className="songs_wrap">
                  <img src={img1} alt="song_icon" width="60px" />
                  <span>Testing Audio 1</span>
                </div>
                <div className="songs_wrap">
                  <img src={img2} alt="song_icon" width="60px" />
                  <span>Testing Audio 2</span>
                </div>
                <div className="songs_wrap">
                  <img src={img3} alt="song_icon" width="60px" />
                  <span>Testing Audio 3</span>
                </div>
                <div className="songs_wrap">
                  <img src={img4} alt="song_icon" width="60px" />
                  <span>Testing Audio 4</span>
                </div>
                <div className="songs_wrap">
                  <img src={img5} alt="song_icon" width="60px" />
                  <span>Testing Audio 5</span>
                </div>
                <div className="songs_wrap">
                  <img src={img6} alt="song_icon" width="60px" />
                  <span>Testing Audio 6</span>
                </div>
              </div>
            </div>
          </div>
          <div className="album_view_middle_container">
            <span className="album_heading font-nunito">Album</span>
            <p className="album_sub_heading font-nunito">{album.title}</p>
            <p>{album.description}</p>
            {usertype !== "3" ? (
              <></>
            ) : (
              <>
                <span className="album_heading font-nunito">
                  Choose Bead Color
                </span>
                <div className="color_container">
                  <label className="container">
                    <input type="radio" checked="checked" name="radio" />
                    <span
                      className="checkmark"
                      style={{ backgroundColor: "red" }}
                    ></span>
                  </label>
                  <label className="container">
                    <input type="radio" name="radio" />
                    <span
                      className="checkmark"
                      style={{ backgroundColor: "blue" }}
                    ></span>
                  </label>
                  <label className="container">
                    <input type="radio" name="radio" />
                    <span
                      className="checkmark"
                      style={{ backgroundColor: "green" }}
                    ></span>
                  </label>
                  <label className="container">
                    <input type="radio" name="radio" />
                    <span
                      className="checkmark"
                      style={{ backgroundColor: "yellow" }}
                    ></span>
                  </label>
                </div>
                <div className="wrapper">
                  <button
                    className="plusminus"
                    onClick={handleMinus}
                    style={{
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                    }}
                  >
                    -
                  </button>
                  <input type="number" className="num" value={num} />
                  <button
                    className="plusminus"
                    onClick={handlePlus}
                    style={{
                      borderTopRightRadius: "25px",
                      borderBottomRightRadius: "25px",
                    }}
                  >
                    +
                  </button>
                </div>

                <span
                  className="font-nunito"
                  style={{
                    color: "#fff",
                    fontWeight: "400",
                    margin: "0",
                    marginTop: "30px",
                    fontSize: "24px",
                  }}
                >
                  Shipping:
                </span>
                <span
                  className="font-nunito"
                  style={{
                    color: "#fff",
                    fontWeight: "400",
                    margin: "0",
                    marginBottom: "30px",
                    fontSize: "24px",
                  }}
                >
                  Free Standard Shipping
                </span>
              </>
            )}
            <span
              className="font-nunito"
              style={{
                color: "#fff",
                fontWeight: "700",
                margin: "0",
                marginBottom: "30px",
                marginTop: "20px",
                fontSize: "36px",
              }}
            >
              US ${album.price}
            </span>

            {usertype !== "3" ? (
              <></>
            ) : (
              <>
                <button className="add_cart_btn">
                  <img src={btn_img} alt="btn-img" width="200px" />
                </button>
              </>
            )}

            {usertype === "1" ? (
              <div className="flex flex-row gap-4">
                <button
                  className="p-1 px-4 bg-blue-400 rounded-lg"
                  onClick={approve}
                >
                  Approve
                </button>
                <button
                  className="p-1 px-4 bg-red-400 rounded-lg"
                  onClick={reject}
                >
                  Reject
                </button>
              </div>
            ) : (
              <></>
            )}

          </div>
          
          <div className="album_view_right_container">
            <div className="meet_musician_container">
              <span
                style={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: "24px",
                  textAlign: "center",
                }}
              >
                Meet the Muscian
              </span>
              <div className="img_container3" style={{width:'190px',height:'190px'}}>
                <div style={{width:'180px',height:'180px'}}>
                  <img
                    src={profileImage}
                    alt="Singer"
                    className="rounded-full"
                    style={{width:'180px',height:'180px'}}
                  />
                </div>
              </div>
              <div className="text-[24px] font-bold ml-1 text-white mt-5">
                {fullnameTag}
              </div>

              <button
                className="meet_singer_btn font-nunito"
                onClick={gotProfile}
              >
                See All Albums
              </button>
              <button
                className="meet_singer_btn font-nunito"
                onClick={gotProfile}
              >
                Visit Profile
              </button>
            </div>
          </div>
        </div>
      </main>
      <NewFooter />
    </>
  );
}

export default AlbumView;
