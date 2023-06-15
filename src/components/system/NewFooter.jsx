import React from "react";
import { Facebook, Instagram, Logo, Tiktok, Twitter } from "../../assets";
import { RiAppleLine } from "react-icons/ri";
import { FaGooglePlay } from "react-icons/fa";

const NewFooter = () => {
  return (
    <footer className="footer font-nunito text-white">
      <div className="footer_container">
        <div className="footer_content1">
          <p>For More Info Contacts:</p>

          <nav>
            <pre className="font-nunito">MusicalBead@gmail.com</pre>
          </nav>

          <div className="flex flex-row gap-4 mt-4">
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
        <div className="footer_content2">
          <ul>
            <li>
              <pre className="font-nunito cursor-pointer hover:text-teal">
                Site Map
              </pre>
            </li>
            <li>
              <pre className="font-nunito cursor-pointer hover:text-teal">
                Company Info
              </pre>
            </li>
            <li>
              <pre className="font-nunito cursor-pointer hover:text-teal">
                How it's work
              </pre>
            </li>
            <li>
              <pre className="font-nunito cursor-pointer hover:text-teal">
                Privacy Policy
              </pre>
            </li>
          </ul>
        </div>

        <div className="footer_content3">
          <p>Presented By:</p>

          <pre className="font-nunito" style={{width:'240px'}}>
            Musical Beads is patented by Bruce Quarto{" "}
          </pre>
          <pre className="font-nunito">
            from Quarto Valley Record and Chi HuynH{" "}
          </pre>
          <pre className="font-nunito">
            from Galatea / Momento NFC technology
          </pre>
        </div>

        <div className="footer_content4">
          <p>Musical Bead App:</p>

          <pre className="font-nunito">
            Available in iTunes & Google Play Store.{" "}
          </pre>
          <div className="store_wrap">
            <div className="store_container font-nunito gap-2">
              <RiAppleLine className="w-6 h-6" />
              <span>App Store</span>
            </div>
            <div className="store_container font-nunito gap-2">
              <FaGooglePlay className="w-4 h-4" />
              <span>Play Store</span>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright_container font-nunito">
        <img src={Logo} alt="Musical Bead" className="ml-12 footer_logo" />
        <span> Copyright &copy; Musical Beads International Ltd. 2023</span>
        <div className="flex flex-row gap-6 mt-4 lg:mt-0 mr-12">
          <div className="text-white">English</div>
          <div className="text-white">USD</div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
