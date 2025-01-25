import React,{useState} from "react";
import { IMAGES } from "../Utils/Images";
import "../Styles/Completed.css";

const Completed = () => {
    const [isOpen,setOpen]=useState(true)
  return (
    <div className="completed-sec">
      <div className="completed-header" onClick={()=>{setOpen(!isOpen)}}>
        <p className="completed-text-count">Completed (3)</p>
        <IMAGES.Chevron_Icon className={isOpen ? "chevron-completed": "chevron-completed-close"} />
      </div>
      {isOpen &&
      <div className="completed-sec-bottom">
      
        <p className="completed-empty">No Tasks in Completed</p>
      </div>
      }
    </div>
  );
};

export default Completed;
