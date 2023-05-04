import React, { useState } from "react";
import "../../App.css";

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
  SampleSlider1,
  SampleSlider2,
  SampleSlider3,
  SampleSlider4,
  SampleSlider5,
  SampleSlider6,
  SampleSlider7,
  SampleSlider8
} from "../../assets";

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
        <div className="my_profile_container">
          <div className="my_profile_sub_container1 max-w-[1440px]">
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
                      src={SampleSlider1}
                      alt="Facebook"
                      className="w-25"
                      style={{ margin: "5px" }}
                    />
                    <img
                      src={SampleSlider2}
                      alt="Facebook"
                      className="w-25"
                      style={{ margin: "5px" }}
                    />
                    <img
                      src={SampleSlider3}
                      alt="Facebook"
                      className="w-25"
                      style={{ margin: "5px" }}
                    />
                    <img
                      src={SampleSlider4}
                      alt="Facebook"
                      className="w-25"
                      style={{ margin: "5px" }}
                    />
                    <img
                      src={SampleSlider5}
                      alt="Facebook"
                      className="w-25"
                      style={{ margin: "5px" }}
                    />
                    <img
                      src={SampleSlider6}
                      alt="Facebook"
                      className="w-25"
                      style={{ margin: "5px" }}
                    />
                    <img
                      src={SampleSlider7}
                      alt="Facebook"
                      className="w-25"
                      style={{ margin: "5px" }}
                    />
                    <img
                      src={SampleSlider8}
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
            className="my_profile_sub_container4 max-w-[1440px]"
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
            className="album_wrap_container max-w-[1440px]"
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
