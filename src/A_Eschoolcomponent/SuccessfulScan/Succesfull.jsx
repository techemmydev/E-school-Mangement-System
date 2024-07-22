import React from "react";
import style from "../SuccessfulScan/sucess.module.css";
const Succesfull = () => {
  return (
    <section className={style.success_container}>
      <div className={style.success_innercontrainer}>
        <div className={style.success_innercontrainer_details}>
          {" "}
          <h1>Signing in Successful</h1>
          <p>Attendance has been successfully completed</p>{" "}
        </div>
        <div className={style.success_box}>
          <div className={style.success_mark}></div>
        </div>
      </div>
    </section>
  );
};

export default Succesfull;
