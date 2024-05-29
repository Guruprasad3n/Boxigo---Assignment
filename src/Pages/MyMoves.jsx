import "./mymoves.css";
import { IoMdHome } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong, FaTruckMedical, FaPencil } from "react-icons/fa6";
import { BsBuildingUp } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";
const MyMoves = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://test.api.boxigo.in/sample-data/")
      .then((response) => response.json())
      .then((data) => setData(data.Customer_Estimate_Flow))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(data);

  return (
    <div>
      <h2>My Moves</h2>
      {data ? (
        <div>
          {data.map((move) => (
            <div
              key={move.estimate_id}
              style={{ borderBottom: "1px solid grey" }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginBottom: "10px",
                  justifyContent: "space-between",
                  padding: "10px",
                  alignItems: "center",
                }}
              >
                <div className="from_address">
                  <span>From</span>
                  <p>{move.moving_from}</p>
                </div>
                <div className="center_arrow">
                  {" "}
                  <FaArrowRightLong style={{ margin: "auto" }} />
                </div>
                <div className="to_address">
                  <span>To</span>
                  <p>{move.moving_to}</p>
                </div>
                <div className="request">
                  <span> Request#</span>
                  <p>{move.estimate_id}</p>
                </div>
              </div>

              <div className="bottomBar">
                <div className="icon_text">
                  <p>
                    {" "}
                    <IoMdHome style={{ color: "red", fontSize: "1.5rem" }} />
                  </p>
                  {move.property_size}
                </div>
                <div className="icon_text">
                  <p>
                    <BsBuildingUp
                      style={{ color: "red", fontSize: "1.5rem" }}
                    />
                  </p>
                  {move.total_items}
                </div>
                <div className="icon_text">
                  <p>
                    <GiPathDistance
                      style={{ color: "red", fontSize: "1.5rem" }}
                    />
                  </p>
                  {move.distance}
                </div>
                <div className="icon_text">
                  <p>
                    <FaTruckMedical
                      style={{ color: "red", fontSize: "1.5rem" }}
                    />
                  </p>
                  {move.order_date}
                  <FaPencil />
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "2px" }}
                >
                  <input
                    type="checkbox"
                    id={`checkbox-${move.estimate_id}`}
                    className="custom-checkbox"
                    checked={move.move_date_flexible === "0"}
                    readOnly
                  />
                  <label htmlFor={`checkbox-${move.estimate_id}`}></label>
                  <p>Is flexible</p>
                </div>
                <div className="buttons">
                  <button>View more details</button>
                  <button>Quotes Awaiting</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyMoves;
