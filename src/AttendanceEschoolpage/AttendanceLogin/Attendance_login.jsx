import React from "react";
import style from "../AttendanceLogin/A_Login.module.css";
import Button from "../../A_Eschoolcomponent/ButtonComponent/Button";
import { Link } from "react-router-dom";
const Attendance_login = () => {
  const myyear = new Date().getFullYear();
  const mymonth = new Date().getMonth();
  const myDate = new Date().getDate();

  return (
    <section className={style.Attendance_login_container}>
      <div className={style.Attendance_login_innercontrainer}>
        <div className={style.Attendance_login_timeandDate}>
          {myDate ? <h1>{`April ${myDate} ${mymonth} ${myyear}`}</h1> : ""}
          <p>08:00 AM </p>
          <div className={style.input_Details}>
            <div>
              <label htmlFor="full name" id="full name">
                STAFF ID
              </label>
              <input
                type="text"
                placeholder="Enter your staff ID"
                required
                className={style.frameInner}
                name="email"
                id="email"
              />
            </div>
            <div className={style.welcomeButton}>
              <Link className={style.login_link} to="/Scan">
                <Button
                  style={{
                    color: "white",
                    backgroundColor: " #ff8500",
                    fontFamily: "Plus Jakarta Sans",
                    width: "100%",
                    height: "39.66px",
                    marginBottom: "20px",
                    marginTop: "40px",
                    fontSize: "13px",
                    // marginLeft: "30px",
                  }}
                  //   hoverStyle={{
                  //     backgroundColor: "#5b0e0e",
                  //   }}
                >
                  SIGN IN
                </Button>
              </Link>
              <Link className={style.login_link} to="/">
                <Button
                  style={{
                    color: "white",
                    backgroundColor: " #ff8500",
                    fontFamily: "Plus Jakarta Sans",
                    width: "100%",
                    height: "39.66px",
                    marginBottom: "20px",
                    marginTop: "40px",
                    fontSize: "13px",
                    // marginLeft: "30px",
                  }}
                  //   hoverStyle={{
                  //     backgroundColor: "#5b0e0e",
                  //   }}
                >
                  SIGN OUT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attendance_login;
