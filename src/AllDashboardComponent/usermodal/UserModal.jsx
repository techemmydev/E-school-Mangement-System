import React from "react";
import style from "../usermodal/user.module.css";
import Userpicture from "../UserPicture/Userpicture";

const UserModal = ({ username, onLogout, onClose }) => {
  return (
    <div className={style.modalOverlay} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.namedetails}>
          <div>
            <Userpicture />
          </div>

          <div className={style.navbarDaasuserbox}>
            <h2>{username} </h2> <span>Aministration</span>
          </div>
        </div>
        <div className={`${style.profile} `}>
          <h1>my profile</h1>
        </div>
        {/* <div>
          <h1>logout</h1>
        </div> */}
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default UserModal;
