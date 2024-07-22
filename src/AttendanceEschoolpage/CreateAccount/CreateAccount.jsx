import React from "react";
import style from "../CreateAccount/Createaccount.module.css";
import Button from "../../A_Eschoolcomponent/ButtonComponent/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { acc } from "./SettingsArray";
import MobileCreateAcc from "./MobileCreateAccount/MobileCreateAcc";

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [Ischeck, SetIscheckbox] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyType: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    website: "",
    country: "",
    address: "",
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

    // Check if all form fields are filled
    const isFormValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    try {
      // Throw an error if the form is not valid or terms are not accepted
      if (!isFormValid || !Ischeck) {
        throw new Error(
          "Please fill in all fields and agree to the terms and conditions."
        );
      }

      // Handle the form submission logic here
      console.log("Form Data:", formData);
      console.log("Agree to Terms:", Ischeck);

      // Redirect to the successful page or perform sign-up
      navigate("/successfull");

      alert("Form submitted successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  const ClickedCheckedbox = () => {
    SetIscheckbox(!Ischeck);
  };

  return (
    <React.Fragment>
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
          <form onSubmit={handleSubmit}>
            <div className={style.login_container_box2}>
              <div className={style.inputformcontainer}>
                <h1 className={style.signin}>SIGN UP</h1>
                <p className={style.alreadyhave}>
                  Already have an account ?
                  <Link style={{ textDecoration: "none" }} to={"/"}>
                    <span>Login</span>
                  </Link>
                </p>

                <div className={style.input_Details}>
                  {acc.map((item, index) => {
                    return (
                      <div className={style.input_Detailsfirstname} key={index}>
                        <div>
                          <label htmlFor={"label" + index}>{item.label}</label>
                          <input
                            type={
                              item.name === "password" ||
                              item.name1 === "password" ||
                              item.name === "confirmPassword" ||
                              item.name1 === "confirmPassword"
                                ? showPassword
                                  ? "text"
                                  : "password"
                                : "text"
                            }
                            required
                            name={item.name}
                            id={"label" + index}
                            placeholder={item.placeholderContent || ""}
                            value={formData[item.name]}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <label htmlFor={"label1" + index}>
                            {item.label1}
                          </label>
                          {index === 1 || index === 4 || index === 5 ? (
                            <select
                              required
                              name={item.name1}
                              id={"label1" + index}
                              value={formData[item.name1]}
                              onChange={handleInputChange}
                            >
                              <option value="">Select...</option>
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
                                item.name1 === "password" ||
                                item.name1 === "confirmPassword"
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
                    className={style.iconeyes}
                  >
                    {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
                  </span>
                  <span
                    onClick={togglePasswordVisibility}
                    className={style.iconeyes2}
                  >
                    {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
                  </span>
                </div>
              </div>
              <div className={style.forgot}>
                <div className={style.frameInput2}>
                  <input
                    required
                    checked={Ischeck}
                    type="checkbox"
                    name="terms"
                    id="terms"
                    onChange={ClickedCheckedbox}
                    className={style.frameInput1}
                  />
                  <span className={style.keep}>
                    By clicking on the checkbox, you agree to the Terms &
                    Conditions
                  </span>
                </div>
              </div>

              <div className={style.welcomeButton1}>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: " #ff8500",
                    width: "400px",
                    height: "39.66px",
                    marginBottom: "20px",
                    marginTop: "40px",
                  }}
                >
                  SIGN UP
                </Button>
              </div>
              <div className={style.welcomeButton}>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: " #ff8500",
                    width: "300px",
                    height: "39.66px",
                    marginBottom: "20px",
                    marginTop: "40px",
                  }}
                >
                  SIGN UP
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* <MobileCreateAcc /> */}
    </React.Fragment>
  );
};

export default CreateAccount;
