import React,{useState} from "react";
import { IMAGES } from "../Utils/Images";
import "../Styles/Completed.css";
import ListRow from "./ListRow";

const Completed = ({Task_List,update}) => {
    const [isOpen,setOpen]=useState(true)
    const filteredArray= Task_List.map((item,index)=>({item,index})).filter(({item})=>item.status==="Completed")
  return (
    <div className="completed-sec">
      <div className="completed-header" onClick={()=>{setOpen(!isOpen)}}>
        <p className="completed-text-count">Completed (3)</p>
        <IMAGES.ChevronIcon className={isOpen ? "chevron-completed": "chevron-completed-close"} />
      </div>
      {isOpen &&
      <div className="completed-sec-bottom">
        {filteredArray.length > 0 ? (
           filteredArray.map((item,index) => {
              return <ListRow {...item.item} index={item.index}  update={update} />;
            })
        ):
          (<p className="completed-empty">No Tasks in Completed</p>)
        }
        
      </div>
      }
    </div>
  );
};

export default Completed;
