import React, { useEffect, useState } from "react";
import "../../App.css";

import Album from "../Common/Album";
import { BsSearch } from "react-icons/bs";
import { NewFooter, NewHeader } from "../../components/system";
import axios from "axios";
import { useContentContext } from "../../providers/ContentContext";

function AllAlbums() {
  let { url } = useContentContext();
  const token = localStorage.getItem("token");
  const [albums, setAlbums] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredObjects = albums.filter((obj) => {
    const searchableText =
      `${obj.name} ${obj.title} ${obj.description} ${obj.slogan}`.toLowerCase();
    return searchableText.includes(searchQuery.toLowerCase());
  });

  const [currentAlbumId, setCurrentAlbumId] = useState(null);

  const handleAlbumClick = (albumId) => {
    setCurrentAlbumId(albumId);
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      user_id: localStorage.getItem("userid"),
      musician_user_id: 0,
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
            <input
              type="text"
              placeholder="Search Here.."
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            ></input>
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
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <main>
        {searchQuery !== "" ? (
          <>
            <div
              className="headline_wrap_container"
              style={{ background: "#161616", border: "none" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <pre className="headline font-nunito">
                  SEARCH RESULTS FOR “{searchQuery}’’{" "}
                </pre>
              </div>
            </div>
            <div>
              <div className="home_grid gap-4">
                {filteredObjects.map((album) => {
                  return (
                    <Album
                      key={album.id}
                      album={album}
                      isPlaying={currentAlbumId === album.id}
                      onAlbumClick={handleAlbumClick}
                    />
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <>
            {albums.length === 0 ? (
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
                      justifyContent: "center",
                    }}
                  >
                    <pre className="headline font-nunito">ALL ALBUMS</pre>
                  </div>
                </div>
                <div>
                  <div className="home_grid gap-4">
                    {albums.map((album) => {
                      return (
                        <Album
                          key={album.id}
                          album={album}
                          isPlaying={currentAlbumId === album.id}
                          onAlbumClick={handleAlbumClick}
                        />
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </main>

      <NewFooter />
    </>
  );
}

export default AllAlbums;
