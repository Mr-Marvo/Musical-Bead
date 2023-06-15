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
import LoadingCircle from "../../../components/Common/LoadingCircle";
import SuccessAlert from "../../../components/Common/SuccessAlert";
import ErrorAlert from "../../../components/Common/ErrorAlert";

function AlbumView() {
  const usertype = localStorage.getItem("usertype");
  let { url } = useContentContext();
  const token = localStorage.getItem("token");

  const { state } = useLocation();
  const { bead } = state;

  const [isLoadingClircle, setIsLoadingCircle] = useState(false);
  const [successTitle, setSuccessTitle] = useState();
  const [successShow, setSuccessShow] = useState(false);
  const [errorTitle, setErrorTitle] = useState();
  const [errorShow, setErrorShow] = useState(false);

  const successClose = () => {
    setSuccessShow(false);
  };
  const errorClose = () => {
    setErrorShow(false);
  };

  const [num, setNum] = useState(0);
  const handlePlus = () => {
    if (num < bead.available_qty) {
      setNum(num + 1);
    } else {
      setErrorTitle("Qty not available!");
      setErrorShow(true);
    }
  };
  const handleMinus = () => {
    if (num - 1 < 0) {
      setNum(0);
    } else {
      setNum(num - 1);
      setErrorTitle("Qty not available!");
      setErrorShow(true);
    }
  };

  useEffect(() => {
    console.log(bead);
  }, []);

  const addToCart = () => {
    if (num !== 0) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const bodyParameters = {
        user_id: localStorage.getItem("userid"),
        bead_id: bead.bead_id,
        album_id: 0,
        cart_type_id: 1,
        qty: num,
      };

      axios
        .post(url + "/cart/add", bodyParameters, config)
        .then((response) => {
          if (response?.status === 200) {
            setSuccessTitle("Bead Added!");
            setSuccessShow(true);
          } else {
            console.log(response);
            setErrorTitle("Qty not available!");
            setErrorShow(true);
          }
        })
        .catch((error) => {
          console.log(error);
          setErrorTitle("Qty not available!");
          setErrorShow(true);
        });
    } else {
      setErrorTitle("Add Quantity!");
      setErrorShow(true);
    }
  };

  return (
    <>
      <NewHeader />

      <main>
        <div className="bead_view_main_container">
          <div className="bead_view_left_container">
            <div
              className="flex flex-col p-4 w-full rounded overflow-hidden shadow-lg border-[1px] border-teal m-4 productCard"
              style={{ width: "300px", padding: "20px" }}
            >
              <div className="rounded-lg w-full bg-white h-full content-center justify-center items-center text-center cursor-pointer">
                <div className="flex flex-col p-3 justify-center items-center pt-16 bp-8">
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
              </div>
            </div>
          </div>
          <div
            className="bead_view_right_container"
            style={{ color: "#fff", fontSize: 18 }}
          >
            <span className="album_heading font-nunito">Bead</span>
            <p className="font-bold text-3xl">{bead.title}</p>
            <p className="font-light">Model : {bead.model_number}</p>
            <p className="font-light mt-2">
              Features <br />{" "}
              <p className="font-bold text-xl">{bead.features}</p>
            </p>
            <p className="font-light mt-2">
              Dimensions <br />{" "}
              <p className="font-bold text-xl">{bead.dimension}</p>
            </p>
            <p className="font-light mt-2">
              Key Ring
              <br /> <p className="font-bold text-xl">{bead.key_ring}</p>
            </p>
            <p className="font-light mt-2">
              Sold <br />{" "}
              <p className="font-bold text-xl">
                {bead.sold_qty}/{bead.total_qty}
              </p>
            </p>

            {bead.available_qty !== 0 ? (
              <>
                {usertype === "3" ? (
                  <>
                    <div
                      className="wrapper"
                      style={{
                        width: "160px",
                        height: "50px",
                        marginTop: "12px",
                      }}
                    >
                      <button
                        className="plusminus"
                        onClick={handleMinus}
                        style={{
                          borderTopLeftRadius: "25px",
                          borderBottomLeftRadius: "25px",
                          height: "50px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
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
                          height: "50px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="add_cart_btn"
                      style={{ marginTop: "16px", marginBottom: "10px" }}
                    >
                      <img
                        src={btn_img}
                        alt="btn-img"
                        width="200px"
                        onClick={addToCart}
                      />
                    </button>
                  </>
                ) : (
                  <></>
                )}
                {/* <button
              style={{
                width: "240px",
                background: "green",
                borderRadius: 15,
                height: 45,
                fontSize: 22,
                fontWeight: "400",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              BUY NOW
            </button> */}
              </>
            ) : (
              <div className="mt-16 text-3xl font-bold mb-8">SOLD OUT</div>
            )}
          </div>
        </div>
      </main>
      <NewFooter />
      <LoadingCircle show={isLoadingClircle} />
      <SuccessAlert
        show={successShow}
        message={successTitle}
        onClose={successClose}
      />
      <ErrorAlert show={errorShow} message={errorTitle} onClose={errorClose} />
    </>
  );
}

export default AlbumView;
