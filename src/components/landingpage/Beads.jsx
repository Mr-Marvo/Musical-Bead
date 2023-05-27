import axios from "axios";
import { useEffect, useState } from "react";
import { Music, Note, Tag } from "../../assets";
import { useContentContext } from "../../providers/ContentContext";
import { Link } from "react-router-dom";

const Beads = () => {
  let { userType } = useContentContext();
  const [beads, setBeads] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios.post(`https://api.musicalbead.com/api/beads`).then((res) => {
      setBeads(res.data.output.slice(0, 4));
    });
  };

  return (
    <div
      className={`${
        beads.length === 0 ? "hidden" : "visible"
      } flex flex-col w-full lg:p-16 sm:p-8 p-4`}
    >
      <div className="flex w-full lg:mt-4 mt-16 font-bold lg:text-[54px] md:text-[48px] leading-relaxed text-4xl justify-center content-center text-center text-teal">
        Order Your Musical Bead Keychain Today
      </div>
      <img src={Music} alt="Music" className="w-10 lg:ml-96 ml-60 opacity-40" />
      <div className="flex lg:flex-row flex-col w-full justify-center content-center items-center">
        {beads.map((bead) => {
          return (
            <div className="flex flex-col p-4 max-w-md rounded overflow-hidden shadow-lg border-[1px] border-teal m-4 productCard">
              <div className="rounded-lg w-full bg-white h-full content-center justify-center items-center text-center">
                <img
                  src={Tag}
                  className="h-80 ml-auto mr-auto my-4"
                  alt="Bead"
                />
              </div>
              <div className="py-4 content-center justify-center items-center text-center">
                <div className="font-semibold text-[25px] mb-2">
                  {bead.title}
                </div>
                <div className="flex content-center justify-center items-center text-center">
                  <div className="flex border-[1px] border-white text-xl font-medium rounded-xl w-max px-4">
                    $ {bead.price}
                  </div>
                </div>
                <div className="flex content-center justify-center items-center text-center">
                  <Link to='/signup'
                    className="flex bg-teal rounded-full text-[27px] font-semibold text-white mt-8 px-8 py-2 w-max text-center justify-center cursor-pointer"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img
        src={Note}
        alt="Music"
        className="w-10 justify-center place-self-center opacity-60 mt-8"
      />
      <img
        src={Note}
        alt="Music"
        className="w-10 justify-center place-self-center -mt-96 -ml-96 opacity-60 z-20"
      />
    </div>
  );
};
export default Beads;
