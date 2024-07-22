import React from "react";
import style from "../StaffTable/staffTable.module.css";
import { StaffTableview } from "./StaffData";
import { BiTrash } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
const StaffTable = () => {
  return (
    <div>
      <section className={`${style.table_Flex}`}>
        {StaffTableview.map((items, index) => {
          return (
            <table className={`${style.table_styling}`} key={index}>
              <thead>
                <tr>
                  <th className={`${style.tableheading}`}>
                    {items.tableHeading}
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.tablesbody.map((tablesbody, index) => {
                  return (
                    <tr key={index} className={`${style.trr}`}>
                      {items.tableHeading === "Action" &&
                      tablesbody.deleteIcon ? (
                        <td>
                          <FiEdit
                            className={`${style.table_deleteicon}`}
                            style={{ color: "black", marginRight: "10px" }}
                          />
                          <BiTrash className={`${style.table_deleteicon}`} />
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

export default StaffTable;
