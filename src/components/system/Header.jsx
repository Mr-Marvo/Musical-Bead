import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets";

const Header = () => {
  return (
    <nav className="md:px-16 px-4 py-2 w-full flex items-center fixed top-0 z-20 bg-black">
      <div className="w-full flex justify-between items-center mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="md:w-full w-3/4" />
        </Link>
        <button onClick={() => { window.location.replace("/signin");}} className="text-white md:w-fit w-20 break-keep md:px-12 px-2 py-1 bg-[#3a3a3a] rounded-3xl md:text-[20px] text-[14px] font-nunito font-bold hover:scale-110 hover:bg-[#093253]">
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Header;
