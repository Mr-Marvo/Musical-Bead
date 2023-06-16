import React, { useEffect, useState } from "react";
import "../../App.css";

import { BsSearch } from "react-icons/bs";
import { NewFooter, NewHeader } from "../../components/system";
import axios from "axios";
import { useContentContext } from "../../providers/ContentContext";
import Bead from "../Common/Bead";
import DashBead from "../Common/DashBead";

function Beads() {
  let { url } = useContentContext();
  const token = localStorage.getItem("token");
  const [beads, setBeads] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredObjects = beads?.filter((obj) => {
    const searchableText =
      `${obj.name} ${obj.title} ${obj.description} ${obj.slogan}`.toLowerCase();
    return searchableText.includes(searchQuery.toLowerCase());
  });

  useEffect(() => {
    loadBeads();
  }, []);

  const loadBeads = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      user_id: 0,
      bead_id: 0,
      status: -2,
    };

    axios
      .post(url + "/bead/all", bodyParameters, config)
      .then((response) => {
        console.log(response);
        if (response?.status === 200) {
          setBeads(response.data.output);
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
                {filteredObjects.map((bead) => {
                  return <Bead bead={bead} />;
                })}
              </div>
            </div>
          </>
        ) : (
          <>
            {beads.length === 0 ? (
              <label className="text-white text-xl font-semibold">
                No Beads
              </label>
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
                    <pre className="headline font-nunito">ALL BEADS</pre>
                  </div>
                </div>
                <div>
                  <div className="home_grid gap-4">
                    {beads.map((bead) => {
                      return <DashBead bead={bead} />;
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

export default Beads;
