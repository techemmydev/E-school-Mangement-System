import React from "react";
import style from "../CreateAccount/Createaccount.module.css";
import Button from "../../A_Eschoolcomponent/ButtonComponent/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { acc } from "./SettingsArray";
const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [Ischeck, SetIscheckbox] = useState(false);
  const ClickedCheckedbox = () => {
    SetIscheckbox(!Ischeck);
  };
  return (
    <section className={style.login_container}>
      <div className={style.login_container_innerbox}>
        <div className={style.login_container_box1}>
          <div className={style.login_container_box1_Deatils}>
            <h1>Get Started!</h1>
            <p>Register now to start tracking attendance with ease</p>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Button
                style={{
                  textDecoration: "none",
                  width: "110px",
                  height: "40px",
                  border: "1px solid white",
                  padding: "10px, 24px, 10px, 24px",
                  fontFamily: "Plus Jakarta Sans",
                  backgroundColor: " #ff8500",
                  color: "white",
                  marginTop: "20px",
                  marginLeft: "120px",
                  fontSize: "13px",
                }}
              >
                SIGN IN
              </Button>
            </Link>
          </div>
        </div>
        <div className={style.login_container_box2}>
          <div className={style.inputformcontainer}>
            <h1 className={style.signin}>SIGN UP</h1>
            <div className={style.input_Details}>
              {/* <div className={style.input_Detailsfirstname}> */}

              {acc.map((item, index) => {
                return (
                  <div className={style.input_Detailsfirstname} key={index}>
                    <div>
                      <label htmlFor={"label" + index}>{item.label}</label>
                      <input
                        type={
                          index === 2
                            ? showPassword
                              ? "text"
                              : "password"
                            : "text"
                        }
                        required
                        className={style.frameInner}
                        name={"label" + index}
                        id={"label" + index}
                        placeholder={item.placeholderContent}
                      />
                    </div>
                    <div>
                      <label htmlFor={"label1" + index}>{item.label1}</label>
                      {index === 1 || index === 4 || index === 5 ? (
                        <select
                          required
                          className={style.frameInner}
                          name={"label1" + index}
                          id={"label1" + index}
                        >
                          <option value="">Select...</option>
                          {/* Add options dynamically */}
                          {index === 1 ? (
                            <>
                              <option value="Type 1">Type 1</option>
                              <option value="Type 2">Type 2</option>
                              <option value="Type 3">Type 3</option>
                            </>
                          ) : index === 4 ? (
                            <>
                              <option value="Country 1">Country 1</option>
                              <option value="Country 2">Country 2</option>
                              <option value="Country 3">Country 3</option>
                            </>
                          ) : (
                            <>
                              <option value="State 1">State 1</option>
                              <option value="State 2">State 2</option>
                              <option value="State 3">State 3</option>
                            </>
                          )}
                        </select>
                      ) : (
                        <input
                          type={
                            index === 2
                              ? showPassword
                                ? "text"
                                : "password"
                              : "text"
                          }
                          required
                          className={style.frameInner}
                          name={"label1" + index}
                        />
                      )}
                    </div>
                  </div>
                );
              })}

              <span
                onClick={togglePasswordVisibility}
                style={{
                  color: "#ff8500",
                  position: "absolute",
                  right: "30px",
                  top: "42%",
                }}
              >
                {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
              </span>
              <span
                onClick={togglePasswordVisibility}
                style={{
                  color: "#ff8500",
                  position: "absolute",
                  right: "89%",
                  top: "42%",
                }}
              >
                {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
              </span>
              {/* </div> */}
            </div>
          </div>
          <div className={style.forgot}>
            <div className={style.frameInput2}>
              <input
                // style={{
                //   backgroundColor: Ischeck ? "green" : "red",
                //   width: "20px",
                //   height: "20px",
                // }}
                checked={Ischeck}
                type="checkbox"
                name=""
                id=""
                onChange={(e) => ClickedCheckedbox(e.target.checked)}
                className={style.frameInput1}
              />
              <span className={style.keep}>
                By clicking on the checkbox, you agree to the Terms & Conditions
              </span>
            </div>
          </div>
          <div className={style.welcomeButton}>
            <Link className={style.login_link} to="">
              <Button
                style={{
                  color: "white",
                  backgroundColor: " #ff8500",
                  width: "400px",
                  height: "39.66px",
                  marginBottom: "20px",
                  marginTop: "40px",
                  // marginLeft: "30px",
                }}
                //   hoverStyle={{
                //     backgroundColor: "#5b0e0e",
                //   }}
              >
                SIGN UP
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
// {inputdiv.map((items, index) => {
//   return (
//     <div>
//       {items.input ? <input type="text" key={index} /> : ""}
//       {/* <input type="text" key={index} /> */}
//     </div>
//   );
// })}
