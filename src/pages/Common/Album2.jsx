
import React from "react";
import { DefaultAlbum, Equalizer, PlayButton, TagTop } from "../../assets";

const Album = () => {
  return (
   
        <div className="flex flex-row gap-3 w-200 h-120 justify-center items-center" style={{width:'120px'}}>
        <div className="flex flex-col bg-black w-fit h-fit rounded-xl p-4 relative">
            <div className="flex">
            <img src={DefaultAlbum} alt="default album" style={{width:'120px'}}/>
            <div className="absolute right-4 bottom-4">
                <div className="flex flex-col">
                <img
                    src={TagTop}
                    className="3xl:w-[120px] w-[60px]"
                    alt="Bead"
                    style={{width:'45px'}}
                />
                <div className="flex bg-tag-bottom bg-cover bg-center w-[60px] h-[55px] 3xl:w-[200px] 3xl:h-[190px] justify-center items-center" style={{width:'45px',height:'42px'}}>
                    <img
                    src={DefaultAlbum}
                    className="flex 3xl:w-[135px] w-[40px] rounded-full mb-1 3xl:mb-4 3xl:mr-1"
                    alt="Bead"
                    style={{width:'20px'}}
                    />
                </div>
                </div>
            </div>
            </div>
            <div className="flex text-[12px] font-normal text-[#BA55C2] mt-1" style={{width:'40px'}}>
            lore episu
            </div>
            <div className="flex flex-row gap-4 mt-2">
            <div className="flex">
                <img src={Equalizer} alt="equalizer" style={{width:'10px'}}/>
            </div>
            <div className="flex">
                <img src={PlayButton} alt="playbutton" style={{width:'10px'}}/>
            </div>
            </div>
        </div>
        </div>
    
  )
}
  


export default Album;