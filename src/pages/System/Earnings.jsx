import React, { useEffect, useState } from "react";
import "../../App.css";
import { ProfileImage, SingerIcon } from "../../assets";
import { NewFooter, NewHeader } from "../../components/system";
import { RiArrowUpSFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";
import { useContentContext } from "../../providers/ContentContext";
import axios from "axios";
import SuccessAlert from "../../components/Common/SuccessAlert";
import ErrorAlert from "../../components/Common/ErrorAlert";
import Popup from "../../components/Common/Popup2";

function Earnings() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthIndex = new Date().getMonth();
  let monthName = monthNames[monthIndex];
  let year = new Date().getFullYear();
  let day = monthName + ", " + year;

  const [isCollapsed, setIsCollapsed] = useState(true);
  let { url } = useContentContext();
  const token = localStorage.getItem("token");

  const [successTitle, setSuccessTitle] = useState();
  const [successShow, setSuccessShow] = useState(false);
  const [errorTitle, setErrorTitle] = useState();
  const [errorShow, setErrorShow] = useState(false);
  const [viewOrder, setViewOrder] = useState(false);

  const [orders, setOrders] = useState([]);

  const successClose = () => {
    setSuccessShow(false);
  };
  const errorClose = () => {
    setErrorShow(false);
  };
  const closeOrder = () => {
    setViewOrder(false);
  };

  const [selectedOrder, setSelectedOrder] = useState(null);

  const showOrderDetails = (order) => {
    setSelectedOrder(order);
    setViewOrder(true);
  };

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    loadOrders();
    loadEarnings();
  }, []);

  const [data, setData] = useState([]);

  const loadEarnings = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      user_id: localStorage.getItem("userid"),
      user_type_id: 1,
    };

    axios
      .post(url + "/admin/dashboard", bodyParameters, config)
      .then((response) => {
        console.log(response);
        if (response?.status === 200) {
          setData(response.data.output);
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
  }

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
      <main className="font-nunito">
        <div className="earning_container1">
          <div className="earning_container1_sub1">
            <pre className="text-white">{day}</pre>
          </div>
          <div className="earning_container1_sub2">
            <div className="sub2_sub1">
              <div>
                <h1>$ {data.earnings?.total_earnings}</h1>
                <span className="text-white font-nunito text-[20px] font-light text-center">
                  Total Earnings
                </span>
              </div>
              <div>
                <h1>$ {data.earnings?.fees}</h1>
                <span className="text-white font-nunito text-[20px] font-light text-center">
                  Total Fees
                </span>
              </div>
              <div>
                <h1>$ {data.earnings?.pending_withdrawals}</h1>
                <span className="text-white font-nunito text-[20px] font-light text-center">
                  Pending
                </span>
              </div>
              <div>
                <h1>{data.order_summary_data?.completed_orders}</h1>
                <span className="text-white font-nunito text-[20px] font-light text-center">
                  Completed Sales
                </span>
              </div>
              <div>
                <h1>{data.order_summary_data?.to_be_shipped_orders}</h1>
                <span className="text-white font-nunito text-[20px] font-light text-center">
                  To Be Shipped
                </span>
              </div>
              <div>
                <h1>{data.order_summary_data?.new_orders}</h1>
                <span className="text-white font-nunito text-[20px] font-light text-center">
                  New Orders
                </span>
              </div>
            </div>
            <div className="sub2_sub2">
              <h1>$ {data.earnings?.available_balance}</h1>
              <span style={{ color: "white" }}>Available Funds</span>
              <button
                type="button"
                className="withdraw_btn"
                style={{ color: "white" }}
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
        <div className="earning_container2">
          <div>
            <pre className="headline_left">Order History</pre>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <pre className="text-[#555555] text-base font-medium">
                Last 3 Months
              </pre>
              {isCollapsed ? (
                <RiArrowUpSFill
                  fontSize={20}
                  color="#555555"
                  onClick={handleToggleCollapse}
                />
              ) : (
                <RiArrowDownSFill
                  fontSize={20}
                  color="#555555"
                  onClick={handleToggleCollapse}
                />
              )}
            </div>
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
}

export default Earnings;
