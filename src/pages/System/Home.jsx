import React, { useEffect, useState } from "react";
import "../../App.css";

import Album from "../Common/Album";
import { BsSearch } from "react-icons/bs";
import { BiDownArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";
import { NewFooter, NewHeader } from "../../components/system";

import { Carousel } from "@trendyol-js/react-carousel";
import axios from "axios";
import { useContentContext } from "../../providers/ContentContext";

function Home() {
  let { url } = useContentContext();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const token = localStorage.getItem("token");
  const [categories, setCategories] = useState([]);
  const [trendingAlbums, setTrendingAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [musicians, setMusicians] = useState([]);

  const [currentAlbumId, setCurrentAlbumId] = useState(null);

  const handleAlbumClick = (albumId) => {
    setCurrentAlbumId(albumId);
  };

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    loadCategories();
    loadAlbums(0);
    loadMusicians();
  }, []);

  const loadMusicians = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      user_id: null,
      user_type_id: 2,
      status: 0,
    };

    axios
      .post(url + "/musician/all", bodyParameters, config)
      .then((response) => {
        if (response?.status === 200) {
          setMusicians(response.data.output);
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadAlbums = (category) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      user_id: localStorage.getItem("userid"),
      search_data: "",
      search_type_id: 1,
      category_id: category,
    };

    axios
      .post(url + "/customer/dashboard", bodyParameters, config)
      .then((response) => {
        if (response?.status === 200) {
          setTrendingAlbums(response.data.output.trending);
          setNewAlbums(response.data.output.whats_new);
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
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

  return (
    <>
      <NewHeader />
      <div className="home_upper_content">
        <div
          className="image_containing_wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <div>
            <input type="text" placeholder="Search Here.."></input>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#121212",
                borderRadius: "0px 25px 25px 0px",
                padding: 2,
              }}
            >
              <BsSearch
                color="white"
                fontSize={16}
                style={{ paddingRight: "3px" }}
              />
              <span
                style={{
                  fontSize: 16,
                  backgroundImage: "linear-gradient(60deg, #00C7E2, #12E45A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  paddingLeft: 5,
                  paddingRight: 5,
                }}
              >
                by Album
              </span>
              <BiDownArrow
                color="white"
                fontSize={16}
                style={{ paddingRight: "3px" }}
              />
            </div>
          </div>
        </div>

        <div className="upper_content_navbar">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p style={{ paddingRight: "10px" }}>All Categories</p>
            {isCollapsed ? (
              <BiDownArrow
                fontSize={18}
                color="#5555"
                onClick={handleToggleCollapse}
              />
            ) : (
              <BiUpArrow
                fontSize={18}
                color="#5555"
                onClick={handleToggleCollapse}
              />
            )}
          </div>
          <p
            onClick={() => {
              loadAlbums(categories[0]?.id);
            }}
          >
            {categories[0]?.title}
          </p>
          <p
            onClick={() => {
              loadAlbums(categories[1]?.id);
            }}
          >
            {categories[1]?.title}
          </p>
          <p
            onClick={() => {
              loadAlbums(categories[2]?.id);
            }}
          >
            {categories[2]?.title}
          </p>
          <p
            onClick={() => {
              loadAlbums(categories[3]?.id);
            }}
          >
            {categories[3]?.title}
          </p>
          <p
            onClick={() => {
              loadAlbums(categories[4]?.id);
            }}
          >
            {categories[4]?.title}
          </p>
          <p
            onClick={() => {
              loadAlbums(categories[5]?.id);
            }}
          >
            {categories[5]?.title}
          </p>
          <p
            onClick={() => {
              loadAlbums(categories[6]?.id);
            }}
          >
            {categories[6]?.title}
          </p>
          <p
            onClick={() => {
              loadAlbums(categories[7]?.id);
            }}
          >
            {categories[7]?.title}
          </p>
        </div>

        {isCollapsed ? (
          <div className="dropdown_category_list_container">
            <div className="dropdown_category_list_wrapper">
              {categories.forEach((category) => {
                return (
                  <>
                    <p
                      onClick={() => {
                        loadAlbums(categories.id);
                      }}
                    >
                      {category.title}
                    </p>
                  </>
                );
              })}
            </div>
            {/* <div className="sub_btn_container">
              <div className="sub_btn_wrapper">
                <div>
                  <button>Submit</button>
                </div>
              </div>
            </div> */}
          </div>
        ) : null}
      </div>
      {/* Main Content */}
      <main>
        {trendingAlbums.length === 0 ? (
          <></>
        ) : (
          <>
            <div
              className="headline_wrap_container"
              style={{ background: "#161616", border: "none" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <pre className="headline font-nunito" style={{ width: "4%" }}>
                  {" "}
                </pre>
                <pre className="headline font-nunito">TRENDING ALBUMS</pre>
                <div
                  style={{ display: "flex", flexDirection: "row" }}
                  className="dsb_ar"
                >
                  <pre
                    className="text-[#555555] cursor-pointer"
                    onClick={() => window.location.replace("/all")}
                  >
                    SEE ALL
                  </pre>
                </div>
              </div>
            </div>
            <div>
              {trendingAlbums.map((album) => {
                return (
                  <div className="home_grid gap-4">
                    <Album
                      key={album.id}
                      id={album.id}
                      cover={album.cover_image_path}
                      name={album.title}
                      slogan={album.slogan}
                      audio={album.sample_url}
                      isPlaying={currentAlbumId === album.id}
                      onAlbumClick={handleAlbumClick}
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}

        {newAlbums.length === 0 ? (
          <></>
        ) : (
          <>
            <div
              className="headline_wrap_container"
              style={{ background: "#161616", border: "none" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <pre className="headline font-nunito" style={{ width: "4%" }}>
                  {" "}
                </pre>
                <pre className="headline font-nunito">NEW ALBUMS</pre>
                <div
                  style={{ display: "flex", flexDirection: "row" }}
                  className="dsb_ar"
                >
                  <pre
                    className="text-[#555555] cursor-pointer"
                    onClick={() => window.location.replace("/all")}
                  >
                    SEE ALL
                  </pre>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <div>
                {newAlbums.map((album) => {
                  return (
                    <div className="home_grid gap-4">
                      <Album
                        key={album.id}
                        id={album.id}
                        cover={album.cover_image_path}
                        name={album.title}
                        slogan={album.slogan}
                        audio={album.sample_url}
                        isPlaying={currentAlbumId === album.id}
                        onAlbumClick={handleAlbumClick}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {musicians.length === 0 ? (
          <></>
        ) : (
          <>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "4rem",
                }}
              >
                <aside className="headline font-nunito">MUSICIANS</aside>
              </div>
            </div>

            <div className="singers_slide">
              <div className="singers_slide-container p-2">
                <Carousel show={6} slide={2} swiping={true}>
                  {musicians.map((musician) => {
                    return (
                      <div
                        className="flex flex-col relative m-2"
                        key={musician.user_id}
                      >
                        <img
                          src={musician.profile_picture}
                          alt="Facebook"
                          className="w-full h-full"
                        />
                        <div className="absolute bottom-0 w-full text-center text-white mb-2 xl:text-[20px] sm:text-[10px] font-semibold">
                          {musician.full_name}
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </>
        )}
      </main>

      <NewFooter />
    </>
  );
}

export default Home;
