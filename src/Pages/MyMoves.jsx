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

  console.log(import.meta.env.VITE_KEY_API_URL, "App");
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_KEY_API_URL}/sample-data/`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setData(data.Customer_Estimate_Flow))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);
  useEffect(() => {
    const apiUrl = import.meta.env.MODE === "production"
      ? import.meta.env.VITE_KEY_API_URL_PROD
      : import.meta.env.VITE_KEY_API_URL_DEV;
    console.log("API URL", apiUrl);
    fetch(`${apiUrl}/sample-data/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data.Customer_Estimate_Flow))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleDetails = (id) => {
    setExpandedMove(expandedMove === id ? null : id);
  };

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
                  marginBottom: "15px",
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

              <div className="bottomBar" style={{ marginBottom: "15px" }}>
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
                    marginBottom: "15px",
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

                  <Flex justifyContent={"space-between"} mt={5} mb={2}>
                    <Text fontWeight={"bold"}>Inventory Details</Text>
                    <Button
                      background={"black"}
                      color={"white"}
                      _hover={"none"}
                    >
                      Edit Inventory
                    </Button>
                  </Flex>

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
                              display={"flex"}
                              gap={2}
                            >
                              {item.displayName}
                              <div
                                style={{
                                  border: "2px solid red",
                                  padding: "5px",
                                  height: "25px",
                                  width: "25px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  borderRadius: "50px",
                                  background: "red",
                                  color: "white",
                                }}
                              >
                                {item.category.length}
                              </div>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          pb={4}
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "flex-start",
                            // justifyContent: "space-evenly",
                            gap: "50px",
                          }}
                        >
                          {item.category
                            .filter((cat) =>
                              cat.items.some((ite) => ite.qty > 0)
                            )
                            .map((cat, catIndex) => (
                              <div
                                key={catIndex}
                                style={{ fontWeight: "bold" }}
                              >
                                {cat.displayName}
                                {cat.items
                                  .filter((ite) => ite.qty > 0)
                                  .map((ite) => (
                                    <div
                                      key={ite.uniqueId}
                                      style={{ marginBottom: "10px" }}
                                    >
                                      <div
                                        style={{
                                          fontWeight: "400",
                                          display: "flex",
                                          justifyContent: "space-between",
                                        }}
                                      >
                                        <div>
                                          {ite.displayName}{" "}
                                          {ite.type
                                            .filter((option) => option.selected)
                                            .map((option) => (
                                              <div
                                                style={{
                                                  fontWeight: "bold",
                                                  fontSize: ".9rem",
                                                }}
                                              >
                                                {option.option}
                                              </div>
                                            ))}
                                        </div>
                                        <span
                                          style={{
                                            fontWeight: "bold",
                                            marginLeft: "20px",
                                          }}
                                        >
                                          {ite.qty}
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            ))}
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
