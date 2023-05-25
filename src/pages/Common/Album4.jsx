import React from "react";
import { DefaultAlbum, Equalizer, PlayButton, TagTop } from "../../assets";

const Album4 = () => {
  return (
    <div className="flex flex-row gap-3 justify-center items-center my-2">
      <div className="flex flex-col bg-black w-fit h-fit rounded-xl p-4 relative">
        <div className="flex">
          <img src={DefaultAlbum} alt="default album" className="w-[350px]" />
          <div className="absolute right-4 bottom-4">
            <div className="flex flex-col">
              <img
                src={TagTop}
                className="3xl:w-[200px] w-[120px]"
                alt="Bead"
              />
              <div className="flex bg-tag-bottom bg-cover bg-center w-[120px] h-[112px] 3xl:w-[200px] 3xl:h-[190px] justify-center items-center">
                <img
                  src={DefaultAlbum}
                  className="flex 3xl:w-[135px] w-[80px] rounded-full mb-2 mr-[2px] 3xl:mb-4 3xl:mr-1"
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
            <img src={Equalizer} alt="equalizer" className="w-10" />
          </div>
          <div className="flex">
            <img src={PlayButton} alt="playbutton" className="w-10 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album4;
