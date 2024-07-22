import React from "react";
import style from "../AdminAttendanceLogin/AdminLogin.module.css";
import Button from "../../A_Eschoolcomponent/ButtonComponent/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
const Admin_Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [Username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Ischeck, SetIscheckbox] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxChange = () => {
    SetIscheckbox(!Ischeck);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log("Email:", Username);
    console.log("Password:", password);
    console.log("Keep me logged in:", Ischeck);
    // Redirect to the dashboard or perform login
    navigate("/dashboard");
  };

  return (
    <section className={style.login_container}>
      <div className={style.login_container_innerbox}>
        <div className={style.login_container_box1}>
          <div className={style.login_container_box1_Deatils}>
            <h1>Welcome back!</h1>
            <p>To continue, kindly supply your credentials</p>
            <Link to={"/createaccount"} style={{ textDecoration: "none" }}>
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
                  marginLeft: "90px",
                  fontSize: "13px",
                }}
              >
                SIGN UP
              </Button>
            </Link>
          </div>
        </div>
        <div className={style.login_container_box2}>
          <div className={style.inputformcontainer}>
            <h1 className={style.signin}>SIGN IN</h1>
            <p className={style.alreadyhave}>
              Don't have an account ?
              <Link style={{ textDecoration: "none" }} to={"/createaccount"}>
                <span>Create an account </span>
              </Link>
            </p>
            <form onSubmit={handleSubmit}>
              <div className={style.input_Details}>
                <div>
                  <label htmlFor="name">USERNAME</label>
                  <input
                    type="text"
                    placeholder="UserName"
                    required
                    className={style.frameInner}
                    name="name"
                    id="name"
                    value={Username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password">PASSWORD</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    required
                    className={style.frameInner}
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    color: "#ff8500",
                    position: "absolute",
                    right: "45px",
                    top: "140px",
                  }}
                >
                  {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
                </span>
                <div className={style.welcomeButton}>
                  {/* <Link className={style.login_link} to="/dashboard"> */}
                  <Button
                    // onsubmit={handleSubmit}
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
                    SIGN IN
                  </Button>
                  {/* </Link> */}
                </div>
                {/* <Link className={style.login_link} to="/dashboard"> */}
                <button
                  type="submit"
                  className={style.mobile_button}
                  onSubmit={handleSubmit}
                >
                  {" "}
                  SIGN IN
                </button>
                {/* </Link> */}
              </div>
              <div className={style.forgot}>
                <div className={style.frameInput2}>
                  <input
                    required
                    checked={Ischeck}
                    type="checkbox"
                    id="keepLoggedIn"
                    onChange={handleCheckboxChange}
                    className={style.frameInput1}
                  />
                  <span className={style.keep}>Keep me Logged in</span>
                </div>

                <div className={style.alreadyLink}>
                  <Link to="/forgotpassword">
                    <span className={style.already}>Forgot Password?</span>{" "}
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin_Login;
