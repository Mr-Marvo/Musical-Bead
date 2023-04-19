import { AppDownloadICon, LEmail, LFacebook, LTwitter } from "../../assets";

const Footer = () => {
  return (
    <footer className={"bg-dark-teal mt-4"}>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:items-start lg:gap-8">
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-3 lg:gap-y-16">
            <div className="col-span-2 sm:col-span-1">
              <p className="font-normal text-[23px] text-white">
                For more info Contact:
              </p>

              <nav className="mt-2">
                <p className="font-normal md:text-[23px] text-lg text-[#BABABA]">
                  MusicalBead@gmail.com
                </p>
              </nav>

              <div className="flex flex-row mt-8 gap-4">
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src={LTwitter} alt='Twitter' className="w-10" /></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src={LFacebook} alt='Facebook' className="w-10" /></a>
                <a href="#" target="_blank" rel="noreferrer"><img src={LEmail} alt='Email' className="w-10" /></a>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-normal text-[23px] text-white">
                Presented By:
              </p>

              <nav className="mt-2">
                <p className="font-normal text-[23px] text-[#BABABA]">
                  Musical Beads is patented by Bruce Quarto from Quarto Valley
                  Record and Chi HuynH from Galatea / Momento NFC technology
                </p>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-normal text-[23px] text-white">
                Musical Bead App:
              </p>

              <nav className="mt-2">
                <p className="font-normal text-[23px] text-[#BABABA]">
                  Available on iTunes & Google Play store.
                </p>
                <div className="mt-12">
                  <div className="flex flex-row rounded-full text-white text-[23px] font-normal border-[1px] border-white w-max px-4 py-2 cursor-pointer">
                    iOS and Android{" "}
                    <img
                      src={AppDownloadICon}
                      className="h-6 mt-1 px-2"
                      alt="Mobile App Icon"
                    />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
