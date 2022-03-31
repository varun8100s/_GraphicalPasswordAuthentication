import React from "react";
import Grid from "./Components/Grid";
import "./App.css";
import Login from "./Screens/login";
import { UserContext } from "./Context/UserContext";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [UserInfo, setUserInfo] = useState({});
  useEffect(() => {
    //Incase user had logged and left webiste withoit logging out
    if (localStorage.getItem("Userinfo")) {
      setUserInfo(JSON.parse(localStorage.getItem("Userinfo")));
    }
  }, []);
  return (
    <UserContext.Provider value={{ UserInfo, setUserInfo }}>
      <Login />
    </UserContext.Provider>
  );
}

export default App;
