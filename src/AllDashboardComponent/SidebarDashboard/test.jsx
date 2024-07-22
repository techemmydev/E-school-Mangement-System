import React from "react";
import { NavlinkSidebar } from "./NavbarLink";
import navStyles from "../SidebarDashboard/sidebar.module.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../LOGO/Logo";
import { VscThreeBars } from "react-icons/vsc";
import { useState } from "react";

const SidebarDash = () => {
  const location = useLocation();

  function isActive(route) {
    return location.pathname === route;
  }

  const [toggleNavbar, setToggleNavbar] = useState(false);

  function toggleIcon() {
    setToggleNavbar(!toggleNavbar);
  }

  return (
    <React.Fragment>
      <div className={navStyles.sidebarContainer}>
        <Logo />
        <button className={navStyles.navbar_icon} onClick={toggleIcon}>
          <VscThreeBars />
        </button>

        <nav
          className={`${navStyles.sidebar} ${
            toggleNavbar ? navStyles.open : ""
          }`}
        >
          <ul className={navStyles.navigationLink}>
            {NavlinkSidebar.map((route, index) => (
              <li
                key={index}
                className={isActive(route.path) ? navStyles.active : ""}
              >
                <Link
                  to={route.path}
                  style={{
                    color: isActive(route.path) ? "white" : "#0A0F29",
                    fontWeight: isActive(route.path) ? "400" : "700",
                    textDecoration: "none",
                  }}
                >
                  <div className={navStyles.linkContent}>
                    <img src={route.icons} alt="" className={navStyles.icon} />{" "}
                    {route.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SidebarDash;
