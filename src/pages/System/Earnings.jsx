import React from "react";
import "../../App.css";
import { SingerIcon } from "../../assets";
import { NewFooter, NewHeader } from "../../components/system";

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

  return (
    <>
        <NewHeader />

      {/* Body Content */}
      <main className="font-nunito">
        <div className="earning_container1">
          <div className="earning_container1_sub1">
            <pre  style={{color:'white'}}>{day}</pre>
          </div>
          <div className="earning_container1_sub2">
            <div className="sub2_sub1">
              <div>
                <h1>$2300.00</h1>
                <span style={{color:'white'}}>Total Earnings</span>
              </div>
              <div>
                <h1>$500.00</h1>
                <span style={{color:'white'}}>Total Fees</span>
              </div>
              <div>
                <h1>$000.00</h1>
                <span style={{color:'white'}}>Total Purchases</span>
              </div>
              <div>
                <h1>110</h1>
                <span style={{color:'white'}}>Total Sales</span>
              </div>
              <div>
                <h1>30</h1>
                <span style={{color:'white'}}>Total Ships</span>
              </div>
              <div>
                <h1>80</h1>
                <span style={{color:'white'}}>Shipped</span>
              </div>
            </div>
            <div className="sub2_sub2">
              <h1>$1800.00</h1>
              <span style={{color:'white'}}>Available Funds</span>
              <button type="button" className="withdraw_btn" style={{color:'white'}}>
                Withdraw
              </button>
            </div>
          </div>
        </div>
        <div className="earning_container2">
          <div>
            <pre className="headline_left" style={{marginBottom:'25px'}}>Order History</pre>
            <pre style={{color:'white'}}>Last 3 Months</pre>
          </div>
          <div
            className="tbl_container"
            style={{ overflowX: "auto", width: "100%" }}
          >
            <table style={{color:'white'}}>
              <thead>
                <tr>
                  <th></th>
                  <th>Order Number</th>
                  <th>Date</th>
                  <th>Order Status</th>
                  <th>Tracing Number</th>
                  <th>Order Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={SingerIcon}
                      alt="User Image"
                      className="singer_image"
                    />
                  </td>
                  <td>O-000-001</td>
                  <td>2023-03-22</td>
                  <td>
                    <button
                      type="button"
                      className="view_btn"
                      style={{ backgroundColor: "#059f3b" }}
                    >
                      To Ship
                    </button>
                  </td>
                  <td>-</td>
                  <td>
                    <button type="button" className="view_btn">
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={SingerIcon}
                      alt="User Image"
                      className="singer_image"
                    />
                  </td>
                  <td>O-000-001</td>
                  <td>2023-03-22</td>
                  <td>
                    <button
                      type="button"
                      className="view_btn"
                      style={{ backgroundColor: "#059f3b" }}
                    >
                      To Ship
                    </button>
                  </td>
                  <td>-</td>
                  <td>
                    <button type="button" className="view_btn">
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={SingerIcon}
                      alt="User Image"
                      className="singer_image"
                    />
                  </td>
                  <td>O-000-001</td>
                  <td>2023-03-22</td>
                  <td>
                    <button
                      type="button"
                      className="view_btn"
                      style={{ backgroundColor: "#c5d513" }}
                    >
                      Shipped
                    </button>
                  </td>
                  <td>TR00-001-002</td>
                  <td>
                    <button type="button" className="view_btn">
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={SingerIcon}
                      alt="User Image"
                      className="singer_image"
                    />
                  </td>
                  <td>O-000-001</td>
                  <td>2023-03-22</td>
                  <td>
                    <button
                      type="button"
                      className="view_btn"
                      style={{ backgroundColor: "gray" }}
                    >
                      Completed
                    </button>
                  </td>
                  <td>TR00-001-002</td>
                  <td>
                    <button type="button" className="view_btn">
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={SingerIcon}
                      alt="User Image"
                      className="singer_image"
                    />
                  </td>
                  <td>O-000-001</td>
                  <td>2023-03-22</td>
                  <td>
                    <button
                      type="button"
                      className="view_btn"
                      style={{ backgroundColor: "#c5d513" }}
                    >
                      Shipped
                    </button>
                  </td>
                  <td>TR00-001-002</td>
                  <td>
                    <button type="button" className="view_btn">
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <NewFooter />
    </>
  );
}

export default Earnings;
