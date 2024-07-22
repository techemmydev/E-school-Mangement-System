import React from "react";
import style from "../ADDNEWSTAFF/addnew.module.css";
import Button from "../../../A_Eschoolcomponent/ButtonComponent/Button";
import { CgAsterisk } from "react-icons/cg";
import { newDeatails } from "./newtable";

const Addnewstaff = () => {
  return (
    <React.Fragment>
      <section>
        <h1 className={`${style.addnewh1} `}>Add New Staff</h1>
        <div className={`${style.addnewContainer1} `}>
          <div className={`${style.addnewContainer} `}>
            <div className={`${style.titleHeading} `}>
              <h1>Basic Details</h1>
            </div>
            <div className={`${style.info_Container} `}>
              {newDeatails.map((item, index) => {
                // corrected variable name
                return (
                  <div className={`${style.addnew} `} key={index}>
                    <div>
                      <div>
                        <label
                          htmlFor={item.id}
                          className={`${style.labelfont} `}
                        >
                          {item.lable}
                          <CgAsterisk style={{ color: "FF6060" }} />
                        </label>
                      </div>
                      <div>
                        {item.lable === "Gender " ? (
                          <select
                            key={index}
                            style={{
                              width: "320px",
                              height: "45px",
                              marginBottom: "20px",
                            }}
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        ) : (
                          <input type="text" id={item.id} />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={`${style.titleHeading} `}>
              <h1>Address</h1>
            </div>
            <div className={`${style.inputdicflex} `}>
              <div className={`${style.addnew} `}>
                <div>
                  <label htmlFor="" className={`${style.labelfont} `}>
                    Address <CgAsterisk style={{ color: "FF6060" }} />
                  </label>
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div className={`${style.addnew} `}>
                <div>
                  <label htmlFor="" className={`${style.labelfont} `}>
                    City <CgAsterisk style={{ color: "FF6060" }} />
                  </label>
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className={`${style.Buttondiv} `}>
              <Button
                style={{
                  width: "210px",
                  heigth: "50px",

                  backgroundColor: " #FF8500",

                  color: "white",
                  fontFamily: "Plus Jakarta Sans",
                  marginBottom: "10px",
                  fontSize: "15px",
                  fontWeight: "700",
                  // lineHeight: "24px",
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Addnewstaff;
