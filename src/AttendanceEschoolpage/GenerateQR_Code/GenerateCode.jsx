import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";
import GeneralSerach from "../../AllDashboardComponent/Staff_input_search/GeneralSerach";
import style from "../GenerateQR_Code/barcode.module.css";
import Button from "../../A_Eschoolcomponent/ButtonComponent/Button";
import Icons from "./Icons";
import QrCodeComponent from "./Code";
import {
  setSelectedCompany,
  toggleIconsVisibility,
} from "../../Redux/slice/SubletSlice";

const GenerateCode = () => {
  const dispatch = useDispatch();
  const { selectedCompany, isfalse } = useSelector(
    (state) => state.companyIcon
  );
  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    dispatch(toggleIconsVisibility());
    setShowIcons(!showIcons);
  };

  const handleIconSelect = (company) => {
    dispatch(setSelectedCompany(company));
    setShowIcons(false); // Hide the icons after selecting
  };

  const url = "https://www.facebook.com";

  return (
    <React.Fragment>
      <div className={style.GenerateCode_container}>
        <div className={style.GenerateCode_container_h1}>
          <h1>Generate QR Code</h1>
        </div>
        <div className={`${style.hideGeneral}`}>
          <GeneralSerach />
        </div>
      </div>
      <div className={style.GeneralSerach_container_input}>
        <h1 className={`${style.GenerateCode_h1}`}>Submit URL</h1>
        <input type="text" placeholder={url} />
        <p className={`${style.GenerateCode_p}`}>
          Your QR code will open this URL
        </p>
      </div>
      <div className={`${style.GenerateCode_code}`}>
        <div className={`${style.GenerateCode_inner}`}>
          <div className={`${style.GenerateCode_inner_img}`}>
            <QrCodeComponent value={url} />
          </div>
        </div>
        <div>
          <Button
            style={{
              width: "210px",
              heigth: "50px",
              border: "1.44px solid #FF8500",
              backgroundColor: " #FFFFFF",
              color: "#0A0F29",
              fontFamily: "Plus Jakarta Sans",
              marginBottom: "10px",
              marginTop: "20px",
              fontSize: "15px",
              fontWeight: "700",
              // lineHeight: "24px",
            }}
          >
            DOWNLOAD QR CODE
          </Button>
        </div>
        <div className={`${style.GenerateCode_inneer_fileFormat}`}>
          <p>
            {selectedCompany && selectedCompany.name ? (
              <span>
                Download Format:{" "}
                <b className={`${style.GenerateCode_formatcolor}`}>
                  {selectedCompany.name}
                </b>
              </span>
            ) : (
              <span>Download Format:</span>
            )}{" "}
          </p>
          <div className={style.icon_div}>
            <MdKeyboardArrowDown
              className={style.iconarrow}
              onClick={toggleIcons}
            />
          </div>
          {showIcons && isfalse && <Icons onSelect={handleIconSelect} />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default GenerateCode;
