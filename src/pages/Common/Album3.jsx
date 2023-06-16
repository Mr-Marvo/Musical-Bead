import React from "react";
import { DefaultAlbum, Equalizer, PlayButton } from "../../assets";

const Album3 = () => {
  return (
    <div className="flex flex-row gap-3 w-[240px] h-120 justify-center items-center my-2">
      <div className="flex flex-col  w-fit h-fit rounded-xl p-4 relative">
        <div className="flex">
          <img src={DefaultAlbum} alt="default album" />
        </div>
        <div className="flex text-[12px] font-normal text-[#BA55C2] mt-1">
          lorem episum
        </div>
        <div className="flex flex-row gap-4 mt-2">
          <div className="flex">
            <img src={Equalizer} alt="equalizer" />
          </div>
          <div className="flex">
            <img src={PlayButton} alt="playbutton" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album3;
