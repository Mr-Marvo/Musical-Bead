import React, { useState } from "react";
import "./Cart.css";
import { NewFooter, NewHeader } from "../../../components/system";
import { AiOutlineShoppingCart } from "react-icons/ai";
import MyAlbumImg from "../../../assets/images/system/MyAlbumImg.png";
import { useEffect } from "react";
import { useContentContext } from "../../../providers/ContentContext";
import axios from "axios";
import { DefaultAlbum, TagTop } from "../../../assets";
import LoadingCircle from "../../../components/Common/LoadingCircle";
import SuccessAlert from "../../../components/Common/SuccessAlert";
import ErrorAlert from "../../../components/Common/ErrorAlert";

function Cart() {
  let { url } = useContentContext();
  const token = localStorage.getItem("token");
  const [cartItems, setCartItems] = useState([]);

  const [total, setTotal] = useState(0);

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

  useEffect(() => {
    loadCartData();
  }, []);

  const loadCartData = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      user_id: localStorage.getItem("userid"),
    };

    axios
      .post(url + "/cart/all", bodyParameters, config)
      .then((response) => {
        console.log(response);
        if (response?.status === 200) {
          setCartItems(response.data.output);
          var tot = 0;
          response.data.output.forEach((item) => {
            if (item.album_qty !== 0) {
              let x = item.album_qty * item.album_amount;
              tot = tot + x;
            }
            if (item.bead_qty !== 0) {
              let x = item.bead_qty * item.bead_amount;
              tot = tot + x;
            }
          });
          setTotal(tot);
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const buy = () => {
    console.log(total);
    if (total !== 0) {
      setIsLoadingCircle(true);
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const bodyParameters = {
        user_id: localStorage.getItem("userid"),
        user_type_id: localStorage.getItem("usertype"),
        total_amount: total,
        cart_data: cartItems,
      };

      axios
        .post(url + "/cart/buy", bodyParameters, config)
        .then((response) => {
          if (response?.status === 200) {
            window.location.replace(response.data.output.payment_link);
          } else {
            console.log(response);
            setErrorTitle("Order Failed!");
            setErrorShow(true);
          }
          setIsLoadingCircle(false);
        })
        .catch((error) => {
          setIsLoadingCircle(false);
          console.log(error);
          setErrorTitle("Order Failed!");
          setErrorShow(true);
        });
    } else {
      setErrorTitle("Add Items to Cart!");
      setErrorShow(true);
    }
  };

  return (
    <>
      <NewHeader />
      <main>
        <div className="cart_container">
          <div className="cart_subcontainer">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: "50px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <AiOutlineShoppingCart
                  style={{
                    color: "#fff",
                    fontSize: "40px",
                    marginRight: "20px",
                  }}
                />
                <p
                  style={{ color: "#fff", fontSize: "24px", fontWeight: "700" }}
                >
                  MY CART
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p
                  style={{
                    color: "#2AAEC0",
                    fontSize: "24px",
                    fontWeight: "400",
                  }}
                >
                  Delete
                </p>
              </div>
            </div>

            <div className="item_content">
              <div className="item_wrap font-nunito">
                <div className="item_container">
                  {cartItems.length === 0 ? (
                    <div className="flex text-white text-xl font-semibold">
                      No Items in Cart
                    </div>
                  ) : (
                    <>
                      {cartItems.map((item) => {
                        return (
                          <>
                            {item.album_id === 0 ? (
                              <>
                                <div className="rounded-lg w-[200px] bg-white h-full content-center justify-center items-center text-center cursor-pointer">
                                  <div className="flex flex-col p-3 justify-center items-center">
                                    <img
                                      src={TagTop}
                                      className="3xl:w-[120px] w-[80px]"
                                      alt="Bead"
                                    />
                                    <div className="flex bg-tag-bottom bg-cover bg-center w-[70px] h-[62px] 3xl:w-[200px] 3xl:h-[190px] justify-center items-center">
                                      <img
                                        src={
                                          item.bead_image !== null
                                            ? item.bead_image
                                            : DefaultAlbum
                                        }
                                        className="flex 3xl:w-[135px] w-[48px] rounded-full mb-1 3xl:mb-4 3xl:mr-1"
                                        alt="Bead"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <p
                                    style={{ fontWeight: 700 }}
                                    className="fs24"
                                  >
                                    {item.bead_title}
                                  </p>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <input
                                    type="number"
                                    value={item.bead_qty}
                                    disabled={true}
                                    style={{
                                      backgroundColor: "rgba(0,0,0,.52)",
                                      padding: "7px",
                                      textAlign: "center",
                                      fontWeight: 400,
                                    }}
                                    className="fs32 w60"
                                  />
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <p
                                    style={{ fontWeight: 500 }}
                                    className="fs32"
                                  >
                                    US ${item.bead_amount * item.bead_qty}
                                  </p>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="rounded-lg w-[200px] bg-white h-full content-center justify-center items-center text-center cursor-pointer">
                                  <div className="flex flex-col p-3 justify-center items-center">
                                    <img
                                      src={
                                        item.album_image !== null
                                          ? item.album_image
                                          : DefaultAlbum
                                      }
                                      alt="default album"
                                      className="rounded-xl"
                                      style={{
                                        width: "180px",
                                        height: "200px",
                                      }}
                                    />
                                  </div>
                                </div>

                                <div>
                                  <p
                                    style={{ fontWeight: 700 }}
                                    className="fs24"
                                  >
                                    {item.album_title}
                                  </p>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <input
                                    type="number"
                                    value={item.album_qty}
                                    disabled={true}
                                    style={{
                                      backgroundColor: "rgba(0,0,0,.52)",
                                      padding: "7px",
                                      textAlign: "center",
                                      fontWeight: 400,
                                    }}
                                    className="fs32 w60"
                                  />
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <p
                                    style={{ fontWeight: 500 }}
                                    className="fs32"
                                  >
                                    US ${item.album_qty * item.album_amount}
                                  </p>
                                </div>
                              </>
                            )}
                          </>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="detail_container">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontWeight: 400 }} className="fs28">
                  Sub Total
                </p>
                <p style={{ fontWeight: 400 }} className="fs28">
                  US ${total}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontWeight: 400 }} className="fs28">
                  Shipping
                </p>
                <p style={{ fontWeight: 400 }} className="fs28">
                  US $0.00
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{ fontWeight: 400, color: "#2AAEC0" }}
                  className="fs28"
                >
                  Total
                </p>
                <p
                  style={{ fontWeight: 400, color: "#2AAEC0" }}
                  className="fs28"
                >
                  US ${total}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "40px",
                }}
              >
                <button
                  style={{ fontWeight: "500", color: "#514F4F" }}
                  className="fs32"
                  onClick={() => {
                    window.location.replace("/home");
                  }}
                >
                  Countinue Shopping
                </button>
                <button
                  style={{
                    fontWeight: "700",
                    background:
                      "linear-gradient(270deg, #2AAEC0 0%, #12E45A 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "60px",
                    borderRadius: "20px",
                    width: "350px",
                    color: "black",
                  }}
                  className="fs32"
                  onClick={buy}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
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

export default Cart;
