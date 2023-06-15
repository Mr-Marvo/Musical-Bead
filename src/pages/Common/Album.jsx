import React from "react";
import { Equalizer, PauseButton, PlayButton, TagTop } from "../../assets";
import { useRef } from "react";
import { useEffect } from "react";
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
      className="flex flex-row gap-3 w-[240px] h-120 justify-center items-center my-2"
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
        </div>
        <audio ref={audioRef} src={album.sample_url} />
        <div className="flex text-[16px] font-normal text-[#BA55C2] mt-1 overflow-hidden text-ellipsis whitespace-nowrap">
          <LongText text={album.title} maxLength={20} />
        </div>
        <div className="flex flex-row gap-4 mt-2">
          <div className="flex">
            <img src={Equalizer} alt="equalizer" />
          </div>
          <div className="flex">
            <img
              src={isPlaying ? PauseButton : PlayButton}
              alt="playbutton"
              onClick={(e) => {
                e.stopPropagation();
                handlePlay();
              }}
              className="cursor-pointer z-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
