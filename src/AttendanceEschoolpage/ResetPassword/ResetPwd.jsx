import React from "react";
import style from "../ResetPassword/Resetpsw.module.css";
import Button from "../../A_Eschoolcomponent/ButtonComponent/Button";

import reset from "/AttendanceEshImage/reset.svg";
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";
const ResetPwd = () => {
  const [showPassword, setShowPassword] = useState(true);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className={style.email_Verification}>
      <div className={style.email_Verificationbox}>
        <div className={style.email_Verificationbox1}>
          <img src={reset} alt="" style={{ width: "80%" }} />
        </div>
        <div className={style.email_Verificationbox2}>
          <div className={style.email_Verificationinputbox}>
            <h1>RESET PASSWORD</h1>
            <p>Please type something you’ll remember</p>
            <label htmlFor="">NEW PASSWORD</label>
            <div className={style.email_Verification_flexinput}>
              <div
                className={`${style.input_Detailsemail}   `}
                // onClick={handleClick}
              >
                <div className={style.icon}>
                  <span onClick={togglePasswordVisibility}>
                    {/* <IoIosEyeOff style={{ fontSize: "20px" }} /> */}
                    {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                  </span>
                </div>

                <div
                  style={{
                    width: "320px",
                  }}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="***********"
                    required
                  />
                </div>
              </div>
            </div>
            <label htmlFor="">CONFIRM NEW PASSWORD</label>
            <div className={style.email_Verification_flexinput}>
              <div
                className={`${style.input_Detailsemail}   `}
                // onClick={handleClick}
              >
                <div className={style.icon}>
                  <span onClick={togglePasswordVisibility}>
                    {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                  </span>
                </div>

                <div
                  style={{
                    width: "320px",
                  }}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="***********"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${style.hidethis}`}>
            <Link to={"/succesfully"} style={{ textDecoration: "none" }}>
              <Button
                style={{
                  width: "388px",
                  heigth: "40px",
                  backgroundColor: "#FF8500",
                  color: "white",
                  fontFamily: "Plus Jakarta Sans",

                  fontSize: "14px",
                  fontWeight: "700",
                  display: "inline-block",
                }}
              >
                Reset Password
              </Button>
            </Link>
          </div>
          <div className={`${style.showthis}`}>
            <Link to={"/succesfully"} style={{ textDecoration: "none" }}>
              <Button
                style={{
                  width: "300px",
                  heigth: "40px",
                  backgroundColor: "#FF8500",
                  color: "white",
                  fontFamily: "Plus Jakarta Sans",

                  fontSize: "14px",
                  fontWeight: "700",
                  display: "inline-block",
                }}
              >
                Reset Password
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPwd;
