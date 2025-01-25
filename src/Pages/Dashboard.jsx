import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "../Styles/Dashboard.css";
import { todo } from "../Utils/constant";
import { IMAGES } from "../Utils/Images";

const Dashboard = ({ profile, callFunction }) => {
  function handleClick() {
    callFunction();
  }
  const [formData, setData] = useState({
    name: "",
    email: "",
  });
  const[menu ,setMenu]=useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    todo.push(formData);
    setData({
      name: "",
      email: "",
    });
    e.preventDefault();
    console.log(todo);
  };

  return (
    <div className="dashboard">
      <div className="dash-head">
        <div className="logo-and-items">
          <img src={IMAGES.Logo_Icon} alt="Logo" className="logo-icon" />
          <div className="list-container">
            <div id={ !menu ? `list-sec-active`:`list-sec`} onClick={()=>{menu ? setMenu(false):setMenu(false)}}>
              <img src={IMAGES.List_Icon} alt="" />
              <p id={!menu ? `list-item-active`:`list-item`}>List</p>
            </div>
            <div id={ menu ? `list-sec-active`:`list-sec`} onClick={()=>{!menu ? setMenu(true):setMenu(true)}}>
              <img src={IMAGES.ViewBoard_Icon} alt="" />
              <p id={menu ? `list-item-active`:`list-item`}>Board</p>
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
    </div>
    //   <form onSubmit={handleSubmit}>
    //   <input id="input" type="name" name="name" value={formData.name}  onChange={handleChange}/>
    //   <input type="email" name="email" value={formData.email} onChange={handleChange} />
    //   <input type="submit"></input>
    // </form>
  );
};

export default Dashboard;
