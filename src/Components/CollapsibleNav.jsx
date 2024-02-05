import React, { useState, useEffect } from "react";
import mainLogo from "../images/logo.png";
import "../Css/style.scss";
const CollapsibleNav = ({ isInitiallyCollapsed }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const navListItems = [
    { name: "Dashboard", icon: "dashboard" },
    { name: "Schedule", icon: "calendar" },
    { name: "Employees", icon: "user" },
    { name: "Message", icon: "logOut" },
  ];
  const CollapsibleNavToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  useEffect(() => {
    setIsCollapsed(isInitiallyCollapsed);
  }, [isInitiallyCollapsed]);

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <>
      <div
        className={`collapsible-nav ${
          isCollapsed ? "collapsible-nav--collapsed " : ""
        }`}
      >
        <button
          className="collapsible-nav__toggle flex items-center"
          onClick={CollapsibleNavToggle}
        >
          <img src={mainLogo} alt="logo" />
          <span className="title-header text-lg font-semibold">
            Team n Time
          </span>
        </button>
        <ul>
          {navListItems.map(({ name, icon }) => (
            <li
              key={name}
              className={`collapsible-nav__item ${
                activeItem === name ? "active" : ""
              }`}
              onClick={() => handleItemClick(name)}
            >
              <div className={`collapsible-nav__icon--${icon}`}></div>
              <span className="collapsible-nav__title">{name}</span>
            </li>
          ))}
        </ul>
        <div className="collapsible-nav__footer">
          <span className="collapsible-nav__title">Logout</span>
        </div>
      </div>
    </>
  );
};
export default CollapsibleNav;
