import React from "react";
import style from "../PreviousAndNextButton/previous.module.css";
const Previous_Next = () => {
  return (
    <div className={`${style.Previous_Next_container} `}>
      <div className={`${style.Previous_Next_details} `}>
        <p>Showing 1 to 10 of 11 entries</p>
      </div>
      <div className={`${style.Previous_Next_flex} `}>
        <button
          style={{
            padding: "10px",
            fontFamily: " Plus Jakarta Sans",
            fontSize: "14px",
            fontWeight: "800px",
            lineHeight: "24px",
            color: "  #88918b",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Previous
        </button>
        <div className={`${style.Previous_Next_1} `}>1</div>
        <div className={`${style.Previous_Next_2} `}>2</div>
        <button
          style={{
            padding: "10px",
            fontFamily: " Plus Jakarta Sans",
            fontSize: "14px",
            fontWeight: "800px",
            lineHeight: "24px",
            color: "  #88918b",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Previous_Next;
