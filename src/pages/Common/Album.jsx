import React from "react";
import { Equalizer, PlayButton, TagTop } from "../../assets";
import { useRef } from "react";
import { useEffect } from "react";

const LongText = ({ text, maxLength }) => {
  const truncatedText =
    text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

  return <div>{truncatedText}</div>;
};

const Album = ({ id, cover, name, slogan, audio, isPlaying, onAlbumClick }) => {
  const audioRef = useRef(null);

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
      onAlbumClick(id); // Start playing this album
    }
  };
  return (
    <div className="flex flex-row gap-3 w-[240px] h-120 justify-center items-center my-2">
      <div className="flex flex-col bg-black w-fit h-fit rounded-xl p-4 relative">
        <div className="flex">
          <div className="relative">
            <img src={cover} alt="default album" className="rounded-xl" />
            <div className="absolute text-white bottom-1 left-2 w-1/2 overflow-hidden h-6">
              <LongText text={name} maxLength={20} />
            </div>
          </div>
          <div className="absolute right-4 bottom-4">
            <div className="flex flex-col">
              <img src={TagTop} className="3xl:w-[120px] w-[60px]" alt="Bead" />
              <div className="flex bg-tag-bottom bg-cover bg-center w-[60px] h-[55px] 3xl:w-[200px] 3xl:h-[190px] justify-center items-center">
                <img
                  src={cover}
                  className="flex 3xl:w-[135px] w-[40px] rounded-full mb-1 3xl:mb-4 3xl:mr-1"
                  alt="Bead"
                />
              </div>
            </div>
          </div>
        </div>
        <audio ref={audioRef} src={audio} />
        <div className="flex text-[12px] font-normal text-[#BA55C2] mt-1 overflow-hidden text-ellipsis whitespace-nowrap">
          <LongText text={slogan} maxLength={20} />
        </div>
        <div className="flex flex-row gap-4 mt-2">
          <div className="flex">
            <img src={Equalizer} alt="equalizer" />
          </div>
          <div className="flex">
            <img src={PlayButton} alt="playbutton" onClick={handlePlay} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
