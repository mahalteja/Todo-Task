import "./App.css";
import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Dashboard from "./Pages/Dashboard.jsx";
import Login from "./Pages/Login";

function App() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState(null);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
    },
    onError: (error) => console.log("Login Failed", error),
  });
  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  const Logout = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div className="App">
      {profile ? (
        <Dashboard profile={profile} callFunction={Logout} />
      ) : (
        <Login callFunction={login} />
      )}
    </div>
  );
}

export default App;
