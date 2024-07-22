import React from "react";
import style from "../Navbar/Navbar.module.css";
// import Logo from "../LOGO/Logo";
import SearchInput from "../SearchInput/SearchInput";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Userpicture from "../UserPicture/Userpicture";
import { useState } from "react";
import UserModal from "../usermodal/UserModal";

const Navbar = () => {
  const [showIcons, setShowIcons] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePictureClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    console.log("User logged out");
    // Add your logout logic here
    setIsModalOpen(false);
  };
  const toggleIcons = () => {
    setShowIcons(!showIcons);
    console.log(showIcons);
  };
  return (
    <React.Fragment>
      <header className={style.header_container}>
        {/* <div>
        <Logo />
      </div> */}
        <div className={style.inputcontainer}>
          <SearchInput />
        </div>
        <div className={style.otherside_nigeria_container}>
          <div className={style.otherside_nigeria}>
            <div>
              <img
                src="/AttendanceEshImage/emojione_flag-for-nigeria.svg"
                alt=""
              />
            </div>

            <div className={`${style.notify_container} `}>
              <div className={style.redback}></div>

              <IoIosNotificationsOutline
                style={{ fontSize: "25px", color: "#C7C8CC" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <div>
                <Userpicture />
              </div>

              <div className={style.navbarDaasuserbox}>
                {showIcons ? (
                  <div className={style.navbarDaasusername}>
                    {" "}
                    <h6> John Paul </h6> <p> Administrator</p>
                  </div>
                ) : (
                  ""
                )}
                <MdOutlineKeyboardArrowDown
                  style={{ color: "#C7C8CC", fontSize: "30px" }}
                  onClick={toggleIcons}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className={style.header_container_mobile}>
        <div className={style.header_container_stickers}>
          {/* <div>
        <Logo />
      </div> */}
          <div className={style.inputcontainer_mobile}>
            <SearchInput />
          </div>
          {/* <div className={style.otherside_nigeria_container}> */}
          <div className={style.otherside_nigeria}>
            <div>
              <img
                src="/AttendanceEshImage/emojione_flag-for-nigeria.svg"
                alt=""
              />
            </div>

            <div className={`${style.notify_container} `}>
              <div className={style.redback}></div>

              <IoIosNotificationsOutline
                style={{ fontSize: "25px", color: "#C7C8CC" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <div onClick={handlePictureClick}>
                <Userpicture />
              </div>
            </div>
          </div>
          {/* </div> */}
          {isModalOpen && (
            <UserModal
              username="John Deo" // Replace with dynamic username
              onLogout={handleLogout}
              onClose={handleCloseModal}
            />
          )}
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
