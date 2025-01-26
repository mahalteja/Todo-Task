import React, { useState } from "react";
import "../Styles/Dashboard.css";
import { IMAGES } from "../Utils/Images";
import List from "../Components/List";

const Dashboard = ({ profile, callFunction }) => {
  function handleClick() {
    callFunction();
  }
  const [menu, setMenu] = useState(false);

  // For Form
  // const [formData, setData] = useState({
  //   name: "",
  //   email: "",
  // });
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   Task_List.push(formData);
  //   setData({
  //     name: "",
  //     email: "",
  //   });
  //   e.preventDefault();
  //   console.log(Task_List);
  // };

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
            <select>
              <option value="category">Category</option>
              <option value="work">work</option>
              <option value="personal">Personal</option>
            </select>
          </div>
          <div id="dropdown-1">
            <select>
              <option value="due">Due Date</option>
              <option value="work">work</option>
              <option value="personal">Personal</option>
            </select>
          </div>
        </div>
        <div className="filter-right">
          <div className="search-bar">
            <img src={IMAGES.Search_Icon} alt="Search Icon" />
            <input type="search" placeholder="Search" />
          </div>
          <button className="add-task">ADD TASK</button>
        </div>
      </div>
      <List/>
    </div>
    //   <form onSubmit={handleSubmit}>
    //   <input id="input" type="name" name="name" value={formData.name}  onChange={handleChange}/>
    //   <input type="email" name="email" value={formData.email} onChange={handleChange} />
    //   <input type="submit"></input>
    // </form>
  );
};

export default Dashboard;
