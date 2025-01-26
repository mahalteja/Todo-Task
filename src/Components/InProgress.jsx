import React,{useState} from "react";
import { IMAGES } from "../Utils/Images";
import "../Styles/InProgress.css";
import { Task_List } from "../Utils/constant";
import ListRow from "./ListRow";
const InProgress = () => {
    const [isOpen,setOpen]=useState(true)
  return (
    <div className="inpro-sec">
      <div className="inpro-header" onClick={()=>{setOpen(!isOpen)}}>
        <p className="inpro-text-count">In Progress(3)</p>
        <IMAGES.ChevronIcon className={isOpen ? "chevron-inpro": "chevron-inpro-close"} />
      </div>
      {isOpen &&
      <div className="inpro-sec-bottom">
        { Task_List.filter((item)=>item.status==="In-Progress").length>0 ? (
          Task_List.filter((item)=>item.status==="In-Progress").map((item)=>{
            return (<ListRow {...item}/>)
          })
        ):( <p className="inpro-empty">No Tasks in In Progress</p>)}
      </div>
      }
    </div>
  );
};

export default InProgress;
