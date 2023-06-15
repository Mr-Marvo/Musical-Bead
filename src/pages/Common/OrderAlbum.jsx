import React from "react";
import { DefaultAlbum, Equalizer, PlayButton } from "../../assets";

const OrderAlbum = ({ order }) => {
  return (
    <div className="flex flex-row gap-3 w-[360px] h-120 my-2 bg-black rounded-xl p-2">
      <div className="flex flex-col h-fit pl-2 pt-2 pb-2 relative">
        <div className="flex">
          <img
            src={DefaultAlbum}
            alt="default album"
            style={{ width: "400px", height: "180px" }}
          />
        </div>
      </div>
      <div className="flex flex-col text-white pr-2 pt-2 pb-2">
        <div className="flex text-base font-medium">{order.order_number}</div>
        <div className="flex text-[13px] font-light">
          {order.logistics[0].date.split(" ")[0]}
        </div>
        <button className="flex mt-4 border-[1px] border-[#12E4A5] rounded-lg px-1 py-1 text-[16px] font-medium">
          Order Details
        </button>
        <button className="flex mt-4 bg-[#12E4A5] rounded-lg px-1 py-1 text-[18px] font-medium">
          Ship Order
        </button>
      </div>
    </div>
  );
};

export default OrderAlbum;
