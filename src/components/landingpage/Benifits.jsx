import { Music, Star, UserBenifits } from "../../assets";

const Benifits = () => {
  return (
    <div className="flex lg:flex-row xl:gap-8 flex-col w-full lg:pr-32 max-sm:mt-16">
      <div className="flex lg:w-[40%]">
        <img
          src={UserBenifits}
          alt="Benifits"
          className="lg:mr-8 max-lg:w-[250px]"
        />
      </div>
      <div className="flex flex-col min-lg:w-[60%] w-full max-md:px-4 max-md:mt-12">
        <img src={Music} alt="Music" className="absolute right-56 opacity-40" />
        <div className="2xl:text-[54px] xl:text-[50px] lg:text-[46px] md:text-[42px] text-[36px] font-medium benifitRadientText">
          Unique Upselling For Artists
          <br /> In-Depth Experiences For Fans
        </div>
        <div className="lg:text-[23px] text-lg font-bold text-teal mt-8">
          Musical Bead keychains aren’t just awesome…
          <br />
          They’re connect artists and fans!
        </div>
        <div className="xl:text-[34px] lg:text-[30px] text-2xl font-bold text-teal mt-8">
          Our keychains:
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row mt-4">
            <img src={Star} className="w-8 h-8 p-2" alt="Star" />
            <div className="md:text-[23px] text-lg font-bold text-teal">
              Are easy to use — dependable NFC Memento technology provides a
              seamless experience for artists and fans.
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <img src={Star} className="w-8 h-8 p-2" alt="Star" />
            <div className="md:text-[23px] text-lg font-bold text-teal">
              Musical Beads are both shockproof and waterproof, standing the
              test of time as does music.
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <img src={Star} className="w-8 h-8 p-2" alt="Star" />
            <div className="md:text-[23px] text-lg font-bold text-teal">
              PU leather provides an extra layer of protection and makes Musical
              Bead keychains the most stylish way to connect with fans
              worldwide.
            </div>
          </div>
        </div>
        <img
          src={Music}
          alt="Music"
          className="absolute right-16 mt-96 opacity-40"
        />
      </div>
    </div>
  );
};
export default Benifits;
