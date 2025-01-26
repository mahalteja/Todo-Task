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
          <td id="list-none">
            <p id="list-text">{date}</p>
          </td>
          <td id="list-none">{status}</td>
          <td id="list-none">{category}</td>

          <img src={IMAGES.More_Icon} alt=" More Icon" id="list-none" className="more-icon" />
        </tr>
      </table>
    </div>
  );
};

export default ListRow;
