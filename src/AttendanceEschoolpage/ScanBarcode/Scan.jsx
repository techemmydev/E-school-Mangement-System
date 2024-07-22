import React from "react";
import style from "../ScanBarcode/scan.module.css";
import Faied from "../../A_Eschoolcomponent/FailedScan/Faied";
import QrCodeComponent from "../GenerateQR_Code/Code";

const Scan = () => {
  const url = "https://www.facebook.com";

  if (url !== "https://www.facebook.com") {
    return <div className={style.postioning}> {<Faied />}</div>;
  } else {
    console.error("try again");
  }
  return (
    <section className={`${style.scan_container} `}>
      <div className={style.Attendance_login_innercontrainer}>
        <h1>Scan QR Code</h1>
        <div className={style.conatiner_code_box}>
          <div className={`${style.GenerateCode_inner}`}>
            <QrCodeComponent value={url} />
          </div>
        </div>
        {/* <div className={style.postioning}> {!url && <Faied />}</div>; */}
      </div>
    </section>
  );
};

export default Scan;
