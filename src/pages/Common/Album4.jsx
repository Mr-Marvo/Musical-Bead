import React from "react";
import { DefaultAlbum, Equalizer, PlayButton } from "../../assets";

const Album4 = () => {
  return (
    <div className="flex flex-row gap-3 justify-center items-center my-2">
      <div className="flex flex-col bg-black w-fit h-fit rounded-xl p-4 relative">
        <div className="flex">
          <img src={DefaultAlbum} alt="default album" className="w-[350px]" />
        </div>
        <div className="flex text-[12px] font-normal text-[#BA55C2] mt-1">
          lorem episum
        </div>
        <div className="flex flex-row gap-4 mt-2">
          <div className="flex">
            <img src={Equalizer} alt="equalizer" className="w-10" />
          </div>
          <div className="flex">
            <img
              src={PlayButton}
              alt="playbutton"
              className="w-10 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album4;
