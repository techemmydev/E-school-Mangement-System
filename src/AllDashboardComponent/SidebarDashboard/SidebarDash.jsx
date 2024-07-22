import React from "react";
import { NavlinkSidebar } from "./NavbarLink";
import navStyles from "../SidebarDashboard/sidebar.module.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../LOGO/Logo";
import { VscThreeBars } from "react-icons/vsc";
import { MdClose } from "react-icons/md";
import { useState } from "react";

// import { IoIosNotificationsOutline } from "react-icons/io";
const SidebarDash = () => {
  const location = useLocation();
  // const isActive = (route) => location.pathname === route;
  function isActive(route) {
    return location.pathname === route;
  }
  const [toggleNavbar, setToggleNavbar] = useState(false);

  function toggleIcon() {
    setToggleNavbar(!toggleNavbar);
  }
  return (
    <div>
      <div className={navStyles.sidebarContainer}>
        <div className={`${navStyles.logoshow} ${navStyles.logohide}`}>
          <Logo />
        </div>
        <div className={navStyles.flex_box}>
          <button className={navStyles.navbar_icon} onClick={toggleIcon}>
            {!toggleNavbar ? <VscThreeBars /> : <MdClose />}
          </button>
        </div>
        <nav
          className={`${navStyles.sidebar} ${
            toggleNavbar ? navStyles.open : ""
          }`}
        >
          {/* <div className={`${navStyles.logoshow} ${navStyles.logohide}`}>
            <Logo />
          </div> */}
          <ul className={navStyles.navigationLink}>
            {NavlinkSidebar.map((route, index) => (
              <div key={index}>
                <Link
                  to={route.path}
                  key={index}
                  style={{
                    color: isActive(route.path) ? "  white" : "#0A0F29",
                    fontWeight: isActive(route.path) ? "400" : "700",
                    textDecoration: isActive(route.path) ? "none" : "none",
                  }}
                  onClick={() => {
                    setToggleNavbar(false);
                  }}
                >
                  <li
                    style={{
                      backgroundColor: isActive(route.path) ? " #FFC280" : "",
                      padding: isActive(route.path) ? "10px" : "",
                    }}
                  >
                    <img src={route.icons} alt="" /> {route.label}
                  </li>
                </Link>
              </div>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SidebarDash;
