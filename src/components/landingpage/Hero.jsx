import React from "react";
import { Bead } from "../../assets";
import Flip from "react-reveal";
import Pulse from "react-reveal/Pulse";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col bg-main-back bg-cover h-screen w-full p-4 sm:p-12 xl:p-16">
        <Flip bottom>
          <div className="flex xl:text-[68px] md:text-[56px] text-5xl font-bold font-montserrat items-center mt-32 md:mt-24 lg:mt-16 leading-snug firstheader">
            Imagine your Music Album <br /> & video is in a keychain
          </div>
          <div className="flex xl:text-[68px] md:text-[55px] text-5xl items-center font-montserrat font-bold text-teal mt-8">
            Musical Bead
          </div>
          <div className="flex xl:text-[40px] text-[32px] items-center font-montserrat font-bold text-teal max-sm:mt-8 mt-4 leading-snug">
            The New Medium That Holds & Plays Music
          </div>
        </Flip>
      </div>
      <div className="md:-mt-96 -mt-60">
        <div className="flex w-full justify-center content-center bottom-0 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Pulse>
              <img src={Bead} alt="Musical Bead" />
            </Pulse>
          </motion.div>
        </div>
        <div className="flex w-full justify-center content-center">
          <p className="text-center font-normal lg:text-[41px] md:text-4xl sm:text-2xl text-xl text-teal font-montserrat">
            Simply tap your phone
            <br /> to the keychain and
            <br /> music will play
          </p>
        </div>
        <div className="flex w-full justify-center content-center text-center items-center mt-4">
          <hr className="xl:w-[25%] lg:w-[40%] md:w-[50%] w-[55%] text-teal" />
        </div>
        <div className="flex w-full md:text-[54px] text-[44px] font-bold justify-center content-center text-center items-center mt-4 radientText font-montserrat">
          We connect artist and fans!
        </div>
        <div className="flex w-full md:text-[34px] lg:text-[44px] text-[28px] font-medium font-montserrat text-teal justify-center content-center text-center items-center mt-8">
          Be the First to share your Musical Bead today,
        </div>
        <div className="flex w-full md:text-[34px] lg:text-[44px] text-[28px] font-medium font-montserrat text-teal justify-center content-center text-center items-center">
          make history together and keep music alive.
        </div>
      </div>
    </>
  );
};
export default Hero;
