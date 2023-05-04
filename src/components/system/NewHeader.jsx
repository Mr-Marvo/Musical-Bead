import React, { useRef, useState } from "react";
import Singer from "../../assets/images/common/singer.png";

import { FaBars } from "react-icons/fa";
import { BiMessageAltDots, BiSupport } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { AiTwotoneSetting, AiFillDollarCircle } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { Logo } from "../../assets";

const NewHeader = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  /* const find_user_tag = () => {
        setUserTag('Hi! Oliver')
    } */

  const [userTag, setUserTag] = useState("Hi! Oliver");
  const [fullnameTag, setFullnameTag] = useState("Oliver Fernadoz");

  const [isCollapsed3, setIsCollapsed3] = useState(true);

  const handleToggleCollapse3 = () => {
    setIsCollapsed3(!isCollapsed3);
  };

  return (
    <header className="font-nunito">
      <img src={Logo} alt="Musical Bead" className="logo" />
      <nav ref={navRef}>
        <a href="/home" className="active text-[20px] font-nunito">
          Home
        </a>
        <a href="/musician/dashboard" className="text-[20px] font-nunito">
          Dashboard
        </a>
        <a href="/profile" className="font-nunito text-[20px]">
          My Profile
        </a>
        <a href="/earnings" className="font-nunito text-[20px]">
          Earnings
        </a>
      </nav>
      {/* Menu Toggle Button */}
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars style={{ fontSize: 36 }} />
      </button>
      {/* Right Side Button Container */}
      <div className="btn-container">
        <BiMessageAltDots
          style={{
            fontSize: 46,
            padding: 10,
            alignSelf: "center",
            justifySelf: "center",
          }}
        />
        <BsBell
          style={{
            fontSize: 46,
            padding: 10,
            alignSelf: "center",
            justifySelf: "center",
          }}
        />
        <img
          src={Singer}
          alt="User Image"
          className="singer_image cursor-pointer"
          onClick={handleToggleCollapse3}
        />
        <p className="user_tag cursor-pointer" onClick={handleToggleCollapse3}>
          {userTag}
        </p>
        <div onClick={handleToggleCollapse3} className="cursor-pointer">
          <span>
            {isCollapsed3 ? (
              <RiArrowDownSFill fontSize={34} className="mt-4" />
            ) : (
              <RiArrowUpSFill fontSize={34} className="mt-4" />
            )}{" "}
          </span>
          {isCollapsed3 ? null : (
            <div className="navbar_toggle">
              <ul>
                <li>
                  <AiTwotoneSetting />
                  <a href="/#">Settings</a>
                </li>
                <li>
                  <AiFillDollarCircle />
                  <a href="/#">Billings</a>
                </li>
                <li>
                  <BiSupport />
                  <a href="/#">Support</a>
                </li>
                <li>
                  <TbLogout />
                  <a href="/#">Log out</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
