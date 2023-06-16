import React, { useEffect, useState } from "react";
import "./AlbumView.css";
import { NewHeader, NewFooter } from "../../../components/system";
import {
  DefaultAlbum,
  EqualizerLarge,
  PauseButtonLarge,
  PlayButtonLarge,
} from "../../../assets";

import img1 from "../../../assets/images/system/Rectangle 139.png";
import img2 from "../../../assets/images/system/Rectangle 140.png";
import img3 from "../../../assets/images/system/Rectangle 141.png";
import img4 from "../../../assets/images/system/Rectangle 142.png";
import img5 from "../../../assets/images/system/Rectangle 143.png";
import img6 from "../../../assets/images/system/Rectangle 144.png";
import btn_img from "../../../assets/images/system/Group 72.png";
import { useLocation, useNavigate, useParams } from "react-router";
import { useRef } from "react";
import axios from "axios";
import { useContentContext } from "../../../providers/ContentContext";
import SuccessAlert from "../../../components/Common/SuccessAlert";
import LoadingCircle from "../../../components/Common/LoadingCircle";
import ErrorAlert from "../../../components/Common/ErrorAlert";

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

  const [isLoadingClircle, setIsLoadingCircle] = useState(false);
  const [successTitle, setSuccessTitle] = useState();
  const [successShow, setSuccessShow] = useState(false);
  const [errorTitle, setErrorTitle] = useState();
  const [errorShow, setErrorShow] = useState(false);

  const successClose = () => {
    setSuccessShow(false);
  };
  const errorClose = () => {
    setErrorShow(false);
  };

  useEffect(() => {
    getMusician();
    viewAlbum(params.album_id);
  }, []);

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
    console.log(album);
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  const viewAlbum = (id) => {};

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
          window.location.replace("/pending");
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
          window.location.replace("/pending");
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addToCart = () => {
    setIsLoadingCircle(true);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      user_id: localStorage.getItem("userid"),
      bead_id: 0,
      album_id: album.id,
      cart_type_id: 1,
      qty: 1,
    };

    axios
      .post(url + "/cart/add", bodyParameters, config)
      .then((response) => {
        if (response?.status === 200) {
          setSuccessTitle("Album Added!");
          setSuccessShow(true);
        } else {
          console.log(response);
          setErrorTitle("Qty not available!");
          setErrorShow(true);
        }
        setIsLoadingCircle(false);
      })
      .catch((error) => {
        setIsLoadingCircle(false);
        console.log(error);
        setErrorTitle("Qty not available!");
        setErrorShow(true);
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
                      src={
                        album.cover_image_path !== null
                          ? album.cover_image_path
                          : DefaultAlbum
                      }
                      alt="default album"
                      className="w-[350px] rounded-3xl"
                    />
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
                {album.songs?.map((music) => {
                  return (
                    <div className="songs_wrap">
                      <img
                        src={music.image_file_path}
                        alt="song_icon"
                        width="60px"
                      />
                      <span>{music.title}</span>
                    </div>
                  );
                })}
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
                {/* <span className="album_heading font-nunito">
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
                </div> */}
                {/* <div className="wrapper mt-16">
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
                </div> */}

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
                  <img
                    src={btn_img}
                    alt="btn-img"
                    width="200px"
                    onClick={addToCart}
                  />
                </button>
              </>
            )}

            {album.status === 2 ? (
              <></>
            ) : (
              <>
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
              </>
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
              <div
                className="img_container3"
                style={{ width: "190px", height: "190px" }}
              >
                <div style={{ width: "180px", height: "180px" }}>
                  <img
                    src={profileImage}
                    alt="Singer"
                    className="rounded-full"
                    style={{ width: "180px", height: "180px" }}
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
      <LoadingCircle show={isLoadingClircle} />
      <SuccessAlert
        show={successShow}
        message={successTitle}
        onClose={successClose}
      />
      <ErrorAlert show={errorShow} message={errorTitle} onClose={errorClose} />
    </>
  );
}

export default AlbumView;
