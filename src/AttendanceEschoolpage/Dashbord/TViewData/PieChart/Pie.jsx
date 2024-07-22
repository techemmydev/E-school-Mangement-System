import React from "react";
import style from "../../../Dashbord/TViewData/PieChart/piechart.module.css";
const Pie = () => {
  return (
    <div className={`${style.box1}`}>
      <div className={`${style.navycirlce}`}>
        <h1>40%</h1>
      </div>
      <div className={`${style.greens}`}>
        <h1>60%</h1>
      </div>
      <div className={`${style.grade}`}>
        <div className={`${style.grade1}`}>
          <span></span>
          <h1>Male</h1>
          <h1>45</h1>
        </div>
        <div className={`${style.grade2}`}>
          <span></span>
          <h1>Female</h1>
          <h1>55</h1>
        </div>
      </div>
    </div>
  );
};

export default Pie;
