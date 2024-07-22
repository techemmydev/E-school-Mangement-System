import React from "react";
import style from "../FailedScan/fail.module.css";
const Faied = () => {
  return (
    <section className={style.scan_container}>
      <div className={style.Attendance_login_innercontrainer}>
        <div className={style.Attendance_login_fail}>
          <h1>QR Code Scanning Failed!</h1>
          <p>Try Again</p>
        </div>
      </div>
    </section>
  );
};

export default Faied;
