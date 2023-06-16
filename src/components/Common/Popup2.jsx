import React, { useState, useRef } from "react";
import "./Popup.css"; // Import the CSS file for Popup component
import "./Popup2.css"; // Import the CSS file for Popup component
import { DocumentIcon, ImageIcon, MusicIcon, VideoIcon } from "../../assets";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { useContentContext } from "../../providers/ContentContext";
import LoadingCircle from "./LoadingCircle";
import AlbumImg from "../../assets/images/system/Rectangle 140.png";

const Popup = ({ show, onClose, order }) => {

  return (
    <>
      {show && (
        <div className="popup-background">
          <div className="popup-box-wrap2">
            <div className="popup-box2">
              <div className="popup-header" style={{ position: "relative" }}>
                <p
                  className="pop_addsong font-nunito"
                  style={{ color: "white", fontSize: "15px", fontWeight: 400 }}
                >
                  ORDER DETAILS
                </p>
                <button
                  className="close-button"
                  onClick={onClose}
                  style={{ position: "absolute", top: "0", right: "0" }}
                >
                  <RxCross2 />
                </button>
              </div>
              <div className="detal_wrap">
                {/* <div
                  style={{
                    width: "30%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#fff",
                      marginBottom: "30px",
                    }}
                  ></p>
                  <img src={AlbumImg} alt="" style={{ width: "120px" }} />
                  <p
                    style={{ fontWeight: 700, fontSize: "16px", color: "#fff" }}
                  >
                    Album Name Lorem ipsum dolor sit amet
                  </p>
                  <p
                    style={{
                      fontWeight: 700,
                      color: "#2AAEC0",
                      marginTop: "20px",
                      fontSize: "12px",
                    }}
                  >
                    Lorem ipsum dolor sit{" "}
                  </p>
                </div> */}

                <div
                  style={{
                    width: "70%",
                    height: "100%",
                    borderLeft: "1px solid #4E4E4E",
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "8px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#fff",
                      marginBottom: "20px",
                    }}
                  >
                    ORDER NUMBER : {order.order_number}
                  </p>
                  {/* <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "90%",
                      marginBottom: "5px",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        color: "#888585",
                        width: "50%",
                      }}
                    >
                      Color:
                    </p>
                    <label className="container2">
                      <span
                        className="checkmark2"
                        style={{ backgroundColor: "#BD8A4E" }}
                      ></span>
                    </label>
                  </div> */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "90%",
                      marginBottom: "5px",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        color: "#888585",
                        width: "50%",
                      }}
                    >
                      Quantity:
                    </p>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "#fff",
                        width: "50%",
                      }}
                    >
                      {order.cart_items[0].album_id === 0
                        ? order.cart_items[0].bead_qty
                        : order.cart_items[0].album_qty}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "90%",
                      marginBottom: "5px",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        color: "#888585",
                        width: "50%",
                      }}
                    >
                      Name :
                    </p>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "#fff",
                        width: "50%",
                      }}
                    >
                      {order.cart_items[0].album_id === 0
                        ? order.cart_items[0].bead_name
                        : order.cart_items[0].album_name}
                    </p>
                  </div>
                  {/* <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "90%",
                      marginBottom: "5px",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        color: "#888585",
                        width: "50%",
                      }}
                    >
                      Shipping Address :{" "}
                    </p>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "#fff",
                        width: "50%",
                      }}
                    >
                      Lorem ips um dolor sit amet, conse ctetur adipi sc ing,
                    </p>
                  </div> */}
                  {/* <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "90%",
                      marginBottom: "5px",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        color: "#888585",
                        width: "50%",
                      }}
                    >
                      Phone number :{" "}
                    </p>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "#fff",
                        width: "50%",
                      }}
                    >
                      +1 123 456 789
                    </p>
                  </div> */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "90%",
                      marginBottom: "5px",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        color: "#888585",
                        width: "50%",
                      }}
                    >
                      Total amount :
                    </p>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "#fff",
                        width: "50%",
                      }}
                    >
                      US $ {order.order_total}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "90%",
                      marginBottom: "5px",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        color: "#888585",
                        width: "50%",
                      }}
                    >
                      Payment status :
                    </p>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "#fff",
                        width: "40%",
                      }}
                    >
                      {order.order_status_id === 1
                        ? "Order Placed"
                        : "Order Shipped"}
                    </p>
                  </div>
                </div>
                {/* <div
                  style={{ width: "25%", height: "100%", position: "relative" }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#fff",
                      marginBottom: "30px",
                      marginLeft: "5px",
                    }}
                  >
                    SHIP ORDER
                  </p>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#fff",
                      width: "100%",
                      marginLeft: "5px",
                    }}
                  >
                    Carrier
                  </p>
                  <input
                    type="text"
                    style={{
                      background: "#484848",
                      marginLeft: "5px",
                      borderRadius: "7px",
                      width: "100%",
                      marginBottom: "10px",
                    }}
                  />
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#fff",
                      width: "100%",
                      marginLeft: "5px",
                    }}
                  >
                    Enter Tracking Number
                  </p>
                  <input
                    type="text"
                    style={{
                      background: "#484848",
                      marginLeft: "5px",
                      borderRadius: "7px",
                      width: "100%",
                      marginBottom: "10px",
                    }}
                  />
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#fff",
                      width: "100%",
                      marginLeft: "5px",
                    }}
                  >
                    Note (Optional)
                  </p>
                  <textarea
                    type="text"
                    style={{
                      background: "#484848",
                      marginLeft: "5px",
                      borderRadius: "7px",
                      width: "100%",
                      marginBottom: "10px",
                    }}
                  />
                  <button
                    style={{
                      color: "#fff",
                      background: "#2AAEC0",
                      padding: "5px",
                      borderRadius: "15px",
                      marginTop: "40%",
                      marginLeft: "15px",
                    }}
                  >
                    MARK AS SHIPPED
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
