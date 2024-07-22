import React from "react";
import style from "../AttendanceLog/attendance_log.module.css";
import { Attendance_logArray } from "./attendance_log";
import { Attendance_logArray2 } from "./attendance_log";
import GeneralSerach from "../../AllDashboardComponent/Staff_input_search/GeneralSerach";
import DownloadAndPrint from "../../AllDashboardComponent/DownloadAndPrint/DownloadAndPrint";
import TableData from "./DataTable/TableData";
import Previous_Next from "../../AllDashboardComponent/PreviousAndNextButton/Previous_Next";
const Atten_Log = () => {
  return (
    <React.Fragment>
      <div className={style.GenerateCode_container}>
        <div className={style.GenerateCode_container_h1}>
          <h1>Staff Attendance History</h1>
        </div>
        <div className={`${style.dashboard_container1_hide}`}>
          <GeneralSerach />
        </div>
      </div>
      <section className={style.container}>
        <div className={`${style.dashboard_container1}`}>
          {Attendance_logArray.map((items, index) => {
            return (
              <div className={`${style.dashboard_container} `} key={index}>
                <div>
                  <img src={items.icons} alt="icons" />
                </div>
                <div>
                  <h1 className={`${style.dashboard_containerh1} `}>
                    {items.heading}
                  </h1>
                  <p className={`${style.dashboard_containerPara}`}>
                    {items.amount}{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className={`${style.container2}`}>
        <div className={`${style.dashboard_container2}`}>
          {Attendance_logArray2.map((items, index) => {
            return (
              <div className={`${style.container2_flex}`} key={index}>
                <img src={items.icons} alt="" />
                <h1 className={`${style.dashboard_containerh1} `}>
                  {items.heading}
                </h1>
                <p className={`${style.dashboard_containerPara}`}>
                  {items.amount}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <div className={style.GenerateCode_container1}>
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
        <div className={`${style.histroy} `}>
          <h1>histroy</h1>
        </div>
        <div>
          <DownloadAndPrint />
        </div>
      </div>
      <section>
        <TableData />
      </section>
      <section>
        <Previous_Next />
      </section>
    </React.Fragment>
  );
};

export default Atten_Log;
