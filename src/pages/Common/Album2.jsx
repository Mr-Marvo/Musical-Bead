import React, { useEffect, useRef } from "react";
import { Equalizer, PlayButton, TagTop } from "../../assets";
import { useNavigate } from "react-router";

const LongText = ({ text, maxLength }) => {
  const truncatedText =
    text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

  return <div>{truncatedText}</div>;
};

const Album = ({ album, isPlaying, onAlbumClick }) => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset the audio to the beginning
    }
  }, [isPlaying]);

  const handlePlay = () => {
    if (isPlaying) {
      onAlbumClick(null); // Stop the currently playing album
    } else {
      onAlbumClick(album.id); // Start playing this album
    }
  };

  const albumView = (id, album) => {
    navigate(`/album/${id}`, { state: { album: album } });
  };

  return (
    <div
      className="flex flex-row gap-3 justify-center items-center"
      style={{ width: "150px" }}
      onClick={() => {
        albumView(album.id, album);
      }}
    >
      <div className="flex flex-col bg-black w-fit h-fit rounded-xl p-4 relative">
        <div className="flex">
          <img
            src={album.cover_image_path}
            alt="default album"
            className="rounded-xl"
          />
          <div className="absolute right-4 bottom-4">
            <div className="flex flex-col">
              <img
                src={TagTop}
                className="3xl:w-[120px] w-[60px]"
                alt="Bead"
                style={{ width: "45px" }}
              />
              <div
                className="flex bg-tag-bottom bg-cover bg-center w-[60px] h-[55px] 3xl:w-[200px] 3xl:h-[190px] justify-center items-center"
                style={{ width: "45px", height: "42px" }}
              >
                <img
                  src={album.cover_image_path}
                  className="flex 3xl:w-[135px] w-[40px] rounded-full mb-1 3xl:mb-4 3xl:mr-1"
                  alt="Bead"
                  style={{ width: "20px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <audio ref={audioRef} src={album.sample_url} />
        <div className="flex text-[16px] font-normal text-[#BA55C2] mt-1 overflow-hidden text-ellipsis whitespace-nowrap">
          <LongText text={album.title} maxLength={8} />
        </div>
        <div className="flex flex-row gap-4 mt-2">
          <div className="flex">
            <img src={Equalizer} alt="equalizer" style={{ width: "15px" }} />
          </div>
          <div className="flex">
            <img
              src={PlayButton}
              alt="playbutton"
              style={{ width: "15px" }}
              onClick={(e) => {
                e.stopPropagation();
                handlePlay();
              }}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
