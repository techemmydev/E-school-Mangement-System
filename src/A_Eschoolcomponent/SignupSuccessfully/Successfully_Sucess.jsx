import React from "react";
import style from "../SignupSuccessfully/ResetPwd.module.css";
import Button from "../ButtonComponent/Button";
import { Link } from "react-router-dom";
const Successfully_Sucess = () => {
  return (
    <section className={style.success_container}>
      <div className={style.success_innercontrainer}>
        <div className={style.success_innercontrainer_details}>
          {" "}
          <h1>congratulation </h1>
          <p>You have successfully Signup</p>{" "}
        </div>
        <div className={style.success_box}>
          <div className={style.success_mark}></div>
        </div>
      </div>
      <div className={style.con}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button
            style={{
              width: "400px",
              heigth: "40px",
              backgroundColor: "#FF8500",
              color: "white",
              fontFamily: "Plus Jakarta Sans",

              fontSize: "14px",
              fontWeight: "700",
              // lineHeight: "24px",
            }}
          >
            {" "}
            Back to Login
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Successfully_Sucess;
