import React from "react";
import { AppStore, Facebook, Instagram, Logo, Tiktok, Twitter } from "../../assets";

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-fit md:px-16 px-4 py-2 font-nunito text-[20px]">
      <div className="flex lg:flex-row flex-col pb-4 border-b-2 border-[#383838]">
        <div className="flex flex-col gap-4 lg:w-1/4 px-4">
          <div className="text-white">For more info Contact:</div>
          <a
            href="mailto:musicalbead@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-teal hover:underline cursor-pointer"
          >
            MusicalBead@gmail.com
          </a>
          <div className="flex flex-row gap-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:animate-pulse"
            >
              <img src={Facebook} alt="facebook" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:animate-pulse"
            >
              <img src={Instagram} alt="instagram" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:animate-pulse"
            >
              <img src={Twitter} alt="twitter" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="hover:animate-pulse"
            >
              <img src={Tiktok} alt="tiktok" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-white lg:w-1/4 px-4 mt-4 lg:mt-0">
          <a href="#" className="hover:text-teal">Site Map</a>
          <a href="#" className="hover:text-teal">Company Info</a>
          <a href="#" className="hover:text-teal">How it’s Work</a>
          <a href="#" className="hover:text-teal">Privacy Policy</a>
        </div>
        <div className="flex flex-col gap-4 lg:w-1/4 px-4 mt-4 lg:mt-0">
          <div className="text-white">Presented By:</div>
          <div className="text-teal">
            Musical Beads is patented by Bruce Quarto from Quarto Valley Record
            and Chi HuynH from Galatea / Momento NFC technology
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-1/4 px-4 mt-4 lg:mt-0">
          <div className="text-white">Musical Bead App:</div>
          <div className="text-teal">
            Available on iTunes & Google Play store.
          </div>
          <div className="flex flex-row gap-3">
            <button className="flex flex-row gap-2 justify-center items-center text-teal border-2 border-teal px-3 rounded-full py-1">
              <img src={AppStore} alt="app store" className="w-6" />
              App Store
            </button>
            <button className="flex flex-row gap-2 justify-center items-center text-teal border-2 border-teal px-3 rounded-full py-1">
              {/* <img src={AppStore} alt="app store" className="w-6" /> */}
              Play Store
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-4 lg:mt-2">
        <div className="flex">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex px-4 mt-4 lg:mt-0 text-center">
          Copyright © Musical Beads International Ltd. 2023
        </div>
        <div className="flex flex-row gap-6 mt-4 lg:mt-0">
          <div className="text-white">English</div>
          <div className="text-white">USD</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
