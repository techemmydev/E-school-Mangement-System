import React, { useState } from "react";
import style from "../Forgot_Password/Forgot.module.css";
import Button from "../../A_Eschoolcomponent/ButtonComponent/Button";
import forgorpassword from "/AttendanceEshImage/forgorpassword.svg";
import { Link, useNavigate } from "react-router-dom";

const Forgot_Mypassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("Please enter your email");
      return;
    }
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    // Handle the form submission logic here
    console.log("Email:", email);
    // Redirect to the email verification page
    navigate("/emamilverify");
  };

  return (
    <section className={style.email_Verification}>
      <div className={style.email_Verificationbox}>
        <div className={style.email_Verificationbox1}>
          <img src={forgorpassword} alt="" style={{ width: "80%" }} />
        </div>
        <div className={style.email_Verificationbox2}>
          <div className={style.email_Verificationinputbox}>
            <h1>FORGOT PASSWORD?</h1>
            <p>
              Enter your email and we will send you an OTP to reset your
              password
            </p>
            <div className={style.email}>
              <label htmlFor="email">EMAIL</label>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className={style.buttondesktop}>
            <Button
              next={handleSubmit}
              style={{
                width: "388px",
                heigth: "40px",
                backgroundColor: "#FF8500",
                color: "white",
                fontFamily: "Plus Jakarta Sans",
                marginBottom: "80px",
                fontSize: "14px",
                fontWeight: "700",
                display: "inline-block",
              }}
            >
              Send Code
            </Button>
          </div>
        </div>
        <button type="submit" className={style.mobile} onClick={handleSubmit}>
          send
        </button>
      </div>
    </section>
  );
};

export default Forgot_Mypassword;
