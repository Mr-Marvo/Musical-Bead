import React, { useEffect } from "react";
import Popup from "../../components/Common/Popup2";
import { useState } from "react";
import { NewFooter, NewHeader } from "../../components/system";
import { useContentContext } from "../../providers/ContentContext";
import axios from "axios";
import SuccessAlert from "../../components/Common/SuccessAlert";
import ErrorAlert from "../../components/Common/ErrorAlert";

const MyOrders = () => {
  let { url } = useContentContext();
  const token = localStorage.getItem("token");
  const [viewOrder, setViewOrder] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);

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

  const closeOrder = () => {
    setViewOrder(false);
  };

  const showOrderDetails = (order) => {
    setSelectedOrder(order);
    setViewOrder(true);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      user_id: localStorage.getItem("usertype") === '1' ? 0 : localStorage.getItem("userid"),
    };

    axios
      .post(url + "/order/all", bodyParameters, config)
      .then((response) => {
        console.log(response);
        if (response?.status === 200) {
          setOrders(response.data.output);
        } else {
          console.log(response);
          setErrorTitle("Error");
          setErrorShow(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorTitle("Error");
        setErrorShow(true);
      });
  };

  return (
    <>
      <NewHeader />

      {/* Body Content */}
      <main className="font-nunito h-screen">
        <div className="earning_container2">
          <div>
            <pre className="headline_left">Order History</pre>
          </div>
          <div
            className="tbl_container"
            style={{ overflowX: "auto", width: "100%" }}
          >
            <table className="text-white font-nunito">
              <thead>
                <tr>
                  <th>ORDER NUMBER</th>
                  <th>DATE</th>
                  <th>ORDER STATUS</th>
                  <th>ORDER DETAILS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  return (
                    <tr>
                      <td>{order.order_number}</td>
                      <td>{order.logistics[0].date}</td>
                      <td>
                        {order.order_status_id === 1 ? (
                          <button
                            type="button"
                            className="view_btn"
                            style={{ backgroundColor: "#12E4A5" }}
                          >
                            TO SHIP
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="view_btn"
                            style={{ backgroundColor: "#E49D12" }}
                          >
                            SHIPPED
                          </button>
                        )}
                      </td>
                      <td>
                        <button
                          type="button"
                          className="view_btn border-[1px] border-[#2AAEC0]"
                          onClick={() => {
                            showOrderDetails(order);
                          }}
                        >
                          VIEW
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <NewFooter />
      <SuccessAlert
        show={successShow}
        message={successTitle}
        onClose={successClose}
      />
      <ErrorAlert show={errorShow} message={errorTitle} onClose={errorClose} />
      <Popup show={viewOrder} order={selectedOrder} onClose={closeOrder} />
    </>
  );
};

export default MyOrders;
