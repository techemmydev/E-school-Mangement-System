import React from "react";
import style from "../SettingsFolder/Settings.module.css";
import SettingInput from "./SettingInput";

const Settings = () => {
  return (
    <React.Fragment>
      <section style={{ padding: "1rem" }}>
        <div className={style.settingHeading}>
          <h1> Settings</h1>
          <h2>
            Dashboard <span> /</span> Settings
          </h2>
        </div>
        <SettingInput />
      </section>
    </React.Fragment>
  );
};

export default Settings;
