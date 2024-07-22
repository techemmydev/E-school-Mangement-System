import React from "react";
import style from "../PageNotFound/pagenotfound.module.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={style.heading}>
        <h1>oops!</h1>
        <h3>
          <span> 404 </span> - This page could not be found.
        </h3>
        <div className={style.headingpara}>
          <p>the page you are looking for might have been removed</p>
          <p>had its names changed or mighnt have been removed</p>
        </div>

        <Link to="/">
          {" "}
          <button className={style.pagenotBtn}>go to home page</button>{" "}
        </Link>
      </div>
    </main>
  );
};

export default PageNotFound;
