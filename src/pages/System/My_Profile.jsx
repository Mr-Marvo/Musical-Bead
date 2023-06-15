import React, { useEffect, useState } from "react";
import "../../App.css";

/* Slider */
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
/* Player */
import ReactPlayer from "react-player/lazy";
import Album from "../Common/Album3";
import { NewFooter, NewHeader } from "../../components/system";
import {
  ProfileImage,
  WFacebook,
  WInstagram,
  WTiktok,
  WTwitter,
  SampleSlider1,
  SampleSlider2,
  SampleSlider3,
  SampleSlider4,
  SampleSlider5,
  SampleSlider6,
  SampleSlider7,
  SampleSlider8,
} from "../../assets";

import { RiArrowUpSFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";
import { useContentContext } from "../../providers/ContentContext";
import axios from "axios";

const slideImages = [
  {
    url: SampleSlider1,
    caption: "Slide 1",
  },
  {
    url: SampleSlider2,
    caption: "Slide 2",
  },
  {
    url: SampleSlider3,
    caption: "Slide 3",
  },
  {
    url: SampleSlider4,
    caption: "Slide 4",
  },
  {
    url: SampleSlider5,
    caption: "Slide 5",
  },
  {
    url: SampleSlider6,
    caption: "Slide 6",
  },
  {
    url: SampleSlider7,
    caption: "Slide 7",
  },
  {
    url: SampleSlider8,
    caption: "Slide 8",
  },
];

function My_Profile() {
  let { url } = useContentContext();
  const token = localStorage.getItem("token");
  const [title, setTitle] = useState();
  const [bio, setBio] = useState(null);
  const [profile, setProfile] = useState(null);
  const [video, setVideo] = useState(null);
  const [featured, setFeatured] = useState([]);

  const [albums, setAlbums] = useState([]);
  const [fullnameTag, setFullnameTag] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  const [currentAlbumId, setCurrentAlbumId] = useState(null);

  const handleAlbumClick = (albumId) => {
    setCurrentAlbumId(albumId);
  };

  const handleClick = () => {
    setIsDisabled(!isDisabled);
  };

  useEffect(() => {
    loadProfile();
    loadMyAlbums();
  }, []);

  const loadProfile = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      user_id: localStorage.getItem("userid"),
      user_type_id: 2,
      status: 0,
    };

    axios
      .post(url + "/musician/all", bodyParameters, config)
      .then((response) => {
        console.log(response);
        if (response?.status === 200) {
          setFullnameTag(response.data.output[0].full_name);
          setTitle(response.data.output[0].short_description);
          setBio(response.data.output[0].description);
          setProfile(response.data.output[0].profile_picture);
          setVideo(response.data.output[0].videos[0].featured_video);
          setFeatured(response.data.output[0].images);
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadMyAlbums = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      user_id: localStorage.getItem("userid"),
      musician_user_id: localStorage.getItem("userid"),
      status: 2,
    };

    axios
      .post(url + "/album/all", bodyParameters, config)
      .then((response) => {
        if (response?.status === 200) {
          setAlbums(response.data.output.albums);
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

      {/* Body Content */}
      <main className="font-nunito text-white">
        <div className="my_profile_container">
          <div className="my_profile_sub_container1">
            <div className="sub_1">
              <div className="img_container3" style={{width:'205px',height:'205px',borderRadius:'100px'}}>
                <div style={{width:'200px',height:'200px',borderRadius:'100px'}}>
                  <img src={profile === null ? ProfileImage : profile} alt="User" style={{width:'200px',height:'200px',borderRadius:'100px'}} />
                </div>
              </div>
            </div>
            <div className="sub_2">
              <div className="text-[24px] font-bold ml-1">{fullnameTag}</div>
              <input
                type="text"
                disabled={isDisabled}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="xl:text-[20px] sm:text-[16px] font-medium"
              />
              <br />
              <textarea
                type="text"
                disabled={isDisabled}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="text-[16px] font-normal mt-4"
              />
              {/* <div className="flex flex-row mt-4 gap-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <img src={WFacebook} alt="Facebook" className="w-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={WInstagram} alt="Instergram" className="w-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <img src={WTwitter} alt="Twitter" className="w-6" />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                  <img src={WTiktok} alt="Tiktok" className="w-6" />
                </a>
              </div> */}
            </div>
            <div className="sub_3">
              <ReactPlayer
                url={video}
                width="100%"
                height="100%"
                controls={true}
                volume={1}
                muted={false}
                playing={true}
              />
            </div>
          </div>

          <div
            className="my_profile_sub_container2"
            style={{ height: "200px", overflowY: "hidden" }}
          >
            <div
              className="slide-container"
              style={{ width: "90%", height: "200px" }}
            >
              <Slide>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "200px",
                    }}
                  >
                    {featured.length === 0 ? (
                      <></>
                    ) : (
                      <>
                        {featured.map((image, x) => {
                          return (
                            <img
                              src={image.featured_image}
                              alt={x + 1}
                              className="w-25"
                              style={{ margin: "5px" }}
                            />
                          );
                        })}
                      </>
                    )}
                  </div>
                </div>
              </Slide>
            </div>
          </div>

          <div className="my_profile_sub_container3">
            {isDisabled ? (
              <button
                type="button"
                onClick={handleClick}
                className="edit_profile_btn"
              >
                Edit Profile
              </button>
            ) : (
              <button
                type="button"
                onClick={handleClick}
                className="save_profile_btn"
              >
                Save Profile
              </button>
            )}
          </div>

          <div className="my_profile_sub_container4">
            <div>
              <pre className="headline_left">{} Albums</pre>
              {/* <div style={{ display: "flex", flexDirection: "row" }}>
                <pre style={{ color: "#555555", marginRight: "10px" }}>
                  Sort By Popularity
                </pre>
                {isCollapsed ? (
                  <RiArrowUpSFill
                    fontSize={20}
                    color="#555555"
                    onClick={handleToggleCollapse}
                  />
                ) : (
                  <RiArrowDownSFill
                    fontSize={20}
                    color="#555555"
                    onClick={handleToggleCollapse}
                  />
                )}
                <pre style={{ color: "#555555" }}>All Albums</pre>
                {isCollapsed2 ? (
                  <RiArrowUpSFill
                    className="RiArrowUpSFill"
                    fontSize={20}
                    color="#555555"
                    onClick={handleToggleCollapse2}
                  />
                ) : (
                  <RiArrowDownSFill
                    className="RiArrowUpSFill"
                    fontSize={20}
                    color="#555555"
                    onClick={handleToggleCollapse2}
                  />
                )}
              </div> */}
            </div>

            {albums.length === 0 ? (
              <div className="w-full text-center">No Albums</div>
            ) : (
              <>
                <div className="album_sub_wrap4">
                  {albums.map((album) => {
                    <Album
                      key={album.id}
                      id={album.id}
                      cover={album.cover_image_path}
                      name={album.title}
                      slogan={album.slogan}
                      audio={album.sample_url}
                      isPlaying={currentAlbumId === album.id}
                      onAlbumClick={handleAlbumClick}
                    />;
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      <NewFooter />
    </>
  );
}

export default My_Profile;
