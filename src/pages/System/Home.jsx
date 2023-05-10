import React, { useState } from "react";
import "../../App.css";

import Album from "../Common/Album";

import { BsSearch } from "react-icons/bs";
import { BiDownArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";

/* Slider */
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { NewFooter, NewHeader } from "../../components/system";
import {
  SampleSlider1,
  SampleSlider2,
  SampleSlider3,
  SampleSlider4,
  SampleSlider5,
  SampleSlider6,
  SampleSlider7,
  SampleSlider8,
} from "../../assets";

import Slide1 from "../../assets/images/system/Slide1.png";
import Slide2 from "../../assets/images/system/Slide2.png";
import Slide3 from "../../assets/images/system/Slide3.png";
import Slide4 from "../../assets/images/system/Slide4.png";
import Slide5 from "../../assets/images/system/Slide5.png";
import Slide6 from "../../assets/images/system/Slide6.png";

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
];

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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "1rem",
              width: "900px",
              backgroundColor: "white",
              fontSize: 20,
              padding: "2px",
              borderRadius: "25px",
              background:
                "-webkit-linear-gradient(60deg, rgba(18, 228, 90, 1), rgba(42, 174, 192, 1))",
            }}
          >
            <input
              type="text"
              style={{
                width: "781px",
                backgroundColor: "#121212",
                fontSize: 20,
                padding: "5px",
                borderRadius: "25px 0px 0px 25px",
                paddingLeft: "25px",
              }}
              placeholder="Search Here.."
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
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <aside className="headline font-nunito">TRENDING ALBUMS</aside>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto auto auto",
              gap: 25,
            }}
          >
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
            <aside className="headline font-nunito">NEW ALBUMS</aside>
          </div>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto auto auto",
              gap: 25,
            }}
          >
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
        <div
          className="my_profile_sub_container2"
          style={{ width: "86%", height: "300px", overflowY: "hidden" }}
        >
          <div
            className="slide-container"
            style={{ width: "80%", height: "300px" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: "300px",
              }}
            >
              <div className="flex flex-col m-[18px] w-[160px] relative">
                <img src={Slide6} alt="Facebook" className="w-full h-full" />
                <div className="absolute bottom-0 w-full text-center text-white mb-2 text-[20px] font-semibold">
                  Lorem ipsum
                </div>
              </div>
              <div className="flex flex-col m-[18px] w-[160px] relative">
                <img src={Slide1} alt="Facebook" className="w-full h-full" />
                <div className="absolute bottom-0 w-full text-center text-white mb-2 text-[20px] font-semibold">
                  Lorem ipsum
                </div>
              </div>
              <div className="flex flex-col m-[18px] w-[160px] relative">
                <img src={Slide2} alt="Facebook" className="w-full h-full" />
                <div className="absolute bottom-0 w-full text-center text-white mb-2 text-[20px] font-semibold">
                  Lorem ipsum
                </div>
              </div>
              <div className="flex flex-col m-[18px] w-[160px] relative">
                <img src={Slide3} alt="Facebook" className="w-full h-full" />
                <div className="absolute bottom-0 w-full text-center text-white mb-2 text-[20px] font-semibold">
                  Lorem ipsum
                </div>
              </div>
              <div className="flex flex-col m-[18px] w-[160px] relative">
                <img src={Slide4} alt="Facebook" className="w-full h-full" />
                <div className="absolute bottom-0 w-full text-center text-white mb-2 text-[20px] font-semibold">
                  Lorem ipsum
                </div>
              </div>
              <div className="flex flex-col m-[18px] w-[160px] relative">
                <img src={Slide5} alt="Facebook" className="w-full h-full" />
                <div className="absolute bottom-0 w-full text-center text-white mb-2 text-[20px] font-semibold">
                  Lorem ipsum
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <NewFooter />
    </>
  );
}

export default Home;
