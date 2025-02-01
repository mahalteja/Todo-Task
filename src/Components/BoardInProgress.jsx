import React from 'react'
import '../Styles/BoardInProgress.css'
import BoardRow from './BoardRow'


const BoardInProgress = ({data,deleteval}) => {
  const filteredArray= data.map((item,index)=>({item,index})).filter(({item})=>item.status==="In-Progress")
  
  return (
    <div className='boardinpro-sec'>
      <div className="inpro-tag">
        <h3 className='inpro-tag-name'>In-Progress</h3>
        
      </div>
      {filteredArray.map((item)=>{
          return(<BoardRow {...item.item} deleteval={deleteval}/>)
        })}
    </div>
  )
}

export default BoardInProgress