import React from "react";
import style from "../TableImageData/chart.module.css";
import { chart } from "./ch";
import { BiTrash } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { RiArrowUpDownFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from "../../../../A_Eschoolcomponent/ButtonComponent/Button";
const Chartimage = () => {
  return (
    <div>
      <div className={`${style.flxs}`}>
        <div>
          <h1>Attendance Report</h1>
        </div>
        <Button
          style={{
            width: "120px",
            heigth: "40px",
            backgroundColor: "#FF8500",
            color: "white",
            fontFamily: "Plus Jakarta Sans",
            fontSize: "12px",
            fontWeight: "700",
          }}
        >
          Generate
        </Button>
      </div>
      <section className={`${style.table_Flex}`}>
        {chart.map((items, index) => {
          return (
            <table className={`${style.table_styling}`} key={index}>
              <thead>
                <tr>
                  <th className={`${style.tableheading}`}>
                    {items.tableHeading !== "Action" && <RiArrowUpDownFill />}
                    {items.tableHeading}
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.tablesbody.map((tablesbody, tableIndex) => {
                  const rowClassName =
                    tableIndex % 2 === 0 ? style.evenRow : style.oddRow;
                  return (
                    <tr
                      key={tableIndex}
                      className={`${style.trr} ${rowClassName}`}
                    >
                      {items.tableHeading === "Action" &&
                      tablesbody.deleteIcon ? (
                        <td>
                          <Link to={"/attendance_history"}>
                            <IoEyeOutline
                              className={`${style.table_deleteicon}`}
                              style={{ color: "black", marginRight: "10px" }}
                            />
                          </Link>
                          <BiTrash className={`${style.table_deleteicon}`} />
                        </td>
                      ) : items.tableHeading === "Name" ? (
                        <td className={`${style.tabledata}`}>
                          <img
                            src={tablesbody.imageUrl}
                            alt={tablesbody.tableData}
                            className={`${style.image}`}
                          />
                          {tablesbody.tableData}
                        </td>
                      ) : (
                        <td className={`${style.tabledata}`}>
                          {tablesbody.tableDatabutton
                            ? tablesbody.tableDatabutton
                            : tablesbody.tableData}
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
        })}
      </section>
    </div>
  );
};

export default Chartimage;
