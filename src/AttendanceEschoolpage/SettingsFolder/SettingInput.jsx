import React from "react";
import style from "../SettingsFolder/Settings.module.css";
import { CgAsterisk } from "react-icons/cg";
import Button from "../../A_Eschoolcomponent/ButtonComponent/Button";
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
// import { settingsInput } from "./Settings";
const SettingInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <aside className={`${style.settingHeading_Input}`}>
        <div className={`${style.settingHeading_Container}`}>
          <p className={`${style.settingsP}`}>Address Details</p>
          <div className={style.input_Details}>
            <label htmlFor="Enter Address Line 1" id="Enter Address Line 1">
              Address Line 1 <CgAsterisk style={{ color: "FF6060" }} />
            </label>
            <input
              type="text"
              placeholder="Enter Address Line 1"
              required
              name="Enter Address Line 1"
              id="Enter Address Line 1"
            />

            <label htmlFor="Enter Address Line 2" id="Enter Address Line 2">
              Address Line 2 <CgAsterisk style={{ color: "FF6060" }} />
            </label>
            <input
              placeholder="Enter Address Line 2"
              required
              name="Enter Address Line 2"
              type="text"
            />
          </div>
          <div className={style.input_DetailsDropdownicon}>
            <div className={style.input_DetailsDropdowniconflex1}>
              <div>
                <label htmlFor="Enter Address Line 1" id="Enter Address Line 3">
                  City <CgAsterisk style={{ color: "FF6060" }} />
                </label>
                <input
                  type="text"
                  required
                  className={style.frameInner}
                  name="Enter Address Line 1"
                  id="Enter Address Line 1"
                />
              </div>
              <div>
                <label htmlFor="Enter Address Line 1" id="Enter Address Line 4">
                  State/Province <CgAsterisk style={{ color: "FF6060" }} />
                </label>
                <select>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className={style.input_DetailsDropdowniconflex1}>
              <div>
                <label htmlFor="Enter Address Line 1" id="Enter Address Line 5">
                  Zip/Postal Code <CgAsterisk style={{ color: "FF6060" }} />
                </label>
                <input
                  type="text"
                  required
                  className={style.frameInner}
                  name="Enter Address Line 1"
                  id="Enter Address Line 1"
                />
              </div>
              <div>
                <label htmlFor="Enter Address Line 1" id="Enter Address Line 6">
                  Country <CgAsterisk style={{ color: "FF6060" }} />
                </label>
                <select>
                  <option value="male">Country </option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <Button
              style={{
                width: "110px",
                heigth: "50px",

                backgroundColor: "  #FF8500 ",

                color: "white",
                fontFamily: "Plus Jakarta Sans",
                marginBottom: "10px",
                marginLeft: "10px",
                marginTop: "20px",

                fontSize: "15px",
                fontWeight: "500",
                // lineHeight: "24px",
              }}
            >
              Update
            </Button>
          </div>
        </div>
        {/* {} */}
        {/* {} */}
        {/* {2input} */}
        <div className={`${style.settingHeading_Container}`}>
          <p className={`${style.settingsP}`}>Localization Details</p>

          <div className={style.input_DetailsDropdownicon}>
            <div className={style.input_DetailsDropdowniconflexLocal}>
              <div>
                <label htmlFor="Enter Address Line 1" id="Enter Address Line 7">
                  Address Line 1 <CgAsterisk style={{ color: "FF6060" }} />
                </label>
                <select>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="Enter Address Line 1" id="Enter Address Line 8">
                  Date Format <CgAsterisk style={{ color: "FF6060" }} />
                </label>
                <select>
                  <option value="male">Country </option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="Enter Address Line 1" id="Enter Address Line 0">
                  Time Format
                  <CgAsterisk style={{ color: "FF6060" }} />
                </label>
                <select>
                  <option value="male">Country </option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <Button
              style={{
                width: "110px",
                heigth: "50px",

                backgroundColor: "  #FF8500 ",

                color: "white",
                fontFamily: "Plus Jakarta Sans",
                marginBottom: "10px",
                marginLeft: "10px",
                marginTop: "20px",

                fontSize: "15px",
                fontWeight: "500",
                // lineHeight: "24px",
              }}
            >
              Update
            </Button>
          </div>
        </div>
        {/* {} */}
        {/* {} */}
        {/* {2input} */}
        <div className={`${style.settingHeading_Container}`}>
          <p className={`${style.settingsP}`}>Change Password</p>
          <div className={style.input_Details}>
            <label htmlFor="Enter Address Line 1" id="Enter Address Line 01">
              Current Password <CgAsterisk style={{ color: "FF6060" }} />
            </label>
            <span onClick={togglePasswordVisibility} className={style.IoIosEye}>
              {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Address Line 1"
              required
              name="Enter Address Line 1"
              id="Enter Address Line 1"
            />

            <label htmlFor="Enter Address Line 2" id="Enter Address Line 02">
              New Password <CgAsterisk style={{ color: "FF6060" }} />
            </label>
            <input
              placeholder="Enter Address Line 2"
              required
              name="Enter Address Line 2"
              type={showPassword ? "text" : "password"}
            />
            <label htmlFor="Enter Address Line 2" id="Enter Address Line 03">
              Confirm Password <CgAsterisk style={{ color: "FF6060" }} />
            </label>
            <input
              placeholder="Enter Address Line 2"
              required
              name="Enter Address Line 2"
              type={showPassword ? "text" : "password"}
            />
          </div>

          <Button
            style={{
              width: "110px",
              heigth: "50px",

              backgroundColor: "  #FF8500 ",

              color: "white",
              fontFamily: "Plus Jakarta Sans",
              marginBottom: "10px",
              marginLeft: "10px",
              marginTop: "20px",

              fontSize: "15px",
              fontWeight: "500",
              // lineHeight: "24px",
            }}
          >
            Update
          </Button>
        </div>
      </aside>
    </div>
  );
};

export default SettingInput;
