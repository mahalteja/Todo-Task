import React, {useState}from "react";
import { IMAGES } from "../Utils/Images";
import "../Styles/Todo.css";
import { Task_List } from "../Utils/constant";

const TodoForm = () => {
    
    const [taskStatus, setTaskstatus] = useState(false);
    const [taskcategory, setTaskcategory] = useState(false);
  
    const [formData,setData] =useState({
      task_name:"",
      date:"",
      status:"",
      category:""
    })
    const handleChange= (e)=>{
      const {name,value}=e.target
      setData({...formData,[name]:value})
    }
    const handleSubmit=(e)=>{
      Task_List.push(formData);
      setData({
          task_name:"",
          date:"",
          status:"",
          category:""
      });
      e.preventDefault();
      console.log(Task_List)
      setTaskstatus(false)
      setTaskcategory(false)
    }
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="add-form">
        <input type="text" id="input" name="task_name" value={formData.task_name} onChange={handleChange}  required />
        <input type="date" id="input" name="date" value={formData.date} onChange={handleChange} required />
        <div id="task-status-dropdown">
          <img src={IMAGES.Plus_Icon}  alt="Plus Icon"  onClick={() => setTaskstatus(!taskStatus)} />
          
            <div id={taskStatus ? "status-popup":"status-popup-close"} required>
              <div id="popup-row">
                <input type="radio" id="todo" name="status" value="TO-DO" onChange={handleChange}  required />
                <label for="todo">TO-DO</label>
              </div>
              <div id="popup-row">
                <input type="radio" id="inprogress" name="status" value="In-Progress" onChange={handleChange}  required />
                <label for="inprogress">In-Progress</label>
              </div>
              <div id="popup-row">
                <input type="radio" id="completed" name="status" value="Completed"   onChange={handleChange}  required/>
                <label for="completed">Completed</label>
              </div>
            </div>
         
        </div>
        <div id="task-status-dropdown">
          <img src={IMAGES.Plus_Icon} alt="Plus Icon" onClick={() => setTaskcategory(!taskcategory)}/>
          {taskcategory && (
            <div id="status-popup">
              <div id="popup-row">
                <input  type="radio" id="work"  name="category" value="Work" onChange={handleChange} required/>
                <label for="work">Work</label>
              </div>
              <div id="popup-row">
                <input type="radio" id="personal" name="category" value="Personal" onChange={handleChange} required/>
                <label for="personal">Personal</label>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="form-btn-cont">
        <button className="add-btn">
          ADD
          <img src={IMAGES.Enter_Icon} alt="" />
        </button>
        {/* <button className="cancel-btn">CANCEL</button> */}
      </div>
    </form>
  );
};

export default TodoForm;
