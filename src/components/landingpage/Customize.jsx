import { Frame4, Frame5, Frame6, Music } from "../../assets";

const Customize = () => {
  return (
    <div className="flex flex-row w-full lg:p-16 sm:p-8 p-4">
      <div className="flex lg:flex-row flex-col mt-32 w-full">
        <img
          src={Music}
          alt="Music"
          className="absolute left-24 -mt-40 opacity-40"
        />
        <div className="flex flex-col 2xl:w-[60%] w-full 2xl:ml-16 ml-8 max-md:ml-0">
          <div className="flex font-bold 2xl:text-[64px] lg:text-[52px] md:text-[44px] text-[36px] text-teal xl:w-[80%] w-full xl:ml-16 ml-2 max-md:text-center customizedText">
            Musical Bead Keychains can be customized with everything you’d once
            found in a record or CD
          </div>
        </div>
        <img
          src={Music}
          alt="Music"
          className="absolute right-40 mt-8 opacity-40"
        />
        <div className="flex lg:flex-col justify-end items-end content-end text-right xl:-mt-24 lg:-mt-24 w-auto max-lg:hidden">
          <img
            src={Music}
            alt="Music"
            className="absolute left-4 -mt-40 opacity-40"
          />
          <img src={Frame4} alt="Singers" className="w-56 h-56 mr-16" />
          <img
            src={Frame5}
            alt="Singers"
            className="2xl:w-80 2xl:h-80 w-62 -mt-4"
          />
          <img src={Frame6} alt="Singers" className="w-56 h-56 -mt-12 mr-40" />
        </div>
        <div className="flex lg:flex-col min-2xl:ml-16 w-[35%] lg:hidden mt-12">
          <img
            src={Music}
            alt="Music"
            className="absolute left-12 -mt-24 opacity-40"
          />
          <img src={Frame4} alt="Singers" className="" />
          <img src={Frame5} alt="Singers" className="w-56 h-auto -ml-4 z-10" />
          <img src={Frame6} alt="Singers" className="-ml-4" />
        </div>
      </div>
    </div>
  );
};
export default Customize;
