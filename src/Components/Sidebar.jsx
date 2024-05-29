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
        <FaTruckArrowRight /> <span>My Moves</span>
      </button>
      <button
        onClick={() => setActiveSection("profile")}
        className={activeSection === "profile" ? "active" : ""}
      >
        <FaUser /> <span>My Profile</span>
      </button>
      <button
        onClick={() => setActiveSection("quote")}
        className={activeSection === "quote" ? "active" : ""}
      >
        <FaCalculator /> <span>Get Quote</span>
      </button>
      <button
        onClick={() => setActiveSection("logout")}
        className={activeSection === "logout" ? "active" : ""}
      >
        <RiLogoutCircleFill /> <span>Logout</span>
      </button>
    </div>
  );
}

export default Sidebar;