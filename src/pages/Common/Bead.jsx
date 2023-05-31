import React from "react";
import { Tag } from "../../assets";
import { Link } from "react-router-dom";

const Bead = () => {
  return (
    <div className="flex flex-col p-4 max-w-md rounded overflow-hidden shadow-lg border-[1px] border-teal m-4 productCard">
      <div className="rounded-lg w-full bg-white h-full content-center justify-center items-center text-center">
        <img src={Tag} className="h-80 ml-auto mr-auto my-4" alt="Bead" />
      </div>
      <div className="py-4 content-center justify-center items-center text-center">
        <div className="font-semibold text-[25px] mb-2">Title</div>
        <div className="flex content-center justify-center items-center text-center">
          <div className="flex border-[1px] border-white text-xl font-medium rounded-xl w-max px-4">
            $ 10.00
          </div>
        </div>
        <div className="flex content-center justify-center items-center text-center">
          <Link
            to="/signup"
            className="flex bg-teal rounded-full text-[27px] font-semibold text-white mt-8 px-8 py-2 w-max text-center justify-center cursor-pointer"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bead;
