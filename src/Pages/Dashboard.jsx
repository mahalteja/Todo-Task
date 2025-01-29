import React, { useEffect, useState } from "react";
import "../Styles/Dashboard.css";
import { IMAGES } from "../Utils/Images";
import List from "../Components/List";
import AddTaskPopUp from "../Components/AddTaskPopUp.jsx";
import { Task_List } from "../Utils/constant.js";

const Dashboard = ({ profile, callFunction }) => {
  function handleClick() {
    callFunction();
  }


  const [menu, setMenu] = useState(false);

  const data = [...Task_List];
  const [dup_data,setdupdata]=useState([...data])

  const [showpopup,setpopup]=useState(false)




  const add_data = (adddata) => {
    data.push(adddata)
    setdupdata([...data])

  };

  const filterStatus = (cat) => {
    if (cat!="category"){
    setdupdata(data.filter((item) => item.category === cat))
    }
    else{
      setdupdata(data)
    }
  };

  const popupFun=()=>{
    setpopup(!showpopup)
  }

  const updateStatus=(index,value)=>{
    data[index].status=value;
    setdupdata([...data])
    console.log(data)
    
  }
  
  
  return (
    <div className="dashboard">
      <div className="dash-head">
        <div className="logo-and-items">
          <img src={IMAGES.Logo_Icon} alt="Logo" className="logo-icon" />
          <div className="list-container">
            <div
              id={!menu ? `list-sec-active` : `list-sec`}
              onClick={() => {
                menu ? setMenu(false) : setMenu(false);
              }}
            >
              <img src={IMAGES.List_Icon} alt="" />
              <p id={!menu ? `list-item-active` : `list-item`}>List</p>
            </div>
            <div
              id={menu ? `list-sec-active` : `list-sec`}
              onClick={() => {
                !menu ? setMenu(true) : setMenu(true);
              }}
            >
              <img src={IMAGES.ViewBoard_Icon} alt="" />
              <p id={menu ? `list-item-active` : `list-item`}>Board</p>
            </div>
          </div>
        </div>
        <div className="profile-sec-wi-logout">
          <div className="profile-sec">
            <img src={profile.picture} alt="" className="profile-pic" />
            <h3 className="given-name">{profile.given_name}</h3>
          </div>
          <button
            onClick={() => {
              handleClick();
            }}
            className="logout-button"
          >
            <img src={IMAGES.Logout_Icon} alt="" className="logout-img" />
            Log out
          </button>
        </div>
      </div>
      <div className="filter-sec">
        <div className="filter-left">
          <p className="filter-name">Filter by:</p>
          <div id="dropdown-1">
            <select 
              onChange={(e) => {
                filterStatus(e.target.value);
              }}
            >
              <option value="category">All Category</option>
              <option value="Work">work</option>
              <option value="Personal">Personal</option>
            </select>
          </div>
          <div id="dropdown-1">
            <select>
              <option value="due">Due Date</option>
              <option value="Work">work</option>
              <option value="Personal">Personal</option>
            </select>
          </div>
        </div>
        <div className="filter-right">
          <div className="search-bar">
            <img src={IMAGES.Search_Icon} alt="Search Icon" />
            <input type="search" placeholder="Search" />
          </div>
          <button className="add-task" onClick={()=>setpopup(true)}>ADD TASK</button>
        </div>
      </div>

      {showpopup && <AddTaskPopUp callFun={add_data} popup={popupFun}  />}
      <List callFun={add_data} data={dup_data} update={updateStatus}/>
    </div>
  );
};

export default Dashboard;
