import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { FaTruckArrowRight } from "react-icons/fa6";
import { FaUser, FaCalculator } from "react-icons/fa";
import { RiLogoutCircleFill } from "react-icons/ri";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {!isDesktop && (
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? "Close" : "Open"} Sidebar
        </button>
      )}
      <div
        className={`sidebar ${isOpen ? "open" : ""} ${
          !isDesktop && !isOpen ? "hidden" : ""
        }`}
      >
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              <span
                style={{ display: "flex", alignItems: "center", gap: "3px" }}
              >
                <FaTruckArrowRight className={"icon"} /> My Moves
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName="active">
              <span
                style={{ display: "flex", alignItems: "center", gap: "3px" }}
              >
                <FaUser className={"icon"} /> My Profile
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/quote" activeClassName="active">
              <span
                style={{ display: "flex", alignItems: "center", gap: "3px" }}
              >
                <FaCalculator className={"icon"} /> My Quote
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" activeClassName="active">
              <span
                style={{ display: "flex", alignItems: "center", gap: "3px" }}
              >
                <RiLogoutCircleFill className={"icon"} /> Logout
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;