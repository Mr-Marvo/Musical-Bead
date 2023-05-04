import React, { useState } from "react";
import "../../App.css";

import Image_Slide1 from "../../assets/images/system/Rectangle 86.png";
import Image_Slide2 from "../../assets/images/system/Rectangle 87.png";
import Image_Slide3 from "../../assets/images/system/Rectangle 88.png";
import Image_Slide4 from "../../assets/images/system/Rectangle 89.png";
import Image_Slide5 from "../../assets/images/system/Rectangle 90.png";
import Image_Slide6 from "../../assets/images/system/Rectangle 91.png";
import Image_Slide7 from "../../assets/images/system/Rectangle 98.png";
import Image_Slide8 from "../../assets/images/system/Rectangle 99.png";

/* Slider */
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
/* Player */
import ReactPlayer from "react-player/lazy";
import Album from "../Common/Album";
import { NewFooter, NewHeader } from "../../components/system";
import {
  ProfileImage,
  WFacebook,
  WInstagram,
  WTiktok,
  WTwitter,
} from "../../assets";

const slideImages = [
  {
    url: Image_Slide1,
    caption: "Slide 1",
  },
  {
    url: Image_Slide2,
    caption: "Slide 2",
  },
  {
    url: Image_Slide3,
    caption: "Slide 3",
  },
  {
    url: Image_Slide4,
    caption: "Slide 4",
  },
  {
    url: Image_Slide5,
    caption: "Slide 5",
  },
  {
    url: Image_Slide6,
    caption: "Slide 6",
  },
  {
    url: Image_Slide7,
    caption: "Slide 7",
  },
  {
    url: Image_Slide8,
    caption: "Slide 8",
  },
];

function My_Profile() {
  const [title, setTitle] = useState("Singer & Song Writer");
  const [bio, setBio] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora atque nihil, dignissimos facilis laboriosam cum placeat ipsum eveniet quo iure, cupiditate accusantium, iusto quisquam aliquid aut amet quos magni adipisci!"
  );

  const [fullnameTag, setFullnameTag] = useState("Olivia Fernandez");

  const [isDisabled, setIsDisabled] = useState(true);

  const handleClick = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <>
      <NewHeader />

      {/* Body Content */}
      <main className="font-nunito text-white">
        <div className="my_profile_container max-w-[1440px]">
          <div className="my_profile_sub_container1">
            <div className="sub_1">
              <div className="img_container3">
                <div>
                  <img src={ProfileImage} alt="User" />
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
                className="text-[20px] font-medium"
              />
              <br />
              <textarea
                type="text"
                disabled={isDisabled}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="text-[16px] font-normal mt-4"
              />
              <div className="flex flex-row mt-4 gap-4">
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
              </div>
            </div>
            <div className="sub_3">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=af0rV6dli_o&pp=ygUMZWRnYXIgd2ludGVy"
                width="360px"
                height="240px"
                controls={true}
                volume={1}
                muted={false}
                playing={true}
              />
            </div>
          </div>

          <div
            className="my_profile_sub_container2"
            style={{ width: "100%", height: "200px", overflowY: "hidden" }}
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
                    <img
                      src={Image_Slide1}
                      alt="Facebook"
                      className="w-25"
                      style={{ margin: "5px" }}
                    />
                    <img
                      src={Image_Slide2}
                      alt="Facebook"
                      className="w-25"
                      style={{ margin: "5px" }}
                    />
                    <img
                      src={Image_Slide3}
                      alt="Facebook"
                      className="w-25"
                      style={{ margin: "5px" }}
                    />
                    <img
                      src={Image_Slide4}
                      alt="Facebook"
                      className="w-25"
                      style={{ margin: "5px" }}
                    />
                    <img
                      src={Image_Slide5}
                      alt="Facebook"
                      className="w-25"
                      style={{ margin: "5px" }}
                    />
                    <img
                      src={Image_Slide6}
                      alt="Facebook"
                      className="w-25"
                      style={{ margin: "5px" }}
                    />
                    <img
                      src={Image_Slide7}
                      alt="Facebook"
                      className="w-25"
                      style={{ margin: "5px" }}
                    />
                    <img
                      src={Image_Slide8}
                      alt="Facebook"
                      className="w-25"
                      style={{ margin: "5px" }}
                    />
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

          <div
            className="my_profile_sub_container4"
            style={{
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
              borderTopLeftRadius: "25px",
              borderTopRightRadius: "25px",
            }}
          >
            <pre className="headline_left">Olivia's Albums</pre>
          </div>
          <div
            className="album_wrap_container"
            style={{
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
            }}
          >
            <div className="album_sub_wrap3">
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
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
            </div>
          </div>
        </div>
      </main>

      <NewFooter />
    </>
  );
}

export default My_Profile;
