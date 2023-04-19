import { Star } from "../../assets";
import { motion } from "framer-motion";
import { Slide } from "react-reveal";

const ArtistSignUp = () => {
  return (
    <div className="flex flex-col w-full lg:p-16 sm:p-8 p-4 mt-72 items-center justify-center text-center">
      <Slide bottom>
      <div className="flex lg:flex-row flex-col font-bold 2xl:text-[48px] lg:text-[36px] text-[28px] text-teal justify-center">
        <p className="radientText">Partner with Musical Bead</p> &nbsp;
        <p className="radientText">Deepen the connections</p>
      </div>

      <div className="flex w-full md:text-[28px] lg:text-[22px] text-[18px] font-bold text-teal justify-center content-center text-center items-center mt-8">
        Own your Musical Bead shop
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center mt-8">
        <div className="flex justify-center items-center px-4">
          <img src={Star} className="w-8 h-8" alt="Star" />
          <p className="pt-2 pl-3 md:text-[28px] lg:text-[22px] text-[18px] font-medium text-teal">
            Create an account
          </p>
        </div>
        <div className="flex justify-center items-center px-4">
          <img src={Star} className="w-8 h-8" alt="Star" />
          <p className="pt-2 pl-3 md:text-[28px] lg:text-[22px] text-[18px] font-medium text-teal">
            Upload music
          </p>
        </div>
        <div className="flex justify-center items-center px-4">
          <img src={Star} className="w-8 h-8" alt="Star" />
          <p className="pt-2 pl-3 md:text-[28px] lg:text-[22px] text-[18px] font-medium text-teal">
            Ready for business
          </p>
        </div>
      </div>

      <div className="flex lg:w-[60%] md:w-[80%] w-[98%] md:text-[32px] lg:text-[26px] text-[18px] font-medium text-teal mt-8 leading-relaxed">
        We’re doing even more to help musicians like you reach fans far and
        wide.
        <br /> You see…By partnering with Musical Bead, artists allow fans to
        find and
        <br /> buy all their music in one place and that place is the Music Bead
        shop.
        <br /> Once you’re an approved seller, your fans can access all your
        music with with Musical Bead keychain.
        <br /> The Musical Bead app is available in the iTunes. Find out how you
        can make the most of your Musical Bead partnership.
      </div>

      <div className="flex w-full text-center justify-center cursor-pointer md:text-[32px] lg:text-[26px] text-[18px] font-medium text-white mt-8">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a href="https://system.musicalbead.com/artist">Sign Me Up Now</a>
        </motion.div>
      </div>

      <div className="flex w-full flex-col  mt-8">
        <p className="flex md:text-[28px] text-center justify-center lg:text-[22px] text-[18px] font-bold text-teal">
          Profit sharing info
        </p>
        <div className="flex justify-center items-center">
          <a
            className="flex md:text-[28px] lg:text-[22px] text-[18px] font-normal text-teal relative w-fit after:items-end after:justify-end after:content-[''] after:bg-teal after:absolute after:h-[3px] after:w-[0%] after:left-0 after:bottom-0 after:rounded-xl after:duration-300 hover:after:w-full"
            href="/"
          >
            Click here to learn more
          </a>
        </div>
      </div>
      </Slide>
    </div>
  );
};

export default ArtistSignUp;
