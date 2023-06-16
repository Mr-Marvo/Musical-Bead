import React from "react";
import { TagTop } from "../../assets";
import { Link, useNavigate } from "react-router-dom";

const Bead = ({ bead }) => {
  const navigate = useNavigate();

  const view = () => {
    navigate("/beadview", { state: { bead: bead } });
  };

  return (
    <div className="flex flex-col p-4  w-[250px] rounded overflow-hidden shadow-lg border-[1px] border-teal m-4 productCard">
      <div
        className="rounded-lg w-full bg-white h-full content-center justify-center items-center text-center cursor-pointer"
        onClick={view}
      >
        <div className="flex flex-col p-3 justify-center items-center">
          <img src={TagTop} className="3xl:w-[120px] w-[80px]" alt="Bead" />
          <div className="flex bg-tag-bottom bg-cover bg-center w-[70px] h-[62px] 3xl:w-[200px] 3xl:h-[190px] justify-center items-center">
            <img
              src={bead.bead_image}
              className="flex 3xl:w-[135px] w-[48px] rounded-full mb-1 3xl:mb-4 3xl:mr-1"
              alt="Bead"
            />
          </div>
        </div>
      </div>
      <div className="py-4 content-center justify-center items-center text-center">
        <div
          className="font-semibold text-[25px] text-white cursor-pointer"
          onClick={view}
        >
          {bead.title}
        </div>
        <div className="text-[16px] text-[#979797] mb-2 -mt-2">
          {bead.model_number}
        </div>
        <div className="flex content-center justify-center items-center text-center">
          <div className="flex border-[1px] border-white text-xl font-medium rounded-xl w-max px-4 text-white">
            $ {bead.price}
          </div>
        </div>
        <div className="flex content-center justify-center items-center text-center">
          {bead.available_qty !== 0 ? (
            <Link
              to="/signup"
              className="flex bg-teal rounded-full text-[22px] font-semibold text-white mt-8 px-8 py-2 w-max text-center justify-center cursor-pointer"
            >
              Add to Cart
            </Link>
          ) : (
            <div className="text-bold text-xl text-red-400 mt-4">SOLD OUT</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bead;
