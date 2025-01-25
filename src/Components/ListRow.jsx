import React from "react";
import "../Styles/ListRow.css";
import { IMAGES } from "../Utils/Images";

const ListRow = ({task_name,date,status,category}) => {
  return (
    <div className="list-row-sec">
      <table>
        <tr>
          <td>
            <div id="li-fi-contain">
              <input type="checkbox" />
              <img src={IMAGES.Drag_Icon} alt="Drag Icon" />
              <img src={IMAGES.Check_Icon} alt="Check Icon" />
              <p id="list-text">{task_name}</p>
            </div>
          </td>
          <td>
            <p id="list-text">{date}</p>
          </td>
          <td>{status}</td>
          <td>{category}</td>

          <img src={IMAGES.More_Icon} alt=" More Icon" className="more-icon" />
        </tr>
      </table>
    </div>
  );
};

export default ListRow;
