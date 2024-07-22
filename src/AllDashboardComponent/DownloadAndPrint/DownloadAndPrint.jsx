import React from "react";
import Button from "../../A_Eschoolcomponent/ButtonComponent/Button";
import style from "../DownloadAndPrint/download.module.css";
import { MdOutlinePrint } from "react-icons/md";
import { IoMdArrowDown } from "react-icons/io";
const DownloadAndPrint = () => {
  return (
    <div className={`${style.download_container_flex} `}>
      <div className={`${style.download_button_flex} `}>
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
              display: "flex",
              alignItem: "center",
              gap: "3px",
              justifyContent: "center",
              // lineHeight: "24px",
            }}
          >
            {" "}
            <IoMdArrowDown style={{ fontSize: "25px" }} /> Download
          </Button>
        </div>
        <div>
          {" "}
          <Button
            style={{
              width: "130px",
              heigth: "40px",
              backgroundColor: "#FF8500",
              color: "white",
              fontFamily: "Plus Jakarta Sans",
              display: "flex",
              alignItem: "center",
              gap: "3px",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: "700",
              // lineHeight: "24px",
            }}
          >
            {" "}
            <MdOutlinePrint style={{ fontSize: "25px" }} /> Print
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DownloadAndPrint;
