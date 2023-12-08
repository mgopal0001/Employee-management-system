import "./style.css";
import HomeIcon from "../../../assets/home.svg";
import UserIcon from "../../../assets/user-alt-svgrepo-com.svg";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const BottomPanel = () => {
  const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate();

  const handleClick = (page) => {
    setActiveTab(page); // Update the active tab state
    if (page === "home") {
      navigate("/home");
    } else if (page === "user") {
      navigate("/user");
    }
  };

  return (
    <div className="bottom-panel-con">
      <div className={`home-btn-con ${activeTab === "home" ? "active" : ""}`}>
        <img
          src={HomeIcon}
          className="home-image"
          onClick={() => handleClick("home")}
          alt="Home"
        />
      </div>
      <div className={`users-btn-con ${activeTab === "user" ? "active" : ""}`}>
        <img
          src={UserIcon}
          className="user-image"
          onClick={() => handleClick("user")}
          alt="User"
        />
      </div>
    </div>
  );
};

export default BottomPanel;
