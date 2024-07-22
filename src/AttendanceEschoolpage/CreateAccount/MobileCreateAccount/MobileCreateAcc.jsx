import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../Createaccount.module.css";
import { acc } from "../SettingsArray";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import Button from "../../../A_Eschoolcomponent/ButtonComponent/Button";

const MobileCreateAcc = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [Ischeck, SetIscheckbox] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "",
    organization: "",
    country: "",
    state: "",
  });
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log("Form Data:", formData);
    console.log("Agree to Terms:", Ischeck);
    // Redirect to the successful page or perform sign-up
    navigate("/successfull");
  };
  const ClickedCheckedbox = () => {
    SetIscheckbox(!Ischeck);
  };
  return (
    <div>
      <section className={style.login_container_mobile}>
        <form onSubmit={handleSubmit}>
          <div className={style.inputformcontainer}>
            <h1 className={style.signin}>SIGN UP</h1>
            <p className={style.alreadyhave}>
              Already have an account ?
              <Link style={{ textDecoration: "none" }} to={"/login"}>
                <span>Login</span>
              </Link>
            </p>

            <div className={style.input_Details}>
              {/* <div className={style.input_Detailsfirstname}> */}

              {acc2.map((item, index) => {
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
                        name={item.name}
                        id={"label" + index}
                        placeholder={item.placeholderContent}
                        value={formData[item.name]}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor={"label1" + index}>{item.label1}</label>
                      {index === 1 || index === 4 || index === 5 ? (
                        <select
                          required
                          name={item.name1}
                          id={"label1" + index}
                          value={formData[item.name1]}
                          onChange={handleInputChange}
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
                          name={item.name1}
                          id={"label1" + index}
                          value={formData[item.name1]}
                          onChange={handleInputChange}
                        />
                      )}
                    </div>
                  </div>
                );
              })}

              <span
                onClick={togglePasswordVisibility}
                // style={{
                //   color: "#ff8500",
                //   position: "absolute",
                //   right: "16%",
                //   top: "45%",
                // }}
              >
                {/* {showPassword ? <IoIosEye /> : <IoIosEyeOff />} */}
              </span>
              <span
                onClick={togglePasswordVisibility}
                style={{
                  color: "#ff8500",
                  position: "absolute",
                  right: "15%",
                  top: "38%",
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
                name="terms"
                id="terms"
                onChange={ClickedCheckedbox}
                className={style.frameInput1}
              />
              <span className={style.keep}>
                By clicking on the checkbox, you agree to the Terms & Conditions
              </span>
            </div>
          </div>

          <div className={style.welcomeButton}>
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
          </div>
        </form>
      </section>
    </div>
  );
};

export default MobileCreateAcc;
