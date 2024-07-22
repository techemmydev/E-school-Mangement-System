import React from "react";
import style from "../Email_Verification/Email.module.css";
import Button from "../../A_Eschoolcomponent/ButtonComponent/Button";
import { Link } from "react-router-dom";
import otpimage from "/AttendanceEshImage/optimage.svg";

const EmailVerification = () => {
  return (
    <section className={style.email_Verification}>
      <div className={style.email_Verificationbox}>
        <div className={style.email_Verificationbox1}>
          <img src={otpimage} alt="" style={{ width: "80%" }} />
        </div>
        <div className={style.email_Verificationbox2}>
          <div className={style.email_Verificationinputbox}>
            <h1>EMAIL VERIFICATION</h1>
            <p>
              Please enter the verification code sent to p**********@gmail.com
            </p>
            <div className={`${style.flexinput}`}>
              {[1, 2, 3, 4].map((index) => (
                <input type="text" key={index} />
              ))}
            </div>
          </div>
          <div className={`${style.hidemobile}`}>
            <Link to={"/forgotpsw"} style={{ textDecoration: "none" }}>
              <Button
                style={{
                  width: "388px",
                  height: "40px",
                  backgroundColor: "#FF8500",
                  color: "white",
                  fontFamily: "Plus Jakarta Sans",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                Verify
              </Button>
            </Link>
          </div>
          <div className={`${style.showmobile}`}>
            <Link to={"/forgotpsw"} style={{ textDecoration: "none" }}>
              <button type="submit" className={style.mobile}>
                send
              </button>
            </Link>
          </div>

          <p className={`${style.resend}`}>
            Didn’t receive OTP?{" "}
            <Link to={"/forgotpassword"}>
              <span>Resend OTP</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailVerification;
