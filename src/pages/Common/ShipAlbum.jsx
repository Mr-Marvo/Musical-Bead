import React from "react";
import { DefaultAlbum, Equalizer, PlayButton, TagTop } from "../../assets";

const ShipAlbum = () => {
  return (
    <div className="flex flex-row gap-3 w-[300px] h-120 my-2 bg-black rounded-xl p-2">
      <div className="flex flex-col w-fit h-fit pl-2 pt-2 pb-2 relative">
        <div className="flex">
          <img src={DefaultAlbum} alt="default album" />
          <div className="absolute right-0 bottom-4 z-10">
            <div className="flex flex-col">
              <img src={TagTop} className="3xl:w-[120px] w-[60px]" alt="Bead" />
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
      <div className="flex flex-col text-white pr-2 pt-2 pb-2">
        <div className="flex text-base font-medium">MB23QR456E</div>
        <div className="flex text-[13px] font-light">2023.JAN.10</div>
        <button className="flex mt-4 border-[1px] border-[#DFAF03] rounded-lg px-1 py-1 text-[16px] font-medium">Order Details</button>
        <button className="flex mt-4 bg-[#DFAF03] rounded-lg px-1 py-1 text-[18px] font-medium">Track Order</button>
      </div>
    </div>
  );
};

export default ShipAlbum;
