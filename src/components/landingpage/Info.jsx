import { Frame1, Frame2, Frame3, Music, Star } from "../../assets";

const Info = () => {
  return (
    <div className="flex flex-col w-full lg:p-16 sm:p-8 p-4">
      <div className="flex flex-col">
        <div className="flex w-full lg:mt-4 mt-16 font-bold lg:text-[54px] md:text-[44px] leading-relaxed text-3xl justify-center content-center text-center borderedText">
          We transport music from the <br /> past and the present to the future
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-4 font-medium lg:text-[36px] md:text-[28px] text-[20px]">
            <img
              src={Music}
              alt="Music"
              className="absolute left-40 -mt-10 opacity-40 max-sm:hidden"
            />
            <img
              src={Music}
              alt="Music"
              className="absolute right-40 -mt-40 opacity-40 max-sm:hidden"
            />
            <div className="flex justify-center ">
              <img src={Star} className="w-12 h-12" alt="Star" />
              Rock
            </div>
            <div className="flex justify-center">
              <img src={Star} className="w-12 h-12" alt="Star" />
              Pop
            </div>
            <div className="flex justify-center">
              <img src={Star} className="w-12 h-12" alt="Star" />
              R&B
            </div>
            <div className="flex justify-center">
              <img src={Star} className="w-12 h-12" alt="Star" />
              Indie
            </div>
            <div className="flex justify-center">
              <img src={Star} className="w-12 h-12" alt="Star" />
              Country
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col mt-32">
        <div className="flex lg:flex-col w-[35%] max-sm:hidden xl:pl-32">
          <img
            src={Music}
            alt="Music"
            className="absolute left-24 md:-mt-24 lg:-mt-16 opacity-40"
          />
          <img
            src={Frame1}
            alt="Singers"
            className="xl:w-64 xl:h-64 w-48 h-48 md:ml-16"
          />
          <img
            src={Frame3}
            alt="Singers"
            className="w-96 h-auto xl:ml-8 xl:-mt-12 lg:-mt-4 z-10 md:-ml-8"
          />
          <img
            src={Frame2}
            alt="Singers"
            className="w-52 h-52 2xl:-mt-16 -mt-4 md:-ml-8"
          />
        </div>
        <div className="flex lg:flex-col w-[35%] sm:hidden">
          <img
            src={Music}
            alt="Music"
            className="absolute left-12 -mt-24 opacity-40"
          />
          <img src={Frame1} alt="Singers" className="" />
          <img src={Frame3} alt="Singers" className="w-56 h-auto -ml-4 z-10" />
          <img src={Frame2} alt="Singers" className="-ml-4" />
        </div>
        <div className="flex flex-col lg:w-[60%] lg:ml-8 max-md:mt-8">
          <div className="flex font-extrabold 2xl:text-3xl xl:text-3xl lg:text-2xl text-xl text-teal">
            Remember how it felt to hold a brand-new record from your favorite
            artist and that spectacular cover art and lyrics you’d admire?
          </div>
          <div className="flex font-medium 2xl:text-3xl xl:text-3xl lg:text-2l text-xl text-teal mt-12 leading-relaxed">
            Remember how it felt to hold a brand-new record from your favorite
            artist and the spectacular cover art and lyrics you’d admire?
            <br />
            <br />
            Well, in the modern world of instant downloads, music is just music.
            But the thing is…We’re missing the depth and personal connections we
            used to feel with artists. I'm sure you can relate but what if I
            told you that you could reconnect and give your fans that same
            tangible experience?
            <br />
            <br />
            Here at Musical Bead, we’ve reimagined modern music. We have
            combined the convenience of modern technology with physical and
            functional memorabilia your fans will love.
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
};
export default Info;
