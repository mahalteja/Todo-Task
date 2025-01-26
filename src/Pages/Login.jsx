import React from "react";
import { IMAGES } from "../Utils/Images";
import "../Styles/Login.css";

const Login = ({callFunction}) => {
  function handleClick(){
    callFunction()
  }
  return (
    <div className="login-page">
      <div className="login-right">
        <div className="log-r-top">
          <div className="log-r-top-title">
            <img src={IMAGES.Task_Icon} alt="Task Icon" className="task-icon" />
            <h2 className="logo-name">TaskBuddy</h2>
          </div>

          <h3 className="log-r-top-content">
            Streamline your workflow and track progress effortlessly with our
            all-in-one task management app.
          </h3>
        </div>
        <button className="continue-w-gg" onClick={()=>{handleClick()}}>
          <img src={IMAGES.Google_Icon} alt=" Google Icon" className="google-icon" />
          <p className="continue-w-gg-t">Continue with Google</p>
        </button>
      </div>
      <div className="login-left">
        <img
          src={IMAGES.Login_Image}
          alt="Login Image"
          className="login-image"
        />
        <img src={IMAGES.Background_Circles} alt="" className="bg-circle-1" />
      </div>
      <img src={IMAGES.Background_Circles} alt="" className="bg-circle-2" />
      <img src={IMAGES.Background_Circles} alt="" className="bg-circle-3" />
    </div>
  );
};

export default Login;
