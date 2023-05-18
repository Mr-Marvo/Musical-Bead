import React, { useState } from "react";
import "../../App.css";

import Album from "../Common/Album";
import { BsSearch } from "react-icons/bs";
import { BiDownArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";
import { NewFooter, NewHeader } from "../../components/system";
import {
  SampleSlider1,
  SampleSlider2,
  SampleSlider3,
  SampleSlider4,
  SampleSlider5,
  SampleSlider6,
  SampleSlider7,
} from "../../assets";

import { Carousel } from "@trendyol-js/react-carousel";

function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
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
          <p>Classical</p>
          <p>Hip Pop</p>
          <p>Reggae</p>
          <p>K-pop</p>
          <p>Heavy Metal</p>
          <p>EDM</p>
          <p>Rhythm & Blues</p>
          <p>Country Music</p>
        </div>

        {isCollapsed ? (
          <div className="dropdown_category_list_container">
            <div className="dropdown_category_list_wrapper">
              <p>Pop</p>
              <p>Jazz</p>
              <p>Blues</p>
              <p>Folk</p>
              <p>Funk</p>
              <p>Soul</p>
              <p>Indian</p>
              <p>Latin</p>
              <p>World</p>
              <p>New-Age</p>
              <p>Opera</p>
              <p>J-pop</p>
              <p>Experiment</p>
              <p>Ambient</p>
              <p>House</p>
              <p>Alternative</p>
              <p>Classical</p>
              <p>Hip Pop</p>
              <p>Reggae</p>
              <p>K-pop</p>
              <p>Heavy Metal</p>
              <p>EDM</p>
              <p>Rhythm & Blues</p>
              <p>Country Music</p>
            </div>
            <div className="sub_btn_container">
              <div className="sub_btn_wrapper">
                <div>
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {/* Main Content */}
      <main>
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
              <pre style={{ color: "#555555" }}>SEE ALL</pre>
            </div>
          </div>
        </div>
        <div>
          <div className="home_grid">
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
          </div>
        </div>
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
              <pre style={{ color: "#555555" }}>SEE ALL</pre>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <div className="home_grid">
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
          </div>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "4rem",
            }}
          >
            <aside className="headline font-nunito">TRENDING MUSICIANS</aside>
          </div>
        </div>

        <div className="singers_slide">
          <div className="singers_slide-container p-2">
            <Carousel show={6} slide={2} swiping={true}>
              <div className="flex flex-col relative m-2">
                <img src={SampleSlider1} alt="Facebook" className="w-full h-full" />
                <div className="absolute bottom-0 w-full text-center text-white mb-2 xl:text-[20px] sm:text-[10px] font-semibold">
                  Lorem ipsum
                </div>
              </div>
              <div className="flex flex-col relative m-2">
                <img src={SampleSlider2} alt="Facebook" className="w-full h-full" />
                <div className="absolute bottom-0 w-full text-center text-white mb-2 xl:text-[20px] text-[14px] font-semibold">
                  Lorem ipsum
                </div>
              </div>
              <div className="flex flex-col relative m-2">
                <img src={SampleSlider3} alt="Facebook" className="w-full h-full" />
                <div className="absolute bottom-0 w-full text-center text-white mb-2 xl:text-[20px] text-[14px] font-semibold">
                  Lorem ipsum
                </div>
              </div>
              <div className="flex flex-col relative m-2">
                <img src={SampleSlider4} alt="Facebook" className="w-full h-full" />
                <div className="absolute bottom-0 w-full text-center text-white mb-2 xl:text-[20px] text-[14px] font-semibold">
                  Lorem ipsum
                </div>
              </div>
              <div className="flex flex-col relative m-2">
                <img src={SampleSlider5} alt="Facebook" className="w-full h-full" />
                <div className="absolute bottom-0 w-full text-center text-white mb-2 xl:text-[20px] text-[14px] font-semibold">
                  Lorem ipsum
                </div>
              </div>
              <div className="flex flex-col relative m-2">
                <img src={SampleSlider6} alt="Facebook" className="w-full h-full" />
                <div className="absolute bottom-0 w-full text-center text-white mb-2 xl:text-[20px] text-[14px] font-semibold">
                  Lorem ipsum
                </div>
              </div>
              <div className="flex flex-col relative m-2">
                <img src={SampleSlider7} alt="Facebook" className="w-full h-full" />
                <div className="absolute bottom-0 w-full text-center text-white mb-2 xl:text-[20px] text-[14px] font-semibold">
                  Lorem ipsum
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </main>

      <NewFooter />
    </>
  );
}

export default Home;
