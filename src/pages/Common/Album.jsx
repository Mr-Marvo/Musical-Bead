import React from "react";
import { DefaultAlbum, Equalizer, PlayButton, TagTop } from "../../assets";

const Album = () => {
  return (
    <div className="flex flex-row gap-3 w-full h-screen justify-center items-center">
      <div className="flex flex-col bg-black w-fit h-fit rounded-xl p-4 relative">
        <div className="flex">
          <img src={DefaultAlbum} alt="default album" />
          <div className="absolute right-4 bottom-4 z-10">
            <div className="flex flex-col">
              <img
                src={TagTop}
                className="3xl:w-[120px] w-[60px]"
                alt="Bead"
              />
              <div className="flex bg-tag-bottom bg-cover bg-center w-[60px] h-[55px] 3xl:w-[200px] 3xl:h-[190px] justify-center items-center">
                <img
                  src={DefaultAlbum}
                  className="flex 3xl:w-[135px] w-[40px] rounded-full mb-1 3xl:mb-4 3xl:mr-1"
                  alt="Bead"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-[12px] font-normal text-[#BA55C2] mt-1">
          lorem episum
        </div>
        <div className="flex flex-row gap-4 mt-2">
          <div className="flex">
            <img src={Equalizer} alt="equalizer" />
          </div>
          <div className="flex">
            <img src={PlayButton} alt="playbutton" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
