import "./sidebar.css";
import { FaTruckArrowRight } from "react-icons/fa6";
import { FaUser, FaCalculator } from "react-icons/fa";
import { RiLogoutCircleFill } from "react-icons/ri";

function Sidebar({ activeSection, setActiveSection }) {
  return (
    <div className="sidebar">
      <button
        onClick={() => setActiveSection("moves")}
        className={activeSection === "moves" ? "active" : ""}
      >
        <FaTruckArrowRight /> My Moves
      </button>
      <button
        onClick={() => setActiveSection("profile")}
        className={activeSection === "profile" ? "active" : ""}
      >
        <FaUser /> My Profile
      </button>
      <button
        onClick={() => setActiveSection("quote")}
        className={activeSection === "quote" ? "active" : ""}
      >
        <FaCalculator /> Get Quote
      </button>
      <button
        onClick={() => setActiveSection("logout")}
        className={activeSection === "logout" ? "active" : ""}
      >
        <RiLogoutCircleFill /> Logout
      </button>
    </div>
  );
}

export default Sidebar;
