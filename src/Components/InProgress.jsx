import React,{useEffect, useState} from "react";
import { IMAGES } from "../Utils/Images";
import "../Styles/InProgress.css";
import ListRow from "./ListRow";
const InProgress = ({Task_List,update,deleteval}) => {
    const [isOpen,setOpen]=useState(true)
    const filteredArray= Task_List.map((item,index)=>({item,index})).filter(({item})=>item.status==="In-Progress")
    useEffect(()=>{

    },[Task_List])
  return (
    <div className="inpro-sec">
      <div className="inpro-header" onClick={()=>{setOpen(!isOpen)}}>
        <p className="inpro-text-count">In Progress(3)</p>
        <IMAGES.ChevronIcon className={isOpen ? "chevron-inpro": "chevron-inpro-close"} />
      </div>
      {isOpen &&
      <div className="inpro-sec-bottom">
        { filteredArray.length > 0 ? (
           filteredArray.map((item,index) => {
              return <ListRow {...item.item} index={item.index}  update={update} deleteval={deleteval} />;
            })
        ):( <p className="inpro-empty">No Tasks in In Progress</p>)}
      </div>
      }
    </div>
  );
};

export default InProgress;
