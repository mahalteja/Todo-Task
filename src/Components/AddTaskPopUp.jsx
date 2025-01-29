import React,{useState} from "react";
import { IMAGES } from "../Utils/Images";
import '../Styles/AddTaskPopUp.css'
const AddTaskPopUp = ({callFun,popup}) => {
   let btn_class="btn-create";
    const [formData,setData]=useState({
      task_name:"",
      date:"",
      desc:"",
      status:"",
      category:""
    })

    const handleChange=(e)=>{
      const {name,value}=e.target
      setData({...formData,[name]:value})
      
    }

    const handleSubmit=(e)=>{
      
      callFun(formData)
      setData({
        task_name:"",
        date:"",
        desc:"",
        status:"",
        category:""
    })
   
    popup()
    e.preventDefault();
    }
    const handleBold=(e)=>{
        e.preventDefault();
        let target =document.getElementById("Desc")
        if (target.style.fontWeight==="1000"){
            target.style.fontWeight="500"
        }
        else{
            target.style.fontWeight="1000"
        }
    }
    const handleItalic=(e)=>{
        e.preventDefault();
        let target =document.getElementById("Desc")
        if (target.style.fontStyle==="italic"){
            target.style.fontStyle="normal"
        }
        else{
            target.style.fontStyle="italic"
        }
    }
    const handleLine=(e)=>{
        e.preventDefault();
        let target =document.getElementById("Desc")
        if (target.style.textDecoration==="line-through"){
            target.style.textDecoration="none"
        }
        else{
            target.style.textDecoration="line-through"
        }
    }

  return (
  <div className="create-task-popup-outer">
    <div className="create-task-popup">
      <div className="c-t-pp-top">
        <h3 className="c-t-pp-top-head">Create Task</h3>
        <img src={IMAGES.Close_Icon} alt="Close Icon" onClick={()=>{popup()}}/>
      </div>
      <div className="c-t-pp-middle">
        <form action="" onSubmit={handleSubmit} className="c-t-pp-mid-form">
          <input type="text" placeholder="Task Title" className="task-title-input" name="task_name"
          value={formData.task_name} onChange={handleChange} required/>
          <div className="mid-form-desc">
          <div className="mid-form-desc-top">
          <img src={IMAGES.Task_list} alt="" />
          <textarea name="desc" type="list" id="Desc" value={formData.desc} className="add-form-desc"  onChange={handleChange} required placeholder="Description" ></textarea>
          </div>
          <div className="mid-form-desc-bottom">
          <button className="btn-bold" onClick={(e) => {handleBold(e)}}> B</button>
          <button className="btn-italic" onClick={(e) => {handleItalic(e)}} > I</button>
          <button className="btn-line" onClick={(e) => {handleLine(e)}} > S</button>
          </div>
          </div>
          <div className="add-task-row-container">
            <div className="task-cat-contain">
              <label htmlFor="" id="task-cat-label"> Task Category*</label>
              <div className="task-act-opt-contain">
                <div id="radio-option">
                  <input type="radio" id="work" name="category" value="Work" onChange={handleChange} required />
                  <label for="work">Work</label>
                </div>
                <div id="radio-option">
                <input type="radio" id="Personal" name="category" value="Personal" onChange={handleChange} required/>
                <label for="Personal">Personal</label>
                </div>
          </div>
          </div>
          <div className="cal-contain">
            <label for="date" id="task-cat-label">Due on*</label>
            <input type="date" id="date" className="calender" name="date" value={formData.date}  onChange={handleChange} required/>
          </div>
          <div className="cal-contain">
          <label for="status" id="task-cat-label">Task Status*</label>
          <select name="status" id="status" className="calender" value={formData.status} onChange={handleChange}  placeholder="Choose" required>
            <option value="">Choose</option>
            <option value="TO-DO">TO-DO</option>
            <option value="In-Progress" selected> IN-PROGRESS</option>
            <option value="Completed"> COMPLETED</option>
          </select>
          </div>
          </div>
          <div className="file-contain">
            <label for="file" id="task-cat-label">Attachment</label>
            <input type="file" id="file" className="file-input"/>
          </div>
          <div className="c-t-pp-bottom">
        <button className="btn-cancel" onClick={()=>{popup()}}>CANCEL</button>
        <button className={btn_class} >CREATE</button>
      </div>
        </form>
      </div>
 
    </div>
    </div>
  );
};

export default AddTaskPopUp;
