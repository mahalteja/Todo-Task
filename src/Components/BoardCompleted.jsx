import React from 'react'
import '../Styles/BoardCompleted.css'
import BoardRow from './BoardRow'


const BoardCompleted = ({data,deleteval}) => {
  const filteredArray= data.map((item,index)=>({item,index})).filter(({item})=>item.status==="Completed")
  return (
    <div className='boardcompleted-sec'>
      <div className="completed-tag">
        <h3 className='completed-tag-name'>Completed</h3>
        
      </div>
      {filteredArray.map((item)=>{
          return(<BoardRow {...item.item} deleteval={deleteval}/>)
        })}
    </div>
  )
}

export default BoardCompleted