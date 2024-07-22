import React from "react";
import style from "../DataTable/table.module.css";
import { Tableview } from "./TableView";
import { BiTrash } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
// import Button from "../../../A_Eschoolcomponent/ButtonComponent/Button";
const TableData = () => {
  return (
    <section className={`${style.table_Flex}`}>
      {Tableview.map((items, index) => {
        return (
          <table
            className={`${style.table_styling} ${style.tablestyle}`}
            key={index}
          >
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
                        <IoEyeOutline
                          // className={`${style.table_deleteicon}`}
                          style={{ color: "black", marginRight: "10px" }}
                        />
                        <BiTrash className={`${style.table_deleteicon}`} />
                      </td>
                    ) : (
                      <td className={`${style.tabledata}`}>
                        {tablesbody.tableDatabutton ? (
                          <button
                            className={
                              index % 2 === 0
                                ? style.evenButton
                                : style.oddButton
                            }
                          >
                            {tablesbody.tableDatabutton}
                          </button>
                        ) : (
                          tablesbody.tableData
                        )}
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
  );
};

export default TableData;
