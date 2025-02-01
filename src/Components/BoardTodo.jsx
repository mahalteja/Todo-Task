import React from 'react'
import '../Styles/BoardTodo.css'
import BoardRow from './BoardRow'

const BoardTodo = ({Task_List,deleteval}) => {
  
  const filteredArray= Task_List.map((item,index)=>({item,index})).filter(({item})=>item.status==="TO-DO")

  return (
    <div className='boardtodo-sec'>
      <div className="todo-tag">
        <h3 className='todo-tag-name'>TO-DO</h3>
        
      </div>
      {filteredArray.map((item)=>{
          return(<BoardRow {...item.item} deleteval={deleteval}/>)
        })}
    </div>
  )
}

export default BoardTodo