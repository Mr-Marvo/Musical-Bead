import React, { useEffect, useState } from "react";
import "./BeadView.css";
import { NewHeader, NewFooter } from "../../../components/system";
import {
  Bead,
  DefaultAlbum,
  EqualizerLarge,
  PauseButtonLarge,
  PlayButtonLarge,
  TagTop,
} from "../../../assets";

import img1 from "../../../assets/images/system/Rectangle 139.png";
import img2 from "../../../assets/images/system/Rectangle 140.png";
import img3 from "../../../assets/images/system/Rectangle 141.png";
import img4 from "../../../assets/images/system/Rectangle 142.png";
import img5 from "../../../assets/images/system/Rectangle 143.png";
import img6 from "../../../assets/images/system/Rectangle 144.png";
import btn_img from "../../../assets/images/system/Group 72.png";
import SingerImage from "../../../assets/images/system/profile.png";

import { useLocation, useNavigate, useParams } from "react-router";
import { useRef } from "react";
import axios from "axios";
import { useContentContext } from "../../../providers/ContentContext";

function AlbumView() {
    const [beadTitle,setBeadTitle] = useState("My Bead 1");
    const [beadModel,setBeadModel] = useState("My Bead Model");
    const [beadFeatures,setFeatures] = useState("My Features");
    const [beadDimension,setDimension] = useState("My Dimension");
    const [beadKey,setBeadKey] = useState("My BeadKey");
    const [beadQty,setBeadQty] = useState("8");


  const usertype = localStorage.getItem("usertype");
  let { url } = useContentContext();
  const token = localStorage.getItem("token");

  const { state } = useLocation();
  const { bead } = state;

  const [num, setNum] = useState(0);
  const handlePlus = () => {
    if (num + 1 < 11) {
      setNum(num + 1);
    } else {
      setNum(10);
    }
  };
  const handleMinus = () => {
    if (num - 1 < 0) {
      setNum(0);
    } else {
      setNum(num - 1);
    }
  };

  useEffect(() => {
    console.log(bead);
  }, []);

  return (
    <>
      <NewHeader />
     {/* <main>
        <div >
          <div className="album_view_left_container">
            <div className="album_view_container">
            <div className="flex flex-col p-4 w-full rounded overflow-hidden shadow-lg border-[1px] border-teal m-4 productCard">
              <div className="rounded-lg w-full bg-white h-full content-center justify-center items-center text-center cursor-pointer">
                <div className="flex flex-col p-3 justify-center items-center">
                  <img
                    src={TagTop}
                    className="3xl:w-[120px] w-[80px]"
                    alt="Bead"
                  />
                  <div className="flex bg-tag-bottom bg-cover bg-center w-[70px] h-[62px] 3xl:w-[200px] 3xl:h-[190px] justify-center items-center">
                    <img
                      src={bead.bead_image}
                      className="flex 3xl:w-[135px] w-[48px] rounded-full mb-1 3xl:mb-4 3xl:mr-1"
                      alt="Bead"
                    />
                  </div>
                </div>
              </div>
              <div className="py-4 content-center justify-center items-center text-center">
                <div className="font-semibold text-[25px] text-white cursor-pointer">
                  {bead.title}
                </div>
                <div className="text-[16px] text-[#979797] mb-2 -mt-2">
                  {bead.model_number}
                </div>
                <div className="flex content-center justify-center items-center text-center">
                  <div className="flex border-[1px] border-white text-xl font-medium rounded-xl w-max px-4 text-white">
                    $ {bead.price}
                  </div>
                </div>
              </div>
            </div> 
            </div>
          </div>
          <div className="album_view_middle_container">
            <span className="album_heading font-nunito">Album</span>
            <p className="album_sub_heading font-nunito">{bead.title}</p>
            <p>{bead.model_number}</p>

            <div className="wrapper">
              <button
                className="plusminus"
                onClick={handleMinus}
                style={{
                  borderTopLeftRadius: "25px",
                  borderBottomLeftRadius: "25px",
                }}
              >
                -
              </button>
              <input type="number" className="num" value={num} />
              <button
                className="plusminus"
                onClick={handlePlus}
                style={{
                  borderTopRightRadius: "25px",
                  borderBottomRightRadius: "25px",
                }}
              >
                +
              </button>
            </div>

            <span
              className="font-nunito"
              style={{
                color: "#fff",
                fontWeight: "700",
                margin: "0",
                marginBottom: "30px",
                marginTop: "20px",
                fontSize: "36px",
              }}
            >
              US ${bead.price}
            </span>

            {usertype !== "3" ? (
              <></>
            ) : (
              <>
                <button className="add_cart_btn">
                  <img src={btn_img} alt="btn-img" width="200px" />
                </button>
              </>
            )}
          </div>
        </div>
      </main>*/}

      <main>
        <div className="bead_view_main_container">
            <div className="bead_view_left_container">
                <div className="flex flex-col p-4 w-full rounded overflow-hidden shadow-lg border-[1px] border-teal m-4 productCard" style={{width:'300px',padding:'20px'}}>
                <div className="rounded-lg w-full bg-white h-full content-center justify-center items-center text-center cursor-pointer">
                    <div className="flex flex-col p-3 justify-center items-center">
                    <img
                        src={TagTop}
                        className="3xl:w-[120px] w-[80px]"
                        alt="Bead"
                    />
                    <div className="flex bg-tag-bottom bg-cover bg-center w-[70px] h-[62px] 3xl:w-[200px] 3xl:h-[190px] justify-center items-center">
                        <img
                        src={bead.bead_image}
                        className="flex 3xl:w-[135px] w-[48px] rounded-full mb-1 3xl:mb-4 3xl:mr-1"
                        alt="Bead"
                        />
                    </div>
                    </div>
                </div>
                <div className="py-4 content-center justify-center items-center text-center">
                    <div className="font-semibold text-[25px] text-white cursor-pointer">
                    {bead.title}
                    </div>
                    <div className="text-[16px] text-[#979797] mb-2 -mt-2">
                    {bead.model_number}
                    </div>
                    <div className="flex content-center justify-center items-center text-center">
                    <div className="flex border-[1px] border-white text-xl font-medium rounded-xl w-max px-4 text-white">
                        $ {bead.price}
                    </div>
                    </div>
                </div>
                </div> 
            </div>
            <div className="bead_view_right_container" style={{color:'#fff',fontSize:18}}>
                <span className="album_heading font-nunito">Bead</span>
                <p>Bead Name : {beadTitle}</p>
                <p>Bead Model : {beadModel}</p>
                <p>Features : {beadFeatures}</p>
                <p>Dimensions : {beadDimension}</p>
                <p>Key Ring : {beadKey}</p>
                <p>Qty/Total : {beadQty}</p>
                

                <div className="wrapper" style={{width:'160px',height:'50px',marginTop:'10px'}}>
                    <button
                        className="plusminus"
                        onClick={handleMinus}
                        style={{
                            borderTopLeftRadius: "25px",
                            borderBottomLeftRadius: "25px",
                            height:'50px',
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            textAlign:'center'
                        }}
                    >
                        -
                    </button>
                    <input type="number" className="num" value={num} />
                    <button
                        className="plusminus"
                        onClick={handlePlus}
                        style={{
                            borderTopRightRadius: "25px",
                            borderBottomRightRadius: "25px",
                            height:'50px',
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            textAlign:'center'
                        }}
                    >
                        +
                    </button>
                </div>

                <button className="add_cart_btn" style={{marginTop:'10px',marginBottom:'10px'}}>
                    <img src={btn_img} alt="btn-img" width="200px" />
                </button>
                <button style={{width:'240px',background:'green',borderRadius:15,height:45,fontSize:22,fontWeight:'400',marginTop:'10px',marginBottom:'10px'}}>
                  BUY NOW
                </button>
            </div>
        </div>
      </main>
      <NewFooter />
    </>
  );
}

export default AlbumView;
