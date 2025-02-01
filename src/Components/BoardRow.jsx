import React, { useState } from 'react'
import '../Styles/BoardRow.css'
import { IMAGES } from '../Utils/Images'

const BoardRow = ({task_name,date,status,category,index,update,deleteval}) => {
  const [delpopup,setdelpopup]=useState(false)
  return (
    <div className='board-row-cards'>
        <div id="b-r-c">
        <h2 className={status==="Completed" ? "row-task-name-completed":"row-task-name"}>{task_name}</h2>
        <img src={IMAGES.More_Icon} onClick={()=>setdelpopup(!delpopup)} alt="" className='more-icon-board' />
        {delpopup &&
        <div className="more-popup-board" >
          <div className="more-popup-row-2" onClick={()=>{deleteval(index);setdelpopup(false)}} > <img src={IMAGES.Delete_Icon} alt="" /> Delete</div>
        </div>}
        </div>
        <div id="b-r-c">
        <p id="row-category">{category}</p>
        <p id="row-category">{date}</p>
        </div>
    </div>
  )
}

export default BoardRow