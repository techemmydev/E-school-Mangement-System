import React from "react";
import style from "../Attendance/Attendace.module.css";
import GeneralSerach from "../../AllDashboardComponent/Staff_input_search/GeneralSerach";
import DownloadAndPrint from "../../AllDashboardComponent/DownloadAndPrint/DownloadAndPrint";
import Attendance_Table from "./AttendanceTable/Attendance_Table";
import Previous_Next from "../../AllDashboardComponent/PreviousAndNextButton/Previous_Next";

const Attendance = () => {
  return (
    <div>
      <div className={style.GenerateCode_container_h1}>
        <h1>Staff Attendance</h1>
      </div>
      <div className={style.GenerateCode_container}>
        <GeneralSerach />
      </div>
      <section className={`${style.DataContainer} `}>
        <div className={`${style.DataContainer2} `}>
          <div className={style.GenerateCode_container1}>
            <div className={style.GenerateCode_container_h2}>
              <h2>Attendance List</h2>
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

export default Attendance;
