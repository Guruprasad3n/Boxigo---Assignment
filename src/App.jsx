import React, { useState } from "react";
import "./App.css";
import MyMoves from "./Pages/MyMoves";
import MyProfile from "./Pages/MyProfile";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
     <Sidebar />
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>
      <div  className="content">
        <Routes>
          <Route path="/" element={<MyMoves />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/quote" element={<MyMoves />} />
          <Route path="/logout" />
        </Routes>
      </div>
    </div>
  );
};

export default App;






// import React from "react";

// import "./App.css";
// import MyMoves from "./Pages/MyMoves";
// import MyProfile from "./Pages/MyProfile";
// import Navbar from "./Components/Sidebar";
// import { Route, Routes } from "react-router-dom";

// const App = () => {
//   return (
//     <div className="app">
//       <Navbar />
//       <div className="rightside">
//         <Routes>
//           <Route path="/" element={<MyMoves />} />
//           <Route path="/profile" element={<MyProfile />} />
//           <Route path="/quote" element={<MyMoves />} />
//           <Route path="/logout" />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App;
