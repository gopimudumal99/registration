import Login from "./components/Login";
import React, { useState } from "react";
import Register from "./components/Register";
import "./App.css";
import Dashbord from "./components/Dashbord";


const data = {
  username: "",
  email: "",
  phoneNo: "",
  password: "",
  cpassword: ""
};

 function App() {
  const [state, setState] = useState(data);
  const [user, setUser] = useState({});
  const [loginTab, setLoginTab] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);

  const switchTab = (e) => {
    if (e.target.innerText === "Logout") {
      setState(data);
      setIsLogedIn(false);
      return;
    }
    setLoginTab(!loginTab);
  };

  return (
    <div className="App">
      <h1>
        -: WELL<span className="c-style">C</span>OME :-{" "}
      </h1>
      <nav>
        <button onClick={(e) => switchTab(e)} className="regnewBtn btn">
          {loginTab ? (isLogedIn ? "Logout" : "Create account") : "go to Login"}
        </button>
      </nav>
      {loginTab ? (
        isLogedIn ? (
          <Dashbord user={user} />
        ) : (
          <Login setUser={setUser} setIsLogedIn={setIsLogedIn} />
        )
      ) : (
        <Register setLoginTab={setLoginTab} state={state} setState={setState} />
      )}
    </div>
  );
}


export default App;
