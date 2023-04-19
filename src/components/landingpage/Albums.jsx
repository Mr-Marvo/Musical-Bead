import axios from "axios";
import { useEffect, useState } from "react";
import { Music, Note } from "../../assets";
import { useContentContext } from "../../providers/ContentContext";

const Albums = () => {
  let { userType } = useContentContext();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setAlbums([]);
    axios.post(`https://api.musicalbead.com/api/albums`).then((res) => {
      console.log(res.data.output.albums);
      res.data.output.albums.forEach((album, x) => {
        if (x < 3) {
          setAlbums((albums) => [...albums, album]);
        }
      });
    });
  };

  const orderNow = () => {
    if (userType === 1) {
      window.location.assign("https://system.musicalbead.com/customer");
    } else {
      window.location.assign("https://system.musicalbead.com/artist");
    }
  };

  return (
    <div className="flex flex-col w-full lg:p-16 sm:p-8 p-4">
      <div className="flex w-full lg:mt-4 mt-16 font-bold lg:text-[54px] md:text-[48px] leading-relaxed text-4xl justify-center content-center text-center text-teal">
        Order Your Album Today
      </div>
      <img src={Music} alt="Music" className="w-10 lg:ml-96 ml-60 opacity-40" />
      <div className="flex lg:flex-row flex-col w-full justify-center content-center items-center">
        {albums.map((album) => {
          return (
            <div className="flex flex-col p-4 max-w-md rounded overflow-hidden shadow-lg border-[1px] border-teal m-4 productCard">
              <div className="rounded-lg w-full bg-white h-full content-center justify-center items-center text-center">
                <img
                  src={album.cover_image_path}
                  className="w-[300px] h-[300px]"
                  alt="Bead"
                />
              </div>
              <div className="py-4 content-center justify-center items-center text-center">
                <div className="font-semibold text-[25px]">{album.title}</div>
                <div className="font-semibold text-[18px] mb-2 text-teal">
                  {album.musician_name}
                </div>
                <div className="flex content-center justify-center items-center text-center">
                  <div className="flex border-[1px] border-white text-xl font-medium rounded-xl w-max px-4">
                    $ {album.price}
                  </div>
                </div>
                <div className="flex content-center justify-center items-center text-center">
                  <div
                    className="flex bg-teal rounded-full text-[27px] font-semibold text-white mt-8 px-8 py-2 w-max text-center justify-center cursor-pointer"
                    onClick={orderNow}
                  >
                    Order Now
                  </div>
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
export default Albums;
