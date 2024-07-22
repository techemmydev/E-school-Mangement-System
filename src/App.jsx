import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import Outletcomponent from "./A_Eschoolcomponent/OutletComponents/Outletcomponent";
import Logo from "./AllDashboardComponent/LOGO/Logo";
import Succesfull from "./A_Eschoolcomponent/SuccessfulScan/Succesfull";
import Admin_Login from "./AttendanceEschoolpage/AdminAttendanceLogin/Admin_Login";

import Attendance_login from "./AttendanceEschoolpage/AttendanceLogin/Attendance_login";
import Scan from "./AttendanceEschoolpage/ScanBarcode/Scan";
import Faied from "./A_Eschoolcomponent/FailedScan/Faied";
import PageNotFound from "./AttendanceEschoolpage/PageNotFound/PageNotFounds";
import Maindashboard from "./MainDashboard/Maindashboard";
import CreateAccount from "./AttendanceEschoolpage/CreateAccount/CreateAccount";
import EmailVerification from "./AttendanceEschoolpage/Email_Verification/EmailVerification";
import Forgot_Mypassword from "./AttendanceEschoolpage/Forgot_Password/Forgot_Mypassword";
import Forgot_Mypassword2 from "./AttendanceEschoolpage/Forgetpassword2/Forgot_Mypassword2";
import ResetPwd from "./AttendanceEschoolpage/ResetPassword/ResetPwd";
import ResetPassword_Sucess from "./A_Eschoolcomponent/ResetPswSuccesfull/ResetPassword_Sucess";
import Successfully_Sucess from "./A_Eschoolcomponent/SignupSuccessfully/Successfully_Sucess";

const App = () => {
  return (
    <HashRouter hashType="hashbang">
      <Routes>
        <Route path="/" element={<Admin_Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/successfull" element={<Successfully_Sucess />} />

        <Route path="/forgotpassword" element={<Forgot_Mypassword />} />
        <Route path="/emamilverify" element={<EmailVerification />} />
        <Route path="/forgotpsw" element={<Forgot_Mypassword2 />} />
        <Route path="/reset" element={<ResetPwd />} />
        <Route path="/succesfully" element={<ResetPassword_Sucess />} />
        <Route path="/Attendance_login" element={<Attendance_login />} />
        <Route path="/Scan" element={<Scan />} />

        {/* <Route path="/" element={<Outletcomponent />}>
          <Route path="/about" element={<SidebarDash />} />
          <Route path="*" element={<PageNotFound />} />
        </Route> */}

        <Route path="/*" element={<Maindashboard />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
