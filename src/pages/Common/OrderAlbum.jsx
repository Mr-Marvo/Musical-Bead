import React from "react";
import { DefaultAlbum, Equalizer, PlayButton } from "../../assets";

const OrderAlbum = () => {
  return (
    <div className="flex flex-row gap-3 w-[300px] h-120 my-2 bg-black rounded-xl p-2">
      <div className="flex flex-col w-fit h-fit pl-2 pt-2 pb-2 relative">
        <div className="flex">
          <img src={DefaultAlbum} alt="default album" style={{width:'140px',height:'140px'}}/>
          
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
        <button className="flex mt-4 border-[1px] border-[#12E4A5] rounded-lg px-1 py-1 text-[16px] font-medium">Order Details</button>
        <button className="flex mt-4 bg-[#12E4A5] rounded-lg px-1 py-1 text-[18px] font-medium">Ship Order</button>
      </div>
    </div>
  );
};

export default OrderAlbum;
