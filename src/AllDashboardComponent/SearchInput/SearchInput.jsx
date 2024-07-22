import React from "react";
import style from "../SearchInput/search.module.css";
import { CiSearch } from "react-icons/ci";
const SearchInput = () => {
  return (
    <div className={style.serchInput}>
      <form action="">
        <div className={style.serchbox}>
          <CiSearch className={style.CiSearch} />

          <input type="text" placeholder="Search subscriptions" />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
