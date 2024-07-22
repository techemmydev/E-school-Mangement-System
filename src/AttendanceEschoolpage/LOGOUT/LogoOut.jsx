import React from "react";
// import style from "../Attendance/Attendace.module.css";
import style from "../LOGOUT/logo.module.css";
import GeneralSerach from "../../AllDashboardComponent/Staff_input_search/GeneralSerach";
import DownloadAndPrint from "../../AllDashboardComponent/DownloadAndPrint/DownloadAndPrint";
// import { Attendancelog } from "./AttendanceData";
import Previous_Next from "../../AllDashboardComponent/PreviousAndNextButton/Previous_Next";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import Attendance_Table from "./AttendanceTable/Attendance_Table";

const LogoOut = () => {
  return (
    <div>
      <div className={style.GenerateCode_container_h1}>
        <h1>Attendance Log</h1>
      </div>
      <div className={style.GenerateCode_container}>
        <GeneralSerach />
      </div>
      <section className={`${style.DataContainer} `}>
        <div className={`${style.DataContainer2} `}>
          <div className={`${style.mobile_view} `}>
            <h2>History</h2>
            <div>
              <DownloadAndPrint />
            </div>
          </div>
          <div className={`${style.mobile_view_2} `}>
            <div className={`${style.download_showingEntries_mobile} `}>
              <span>Show </span>
              <div
                style={{
                  border: "2px solid #F5F5F5",
                  width: "47px",
                  textAlign: "center",
                }}
              >
                <span>10</span>
              </div>
              <span> entries</span>
            </div>
            <div className={`${style.DataContainerArrow} `}>
              <div className={`${style.DataContainerArrowIcon} `}>
                <IoChevronBackOutline
                  className={`${style.DataContainerIcon} `}
                />{" "}
                <IoChevronForwardOutline
                  className={`${style.DataContainerIcon} `}
                />
              </div>
              <div className={`${style.DataContainerdateformat} `}>
                <p>04 April 2024</p>
              </div>
              <div className={`${style.DataContainermonthDetails} `}>
                <div>month</div>
                <div>week</div>
                <div>Day</div>
              </div>
            </div>
          </div>
          <div className={style.GenerateCode_container1}>
            <div className={style.GenerateCode_containerh3}>
              <h2>History</h2>
            </div>
            <div className={`${style.DataContainerArrow} `}>
              <div className={`${style.DataContainerArrowIcon} `}>
                <IoChevronBackOutline
                  className={`${style.DataContainerIcon} `}
                />{" "}
                <IoChevronForwardOutline
                  className={`${style.DataContainerIcon} `}
                />
              </div>
              <div className={`${style.DataContainerdateformat} `}>
                <p>04 April 2024</p>
              </div>
              <div className={`${style.DataContainermonthDetails} `}>
                <div>month</div>
                <div>week</div>
                <div>Day</div>
              </div>
            </div>
            <div>
              <DownloadAndPrint />
            </div>
          </div>
          <div className={`${style.download_showingEntries} `}>
            <span>Show </span>
            <div
              style={{
                border: "2px solid #F5F5F5",
                width: "47px",
                textAlign: "center",
              }}
            >
              <span>10</span>
            </div>
            <span> entries</span>
          </div>

          <div>
            <Attendance_Table />
          </div>
          <Previous_Next />
        </div>
      </section>
    </div>
  );
};

export default LogoOut;
