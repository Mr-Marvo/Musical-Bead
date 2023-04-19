import { Music, Settingsup, Star } from "../../assets";
import { Slide } from "react-reveal";

const SettingsUp = () => {
  return (
    <div className="flex min-lg:flex-row flex-col w-full min-lg:pl-32 mt-32">
      <div className="flex flex-col min-lg:w-[60%] w-full md:px-16 px-4">
        <Slide bottom>
          <img
            src={Music}
            alt="Music"
            className="absolute right-24 -mt-16 opacity-40"
          />
          <img src={Music} alt="Music" className="absolute left-8 opacity-40" />
          <div className="2xl:text-[54px] xl:text-[50px] lg:text-[46px] md:text-[42px] text-[36px] font-medium benifitRadientText">
            Setting up is so simple and easy!
          </div>
          <div className="xl:text-[34px] lg:text-[30px] text-2xl font-bold text-teal">
            It just takes three easy steps:
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row mt-4">
              <img src={Star} className="w-8 h-8 p-2" alt="Star" />
              <div className="md:text-[23px] text-lg font-bold text-teal">
                Create an account
              </div>
            </div>
            <div className="flex flex-row mt-4">
              <img src={Star} className="w-8 h-8 p-2" alt="Star" />
              <div className="md:text-[23px] text-lg font-bold text-teal">
                Upload your music album
              </div>
            </div>
            <div className="flex flex-row mt-4">
              <img src={Star} className="w-8 h-8 p-2" alt="Star" />
              <div className="md:text-[23px] text-lg font-bold text-teal">
                We approve and populate your album on the Musical Bead’s shop.
              </div>
            </div>
            <div className="flex flex-row mt-4">
              <div className="md:text-[23px] text-lg font-bold text-teal ml-8">
                That’s it. Now sit back and enjoy your new online business.
              </div>
            </div>
            <div className="flex flex-row mt-4">
              <div className="md:text-[23px] text-lg font-bold text-teal ml-8">
                You can share your Musical bead shop on your social media
                accounts to connect with you fans and generate more sales.
              </div>
            </div>
          </div>
          <img
            src={Music}
            alt="Music"
            id="bug1"
            className="absolute md:left-96 left-60 mt-96 opacity-40"
          />
        </Slide>
      </div>
      <div className="w-[15%]">
        <img src={Music} alt="Music" className="absolute -mt-10 opacity-40" />
      </div>
      <div className="flex justify-end">
        <img src={Settingsup} alt="Settings Up" className="w-96" />
        <img
          src={Music}
          alt="Music"
          id="bug2"
          className="absolute md:left-96 left-28 mt-96 opacity-40"
        />
      </div>
    </div>
  );
};
export default SettingsUp;
