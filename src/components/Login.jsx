import React, { useRef, useState } from "react";
import "./Register.css";

function Login({ setIsLogedIn, setUser }) {
  const [data, setData] = useState({ email: "", password: "" });
  let localUserData = JSON.parse(localStorage.getItem("userDetails"));

  const pass = useRef();
  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const loginClick = (evt) => {
    evt.preventDefault();

    let fetchData = localUserData.filter(
      (data2) => data2.email === data.email && data2.password === data.password
    );
    if (fetchData.length > 0) {
      alert("login successfully");
      setUser(fetchData[0]);
      setIsLogedIn(true);
      return;
    } else {
      alert("invalid email or password");
    }
  };

  const showPass = (e) => {
    if (pass.current.type === "password") {
      pass.current.type = "text";
    } else {
      pass.current.type = "password";
    }
  };
  return (
    <div className="login box-container">
      <form action="" onSubmit={(e) => loginClick(e)}>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            required
            value={data.email}
            placeholder="Enter your email"
            id="email"
            onChange={handleInput}
          />
        </div>
        <br />
        <div>
          <label htmlFor="pass">Password :</label>
          <input
            type="password"
            name="password"
            id="pass"
            required
            value={data.password}
            placeholder="set your password"
            onChange={handleInput}
            ref={pass}
          />
        </div>
        <br />
        <div id="showCheck">
          <label htmlFor="show">Show password</label>
          <span>
            <input
              type="checkbox"
              onChange={showPass}
              name="showpass"
              id="showpass"
            />
          </span>
        </div>
        <button className="regBtn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
