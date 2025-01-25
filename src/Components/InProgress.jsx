import React,{useState} from "react";
import { IMAGES } from "../Utils/Images";
import "../Styles/InProgress.css";

const InProgress = () => {
    const [isOpen,setOpen]=useState(true)
  return (
    <div className="inpro-sec">
      <div className="inpro-header" onClick={()=>{setOpen(!isOpen)}}>
        <p className="inpro-text-count">In Progress(3)</p>
        <IMAGES.Chevron_Icon className={isOpen ? "chevron-inpro": "chevron-inpro-close"} />
      </div>
      {isOpen &&
      <div className="inpro-sec-bottom">
        <p className="inpro-empty">No Tasks in In Progress</p>
      </div>
      }
    </div>
  );
};

export default InProgress;
