import React from 'react'
import '../Styles/List.css'
import { IMAGES } from '../Utils/Images'
import Todo from './Todo'
import InProgress from './InProgress'
import Completed from './Completed'

const List = () => {
  return (
    <div className='list-sec'>
        <table>
            <tr>
                <th>Task Name</th>
                <th>Due On <img src={IMAGES.Sort_Icon} alt="" /> </th>
                <th>Task Status</th>
                <th>Task Category</th>
            </tr>
        </table>
        <Todo/>
        <InProgress/>
        <Completed/>

    </div>
  )
}

export default List