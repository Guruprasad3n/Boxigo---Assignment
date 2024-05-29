import "./mymoves.css";
import { IoMdHome } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong, FaTruckMedical, FaPencil } from "react-icons/fa6";
import { BsBuildingUp } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";
import { IoIosWarning } from "react-icons/io";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";

const MyMoves = () => {
  const [data, setData] = useState(null);
  const [expandedMove, setExpandedMove] = useState(null);

  useEffect(() => {
    fetch("http://test.api.boxigo.in/sample-data/")
      .then((response) => response.json())
      .then((data) => setData(data.Customer_Estimate_Flow))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleDetails = (id) => {
    setExpandedMove(expandedMove === id ? null : id);
  };
  console.log(data);

  return (
    <div>
      <Text fontSize={"3xl"} fontWeight={"bold"}>
        My Moves
      </Text>
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
                  <FaArrowRightLong style={{ margin: "auto" }} />
                </div>
                <div className="to_address">
                  <span>To</span>
                  <p>{move.moving_to}</p>
                </div>
                <div className="request">
                  <span>Request#</span>
                  <p>{move.estimate_id}</p>
                </div>
              </div>

              <div className="bottomBar">
                <div className="icon_text">
                  <p>
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
                  <button onClick={() => toggleDetails(move.estimate_id)}>
                    {expandedMove === move.estimate_id
                      ? "Hide more details"
                      : "View more details"}
                  </button>
                  <button>Quotes Awaiting</button>
                </div>
              </div>
              <div>
                <div
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <IoIosWarning style={{ color: "red", fontSize: "1.2rem" }} />
                  <span style={{ fontWeight: "bold" }}> Disclaimer:</span>Please
                  update your move date before two days of shifting
                </div>
              </div>

              {expandedMove === move.estimate_id && (
                <div
                  className="move-details"
                  style={{ padding: "10px", borderTop: "1px solid grey" }}
                >
                  <Flex justifyContent={"space-between"}>
                    <Text fontWeight={"bold"}> Additional Information</Text>
                    <Button
                      background={"black"}
                      color={"white"}
                      _hover={"none"}
                    >
                      Edit Additional Info
                    </Button>
                  </Flex>
                  <div>Test Data</div>
                  <Flex justifyContent={"space-between"}>
                    <Text fontWeight={"bold"}> House Details</Text>
                    <Button
                      background={"black"}
                      color={"white"}
                      _hover={"none"}
                    >
                      Edit House Details
                    </Button>
                  </Flex>
                  <div>Test Data</div>

                  <div
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      marginTop: "5px",
                    }}
                  >
                    Existing House Details
                  </div>
                  <Flex justifyContent={"space-between"} width={"80%"}>
                    <div>
                      <Text fontWeight={"bold"}>Floor No.</Text>
                      <Text>{move.new_floor_no}</Text>
                    </div>
                    <div>
                      <Text fontWeight={"bold"}>Elevator Availability</Text>
                      <Text>{move.new_elevator_availability}</Text>
                    </div>
                    <div>
                      <Text fontWeight={"bold"}>
                        Distance from Elevator / Staircase to truck
                      </Text>
                      <Text>{move.new_parking_distance}</Text>
                    </div>
                  </Flex>
                  <div
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      marginTop: "5px",
                    }}
                  >
                    New House Details
                  </div>
                  <Flex justifyContent={"space-between"} width={"80%"}>
                    <div>
                      <Text fontWeight={"bold"}>Floor No.</Text>
                      <Text>{move.new_floor_no}</Text>
                    </div>
                    <div>
                      <Text fontWeight={"bold"}>Elevator Availability</Text>
                      <Text>{move.new_elevator_availability}</Text>
                    </div>
                    <div>
                      <Text fontWeight={"bold"}>
                        Distance from Elevator / Staircase to truck
                      </Text>
                      <Text>{move.new_parking_distance}</Text>
                    </div>
                  </Flex>

                  <div
                    style={{
                      fontWeight: "bold",
                      marginTop: "5px",
                    }}
                  >
                    Inventory Details
                  </div>

                  <Accordion allowToggle>
                    {move.items.inventory.map((item, index) => (
                      <AccordionItem key={index}>
                        <h2>
                          <AccordionButton>
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              fontWeight={"bold"}
                              color={"red"}
                            >
                              {item.displayName}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
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
