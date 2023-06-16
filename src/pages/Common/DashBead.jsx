import React, { useState } from "react";
import { TagTop } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { useContentContext } from "../../providers/ContentContext";
import LoadingCircle from "../../components/Common/LoadingCircle";
import SuccessAlert from "../../components/Common/SuccessAlert";
import ErrorAlert from "../../components/Common/ErrorAlert";
import axios from "axios";

const DashBead = ({ bead }) => {
  const navigate = useNavigate();
  const usertype = localStorage.getItem("usertype");
  let { url } = useContentContext();
  const token = localStorage.getItem("token");

  const view = () => {
    navigate("/beadview", { state: { bead: bead } });
  };

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

  const addToCart = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      user_id: localStorage.getItem("userid"),
      bead_id: bead.bead_id,
      album_id: 0,
      cart_type_id: 1,
      qty: 1,
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
        setIsLoadingCircle(false);
      })
      .catch((error) => {
        setIsLoadingCircle(false);
        console.log(error);
        setErrorTitle("Qty not available!");
        setErrorShow(true);
      });
  };

  return (
    <>
      <div className="flex flex-col p-4  w-[250px] rounded overflow-hidden shadow-lg border-[1px] border-teal m-4 productCard">
        <div
          className="rounded-lg w-full bg-white h-full content-center justify-center items-center text-center cursor-pointer"
          onClick={view}
        >
          <div className="flex flex-col p-3 justify-center items-center">
            <img src={TagTop} className="3xl:w-[120px] w-[80px]" alt="Bead" />
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
          <div
            className="font-semibold text-[25px] text-white cursor-pointer"
            onClick={view}
          >
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
          <div className="flex content-center justify-center items-center text-center">
            {usertype === "1" ? (
              <></>
            ) : (
              <>
                {bead.available_qty !== 0 ? (
                  <button
                    className="flex bg-teal rounded-full text-[22px] font-semibold text-white mt-8 px-8 py-2 w-max text-center justify-center cursor-pointer"
                    onClick={addToCart}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="text-bold text-xl text-red-400 mt-4">
                    SOLD OUT
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <LoadingCircle show={isLoadingClircle} />
      <SuccessAlert
        show={successShow}
        message={successTitle}
        onClose={successClose}
      />
      <ErrorAlert show={errorShow} message={errorTitle} onClose={errorClose} />
    </>
  );
};

export default DashBead;
