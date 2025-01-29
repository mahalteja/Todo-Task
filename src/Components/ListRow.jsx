import React, { useState } from "react";
import "../Styles/ListRow.css";
import { IMAGES } from "../Utils/Images";

const ListRow = ({task_name,date,status,category,index,update}) => {
  const [showstatupop,setstatuspop]=useState(false)
  const handleChange=(target,index)=>{
    update(index,target)
    setstatuspop(false)
  }

  return (
    <div className="list-row-sec">
      <table>
        <tr>
          <td className="first-row">
            <div id="li-fi-contain">
              <input type="checkbox" />
              <img src={IMAGES.Drag_Icon} alt="Drag Icon" />
              {status==="Completed" ? <img src={IMAGES.Check_Completed}/> : <img src={IMAGES.Check_Icon} alt="Check Icon" /> }
              
              <p id={status==="Completed"?"list-text-completed" :"list-text"} >{task_name}</p>
            </div>
          </td>
          <td id="list-none">
            <p id="list-text">{date}</p>
          </td>
          <div className="statuspopup-container">
          <td id="list-none" className="status-selection" onClick={(e)=>{setstatuspop(!showstatupop)} }>{status}</td>
          {showstatupop &&
          <div className="statuspop" >
            <div id="statuspopup-row-1" onClick={()=>handleChange("TO-DO",index)} >TO-DO</div>
            <div id="statuspopup-row-1" onClick={()=>handleChange("In-Progress",index)}>In-Progress</div>
            <div id="statuspopup-row-1" onClick={()=>handleChange("Completed",index)}>Completed</div>
          </div>}
          </div>
          <td id="list-none">{category}</td>

          <img src={IMAGES.More_Icon} alt=" More Icon" id="list-none" className="more-icon" />
        </tr>
      </table>
    </div>
  );
};

export default ListRow;
