import React from "react";
import style from "./general.module.css";
import Button from "../../A_Eschoolcomponent/ButtonComponent/Button";

const GeneralSerach = () => {
  return (
    <div className={style.GeneralSerach_container}>
      <div className={style.GeneralSerach_container_input}>
        <input type="text" placeholder="search" />
      </div>
      <div>
        <Button
          style={{
            width: "130px",
            heigth: "40px",
            backgroundColor: "#FF8500",
            color: "white",
            fontFamily: "Plus Jakarta Sans",

            fontSize: "14px",
            fontWeight: "700",
            // lineHeight: "24px",
          }}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default GeneralSerach;
