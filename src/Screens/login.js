import React from "react";
import { useContext } from "react";
import Grid from "../Components/Grid";
import { UserContext } from "../Context/UserContext";

const Login = () => {
  const [gridSize, setGridSize] = React.useState(4);
  //Login message to be made available through componnets wrapped in useContext hook
  const { UserInfo, setUserInfo } = useContext(UserContext);

  //Function to handle use userInfo
  const LoginHandler = () => {
    //If user logged in
    if (UserInfo.name) {
      setUserInfo({});
      localStorage.removeItem("Userinfo");
    }
    //If user is logged out
    else {
      //Response from API
      const data = { name: "Sample Name", email: "Sample email" };
      setUserInfo(data);
      localStorage.setItem("Userinfo", JSON.stringify(data));
    }
  };
  return (
    <div>
      {UserInfo.name ? (
        <>
          <h5>Name: {UserInfo.name}</h5>
          <h5>Email: {UserInfo.email}</h5>
        </>
      ) : (
        <h5>User not logged in</h5>
      )}
      <button onClick={() => LoginHandler()}>
        {UserInfo.name ? "Logout" : "Login"}
      </button>
      <input
        type="text"
        placeholder="Grid-Size"
        onChange={(event) => {
          const { value } = event.target;
          setGridSize(value);
        }}
        value={gridSize}
        className="input"
      />
      {/* change input to range slider later */}

      <Grid size={gridSize} />
    </div>
  );
};

export default Login;
