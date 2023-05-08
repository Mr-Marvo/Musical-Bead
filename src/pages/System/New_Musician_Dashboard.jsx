import React, { useState } from "react";
import "../../App.css";

import { RiArrowUpSFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";
import { NewFooter, NewHeader } from "../../components/system";

function New_Musician_Dashboard() {
  const [isCollapsed1, setIsCollapsed1] = useState(true);

  const handleToggleCollapse1 = () => {
    setIsCollapsed1(!isCollapsed1);
  };

  const [isCollapsed2, setIsCollapsed2] = useState(true);

  const handleToggleCollapse2 = () => {
    setIsCollapsed2(!isCollapsed2);
  };

  return (
    <>
      <NewHeader />

      {/* Body Content */}
      <main className="font-nunito">
        <h2 className="greeting font-nunito">Welcome ! to the Musical Beads</h2>
        <div className="step_container">
          <div>
            <div onClick={handleToggleCollapse1}>
              <div className="step">
                <div className="step_cover">
                  <div className="box">Step 01</div>
                </div>
                <span className="step_healine text-white">
                  Complete Your Musical Profile
                </span>
                <span className="step_toggle">
                  {isCollapsed1 ? (
                    <RiArrowUpSFill fontSize={48} />
                  ) : (
                    <RiArrowDownSFill fontSize={48} />
                  )}
                </span>
              </div>
            </div>
            {isCollapsed1 ? null : (
              <div className="step_content">
                <div className="img_container1"></div>
                <div className="data_container">
                  <span className="font-nunito text-white" style={{ fontSize: "24px" }}>
                    Oliver Ferdison
                  </span>
                  <form>
                    <input type="text" placeholder="Title" className="text-white"></input>
                    <textarea className="text-white">Add Bio...</textarea>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="step_container">
          <div>
            <div onClick={handleToggleCollapse2}>
              <div className="step">
                <div className="step_cover">
                  <div className="box">Step 02</div>
                </div>
                <span className="step_healine text-white">
                  Complete Your First Musical Bead Profile
                </span>
                <span className="step_toggle">
                  {isCollapsed2 ? (
                    <RiArrowUpSFill fontSize={48} />
                  ) : (
                    <RiArrowDownSFill fontSize={48} />
                  )}
                </span>
              </div>
            </div>
            {isCollapsed2 ? null : (
              <div className="step_content">
                <div className="img_container2"></div>
                <div className="data_container data_container2">
                  <form>
                    <label className="font-nunito text-white">Album Name</label>
                    <input
                      type="text"
                      className="album_name text-white"
                    ></input>
                    <div>
                      <div>
                        <label className="font-nunito text-white">Category</label>
                        <input type="text" className="text-white"></input>
                      </div>

                      <div>
                        <label className="font-nunito text-white">Artist</label>
                        <input type="text" className="text-white"></input>
                      </div>
                    </div>
                    <label className="font-nunito text-white">Description</label>
                    <textarea className="text-white"></textarea>
                    <p>
                      Add Songs <span>(0)</span>
                    </p>
                    <div style={{ overflowX: "auto" }}>
                      <div className="song_container">+</div>
                      <div className="song_container">+</div>
                      <div className="song_container">+</div>
                      <div className="song_container">+</div>
                      <div className="song_container">+</div>
                      <div className="song_container">+</div>
                      <div className="song_container">+</div>
                      <div className="song_container">+</div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
        <button className="review_submit_btn font-nunito">
          Submit For Review
        </button>
      </main>

      <NewFooter />
    </>
  );
}

export default New_Musician_Dashboard;
