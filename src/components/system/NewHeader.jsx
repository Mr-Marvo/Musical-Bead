import React, { useRef, useState } from "react";
import Singer from "../../assets/images/common/singer.png";

import { FaBars } from "react-icons/fa";
import { BiMessageAltDots, BiSupport } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { AiTwotoneSetting, AiFillDollarCircle } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { Logo } from "../../assets";
import { useContentContext } from "../../providers/ContentContext";
import { Link } from "react-router-dom";
import axios from "axios";

const NewHeader = () => {
  const navRef = useRef();
  let { url } = useContentContext();
  const token = localStorage.getItem("token");

  let userName = localStorage.getItem('username').split(' ')[0];
  const userTag = useState(`Hi! ${userName}`);
  const location = window.location.pathname;

  const [isCollapsed3, setIsCollapsed3] = useState(true);

  const usertype = localStorage.getItem("usertype");

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleToggleCollapse3 = () => {
    setIsCollapsed3(!isCollapsed3);
  };

  const logout = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const data = {
      token: token,
    };

    axios
      .post(url + "/logout", data, config)
      .then((response) => {
        if (response.data.success) {
          localStorage.clear();
          window.location.replace("/signin");
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header className="font-nunito">
      <Link to="/">
        <img src={Logo} alt="Musical Bead" className="logo" />
      </Link>
      <nav ref={navRef}>
        {usertype !== "3" ? (
          <>
            <a
              href="/home"
              className={`text-[20px] font-nunito ${
                location === "/home" ? "text-[#2aafc1]" : ""
              }`}
            >
              Home
            </a>
            <a
              href="/dashboard"
              className={`text-[20px] font-nunito ${
                location === "/dashboard" ? "text-[#2aafc1]" : ""
              }`}
            >
              Dashboard
            </a>
            <a
              href="/earnings"
              className={`text-[20px] font-nunito ${
                location === "/earnings" ? "text-[#2aafc1]" : ""
              }`}
            >
              Earnings
            </a>
          </>
        ) : (
          <></>
        )}
        {usertype === "2" ? (
          <a
            href="/profile"
            className={`text-[20px] font-nunito ${
              location === "/profile" ? "text-[#2aafc1]" : ""
            }`}
          >
            My Profile
          </a>
        ) : (
          <></>
        )}
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
          alt="User"
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
                  <a
                    onClick={() => {
                      logout();
                    }}
                  >
                    Log out
                  </a>
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
