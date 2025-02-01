import React, { useState } from 'react'
import '../Styles/List.css'
import { IMAGES } from '../Utils/Images'
import Todo from './Todo'
import InProgress from './InProgress'
import Completed from './Completed'
import { Task_List } from '../Utils/constant'

const List = ({callFun,data,update,deleteval,sort}) => {
  const [sortState,setSortState]=useState(false)

  
  return (
    <div className='list-sec'>
        <table className='table-heading'>
            <tr>
                <th>Task Name</th>
                <th onClick={()=>sortState ? (sort("Acend") , setSortState(false)) : (sort("Decend"),setSortState(true))} className='sort-icon'>Due On <img src={IMAGES.Sort_Icon}  alt="" /> </th>
                <th>Task Status</th>
                <th>Task Category</th>
            </tr>
        </table>
        <Todo callFun={callFun} Task_List={data} update={update} deleteval={deleteval}/>
        <InProgress Task_List={data} update={update}deleteval={deleteval}/>
        <Completed  Task_List={data} update={update}  deleteval={deleteval}/>

    </div>
  )
}

export default List