import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";
import { FaTruckArrowRight } from "react-icons/fa6";
import { FaUser, FaCalculator } from "react-icons/fa";
import { RiLogoutCircleFill } from "react-icons/ri";

const links = [
  {
    to: "/",
    title: "My Moves",
    icon: <FaTruckArrowRight className={styles.icon} />,
  },
  {
    to: "/profile",
    title: "My Profile",
    icon: <FaUser className={styles.icon} />,
  },
  {
    to: "/quote",
    title: "My Quote",
    icon: <FaCalculator className={styles.icon} />,
  },
  {
    to: "/logout",
    title: "Logout",
    icon: <RiLogoutCircleFill className={styles.icon} />,
  },
];

function Navbar() {
  return (
    <div className={styles.navbar}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : styles.default}`
          }
          to={link.to}
          end
        >
          {link.icon} {link.title}
        </NavLink>
      ))}
    </div>
  );
}
export default Navbar;




// import { NavLink } from "react-router-dom";
// import styles from "./sidebar.module.css";
// import { FaTruckArrowRight } from "react-icons/fa6";
// import { FaUser, FaCalculator } from "react-icons/fa";
// import { RiLogoutCircleFill } from "react-icons/ri";
// const links = [
//   {
//     to: "/",
//     title: "My Moves",
//     icon: <FaTruckArrowRight className={styles.icon} />,
//   },
//   {
//     to: "/profile",
//     title: "My Profile",
//     icon: <FaUser className={styles.icon} />,
//   },
//   {
//     to: "/quote",
//     title: "My Quote",
//     icon: <FaCalculator className={styles.icon} />,
//   },
//   {
//     to: "/logout",
//     title: "Logout",
//     icon: <RiLogoutCircleFill className={styles.icon} />,
//   },
// ];

// function Navbar() {
//   return (
//     <div className={styles.navbar}>
//       {links.map((link) => (
//         <NavLink
//           className={({ isActive }) =>
//             isActive ? styles.active : styles.default
//           }
//           to={link.to}
//           end
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "5px",
//             justifyContent: "",
//           }}
//         >
//           {link.icon} {link.title}
//         </NavLink>
//       ))}
//     </div>
//   );
// }
// export default Navbar;
