import React, { useState } from "react";
import { IMAGES } from "../Utils/Images";
import "../Styles/Todo.css";
import ListRow from "./ListRow";
import TodoForm from "./TodoForm";

const Todo = ({ Task_List, callFun,update ,deleteval}) => {
  const [isOpen, setOpen] = useState(true);
  const [taskform, setForm] = useState(false);
  const filteredArray= Task_List.map((item,index)=>({item,index})).filter(({item})=>item.status==="TO-DO")
  const formFun = () => {
    setForm(false);
  };

  return (
    <div className="todo-sec">
      <div
        className="todo-header"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <p className="todo-text-count">Todo(3)</p>
        <IMAGES.ChevronIcon
          className={isOpen ? "chevron-todo" : "chevron-todo-close"}
        />
      </div>
      {isOpen && (
        <div className="todo-sec-bottom">
          <div className="add-task-sec" onClick={() => setForm(!taskform)}>
            <img src={IMAGES.Plus_Icon} alt="Plus Icon"  />
            <p className="add-task-text">Add Task</p>
          </div>
          {taskform && <TodoForm callFun={callFun} formFun={formFun}/>}

          {filteredArray.length > 0 ? (
           filteredArray.map((item,index) => {
              return <ListRow {...item.item} index={item.index}  update={update} deleteval={deleteval} />;
            })
          ) : (
            <p className="todo-empty">No Tasks in To-Do</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Todo;
