import React, { useState } from "react";

import { CiSearch } from "react-icons/ci";
import style from "../GenerateQR_Code/icon.module.css";
import { useSelector, useDispatch } from "react-redux";

import { setSelectedCompany } from "../../Redux/slice/SubletSlice";
const Icons = ({ onSelect }) => {
  const dispatch = useDispatch();
  const { imageformat } = useSelector((state) => state.companyIcon);

  const handleSelect = (company) => {
    onSelect(company); // Use the provided callback
  };

  return (
    <div className={style.iconscontainer}>
      {imageformat.map((company) => (
        <div key={company.id} onClick={() => handleSelect(company)}>
          <div> {company.icon} </div>
          <p>{company.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Icons;
