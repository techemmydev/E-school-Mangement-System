import React from "react";
import style from "../Staff/staff.module.css";
import Button from "../../A_Eschoolcomponent/ButtonComponent/Button";
import { FaPlus } from "react-icons/fa6";
// import { FaTrash } from "react-icons/fa"; // Import the delete icon
import GeneralSerach from "../../AllDashboardComponent/Staff_input_search/GeneralSerach";
import { Link } from "react-router-dom";
import StaffTable from "./StaffTable/StaffTable";
import DownloadAndPrint from "../../AllDashboardComponent/DownloadAndPrint/DownloadAndPrint";
import Previous_Next from "../../AllDashboardComponent/PreviousAndNextButton/Previous_Next";

const Staff = () => {
  // const [TrackIndex, SetTrackIndex] = useState();
  // function nextButton() {
  //   SetTrackIndex((prev) => prev + 1);
  // }
  return (
    <React.Fragment>
      <div className={style.staff_addnew}>
        <div>
          <Link
            to={"/newstaff"}
            style={{ textDecoration: "none" }}
            // onClick={nextButton}
          >
            <Button
              style={{
                width: "130px",
                heigth: "45px",
                backgroundColor: "#FF8500",
                color: "white",
                fontFamily: "Plus Jakarta Sans",

                fontSize: "14px",
                fontWeight: "700",
                // lineHeight: "24px",
              }}
            >
              <FaPlus /> Add New
            </Button>
          </Link>
        </div>
        <div>
          <GeneralSerach />
        </div>
      </div>
      <div className={style.staff_mobile}>
        <div>
          <Link
            to={"/newstaff"}
            style={{ textDecoration: "none" }}
            // onClick={nextButton}
          >
            <Button
              style={{
                width: "130px",
                heigth: "45px",
                backgroundColor: "#FF8500",
                color: "white",
                fontFamily: "Plus Jakarta Sans",

                fontSize: "14px",
                fontWeight: "700",
                // lineHeight: "24px",
              }}
            >
              <FaPlus /> Add New
            </Button>
          </Link>
        </div>
        <div>
          <GeneralSerach />
        </div>
      </div>

      <section className={`${style.DataContainer} `}>
        <div className={`${style.DataContainer2} `}>
          <div className={style.GenerateCode_container1}>
            <div className={style.GenerateCode_container_h1}>
              <h1>Staff List</h1>
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
            <StaffTable />
          </div>
          <Previous_Next />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Staff;
