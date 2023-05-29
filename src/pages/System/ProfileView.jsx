import React, { useEffect, useState } from "react";
import "../../App.css";

/* Slider */
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
/* Player */
import ReactPlayer from "react-player/lazy";
import Album from "../Common/Album";
import { NewFooter, NewHeader } from "../../components/system";
import {
  ProfileImage
} from "../../assets";
import { useContentContext } from "../../providers/ContentContext";
import axios from "axios";
import { useLocation } from "react-router";

function ProfileView() {
  let { url } = useContentContext();
  const token = localStorage.getItem("token");

  const [title, setTitle] = useState("Singer & Song Writer");
  const [bio, setBio] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora atque nihil, dignissimos facilis laboriosam cum placeat ipsum eveniet quo iure, cupiditate accusantium, iusto quisquam aliquid aut amet quos magni adipisci!"
  );
  const [fullnameTag, setFullnameTag] = useState("Olivia Fernandez");
  const [profile, setProfile] = useState(null);
  const [video, setVideo] = useState(
    "https://www.youtube.com/watch?v=af0rV6dli_o&pp=ygUMZWRnYXIgd2ludGVy"
  );
  const [featured, setFeatured] = useState([]);

  const { state } = useLocation();
  const { id } = state;

  const [albums, setAlbums] = useState([]);
  const [currentAlbumId, setCurrentAlbumId] = useState(null);

  const handleAlbumClick = (albumId) => {
    setCurrentAlbumId(albumId);
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
      user_id: id,
      user_type_id: 2,
      status: 0,
    };

    axios
      .post(url + "/musician/all", bodyParameters, config)
      .then((response) => {
        console.log(response.data.output[0]);
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
      musician_user_id: id,
      status: 2,
    };

    axios
      .post(url + "/album/all", bodyParameters, config)
      .then((response) => {
        console.log(response);
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
              <div className="img_container3">
                <div>
                  <img
                    src={profile === null ? ProfileImage : profile}
                    alt="User"
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="sub_2">
              <div className="text-[24px] font-bold ml-1">{fullnameTag}</div>
              <input
                type="text"
                disabled={true}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="xl:text-[20px] sm:text-[16px] font-medium"
              />
              <br />
              <textarea
                type="text"
                disabled={true}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="text-[16px] font-normal mt-4"
              />
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

          <div className="my_profile_sub_container4">
            <div>
              <pre className="headline_left">{albums.length} Albums</pre>
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
                    return (
                      <>
                        <Album
                          key={album.id}
                          album={album}
                          isPlaying={currentAlbumId === album.id}
                          onAlbumClick={handleAlbumClick}
                        />
                      </>
                    );
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

export default ProfileView;
