import React from "react";
import Navbar from "../AllDashboardComponent/Navbar/Navbar";
import SidebarDash from "../AllDashboardComponent/SidebarDashboard/SidebarDash";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../AttendanceEschoolpage/Dashbord/Dashboard";
import Staff from "../AttendanceEschoolpage/Staff/Staff";
import GenerateCode from "../AttendanceEschoolpage/GenerateQR_Code/GenerateCode";
import Atten_Log from "../AttendanceEschoolpage/AttendanceLog/Atten_Log";
import Attendance from "../AttendanceEschoolpage/Attendance/Attendance";
import Addnewstaff from "../AttendanceEschoolpage/Staff/ADDNEWSTAFF/Addnewstaff";
import LogoOut from "../AttendanceEschoolpage/LOGOUT/LogoOut";
import Settings from "../AttendanceEschoolpage/SettingsFolder/Settings";
import "../MainDashboard/style.css";

// import LogoOut from "../AttendanceEschoolpage/LOGOUT/LogoOut";

const Maindashboard = () => {
  return (
    <div className="flexcontainer">
      <SidebarDash />
      <div className="container">
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/attendace_log" element={<LogoOut />} />
            <Route path="/Generate_Code" element={<GenerateCode />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/newstaff" element={<Addnewstaff />} />
            <Route path="/attendance_history" element={<Atten_Log />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Maindashboard;
{
  /* <div><img src="AttendanceEshImage/chart2.png" alt="" /></div>
<div><img src="AttendanceEshImage/chart3.png" alt="" /></div> */
}
