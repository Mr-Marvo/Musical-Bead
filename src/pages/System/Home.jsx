import React from "react";
import "../../App.css";

import Album2 from "../Common/Album2";

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
  return (
    <>
      <NewHeader />

      {/* Main Content */}
      <main>
        <div
          className="headline_wrap_container"
          style={{
            marginTop: "2rem",
            borderTopLeftRadius: "50px",
            borderTopRightRadius: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <aside className="headline font-nunito">Trending Albums</aside>
          </div>
        </div>
        <div className="album_wrap_container">
          <div className="album_sub_wrap3">
            <Album2 />
            <Album2 />
            <Album2 />
            <Album2 />
            <Album2 />
            <Album2 />
            <Album2 />
            <Album2 />
            <Album2 />
            <Album2 />
            <Album2 />
            <Album2 />
          </div>
        </div>
        <div className="headline_wrap_container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <aside className="headline font-nunito">New Albums</aside>
          </div>
        </div>
        <div
          className="album_wrap_container"
          style={{
            marginBottom: "2rem",
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "50px",
          }}
        >
          <div className="album_sub_wrap3">
            <Album2 />
            <Album2 />
            <Album2 />
            <Album2 />
            <Album2 />
            <Album2 />
            <Album2 />
            <Album2 />
            <Album2 />
            <Album2 />
            <Album2 />
            <Album2 />
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
              {slideImages.map((slideImage, index) => (
                <div key={index}>
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
              ))}
            </Slide>
          </div>
        </div>
      </main>

      <NewFooter />
    </>
  );
}

export default Home;
