import React,{useState} from "react";
import "../../App.css";
import { ProfileImage, SingerIcon } from "../../assets";
import { NewFooter, NewHeader } from "../../components/system";
import { RiArrowUpSFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";

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

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
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
                <h1>$2300.00</h1>
                <span className="text-white font-nunito text-[20px] font-light text-center">
                  Total Earnings
                </span>
              </div>
              <div>
                <h1>$500.00</h1>
                <span className="text-white font-nunito text-[20px] font-light text-center">
                  Total Fees
                </span>
              </div>
              <div>
                <h1>$000.00</h1>
                <span className="text-white font-nunito text-[20px] font-light text-center">
                  Total Purchases
                </span>
              </div>
              <div>
                <h1>110</h1>
                <span className="text-white font-nunito text-[20px] font-light text-center">
                  Total Sales
                </span>
              </div>
              <div>
                <h1>30</h1>
                <span className="text-white font-nunito text-[20px] font-light text-center">
                  Total Ships
                </span>
              </div>
              <div>
                <h1>80</h1>
                <span className="text-white font-nunito text-[20px] font-light text-center">
                  Shipped
                </span>
              </div>
            </div>
            <div className="sub2_sub2">
              <h1>$1800.00</h1>
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
            <div style={{display:'flex',flexDirection:'row'}}>
                <pre className="text-[#555555] text-base font-medium">
                    Last 3 Months
                </pre>
                {isCollapsed ? (
                    <RiArrowUpSFill fontSize={20} color="#555555" onClick={handleToggleCollapse}/>
                ) : (
                    <RiArrowDownSFill fontSize={20} color="#555555" onClick={handleToggleCollapse}/>
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
                  <th></th>
                  <th>ORDER NUMBER</th>
                  <th>DATE</th>
                  <th>ORDER STATUS</th>
                  <th>TRACKING NUMBER</th>
                  <th>ORDER DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={ProfileImage}
                      alt="User"
                      className="singer_image"
                    />
                  </td>
                  <td>O-000-001</td>
                  <td>2023-03-22</td>
                  <td>
                    <button
                      type="button"
                      className="view_btn"
                      style={{ backgroundColor: "#12E4A5" }}
                    >
                      TO SHIP
                    </button>
                  </td>
                  <td>-</td>
                  <td>
                    <button
                      type="button"
                      className="view_btn border-[1px] border-[#2AAEC0]"
                    >
                      VIEW
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={ProfileImage}
                      alt="User"
                      className="singer_image"
                    />
                  </td>
                  <td>O-000-001</td>
                  <td>2023-03-22</td>
                  <td>
                    <button
                      type="button"
                      className="view_btn"
                      style={{ backgroundColor: "#12E4A5" }}
                    >
                      TO SHIP
                    </button>
                  </td>
                  <td>-</td>
                  <td>
                    <button
                      type="button"
                      className="view_btn border-[1px] border-[#2AAEC0]"
                    >
                      VIEW
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={ProfileImage}
                      alt="User"
                      className="singer_image"
                    />
                  </td>
                  <td>O-000-001</td>
                  <td>2023-03-22</td>
                  <td>
                    <button
                      type="button"
                      className="view_btn"
                      style={{ backgroundColor: "#E49D12" }}
                    >
                      SHIPPED
                    </button>
                  </td>
                  <td>TR00-001-002</td>
                  <td>
                    <button
                      type="button"
                      className="view_btn border-[1px] border-[#2AAEC0]"
                    >
                      VIEW
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={ProfileImage}
                      alt="User"
                      className="singer_image"
                    />
                  </td>
                  <td>O-000-001</td>
                  <td>2023-03-22</td>
                  <td>
                    <button
                      type="button"
                      className="view_btn"
                      style={{ backgroundColor: "#545454" }}
                    >
                      COMPLETED
                    </button>
                  </td>
                  <td>TR00-001-002</td>
                  <td>
                    <button
                      type="button"
                      className="view_btn border-[1px] border-[#2AAEC0]"
                    >
                      VIEW
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={ProfileImage}
                      alt="User"
                      className="singer_image"
                    />
                  </td>
                  <td>O-000-001</td>
                  <td>2023-03-22</td>
                  <td>
                    <button
                      type="button"
                      className="view_btn"
                      style={{ backgroundColor: "#E49D12" }}
                    >
                      SHIPPED
                    </button>
                  </td>
                  <td>TR00-001-002</td>
                  <td>
                    <button
                      type="button"
                      className="view_btn border-[1px] border-[#2AAEC0]"
                    >
                      VIEW
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
