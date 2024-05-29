import React, { useState } from "react";

import "./App.css";
import MyMoves from "./Pages/MyMoves";
import MyProfile from "./Pages/MyProfile";
import Sidebar from "./Components/Sidebar";

const App = () => {
  const [activeSection, setActiveSection] = useState("moves");

  const renderSection = () => {
    switch (activeSection) {
      case "moves":
        return <MyMoves />;
      case "profile":
        return <MyProfile />;
      case "quote":
        return <div>Get Quote Section</div>;
      case "logout":
        return <div>Logout Section</div>;
      default:
        return <MyMoves />;
    }
  };

  return (
    <div className="app">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="content">{renderSection()}</div>
    </div>
  );
};

export default App;
