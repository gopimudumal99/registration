import React, { useRef } from "react";

import "./Register.css";

function Register({ setLoginTab, state, setState }) {

  const pass = useRef();
  let userDetailsLocal = JSON.parse(
    localStorage.getItem("userDetails") || "[]"
  );

  const handleInput = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (state.password === state.cpassword) {
      alert("congrats! successfully created your accout Please login now!");
      setLoginTab(true);
      userDetailsLocal.push(state);
      localStorage.setItem("userDetails", JSON.stringify(userDetailsLocal));
      return;
    } else {
      alert("password doesn't match");
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
    <div className="box-container">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Name : </label>
          <input
            type="text"
            name="username"
            id="username"
            value={state.username}
            onChange={handleInput}
            required
            placeholder="Enter your Name"
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            id="email"
            onChange={handleInput}
            value={state.email}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="phone">Phone No : </label>
          <input
            type="number"
            name="phoneNo"
            onChange={handleInput}
            id="phone"
            value={state.phoneNo}
            placeholder="Enter your phone Number"
            minLength={10} maxLength={10}          
            required
            />
        </div>
        <br />
        <div>
          <label htmlFor="pass">New Password :</label>
          <input
            type="password"
            name="password"
            id="pass"
            onChange={handleInput}
            required
            value={state.password}
            placeholder="set your password"
          />
        </div>
        <br />
        <div>
          <label htmlFor="cpass">Confirm Password : </label>
          <input
            ref={pass}
            onChange={handleInput}
            type="password"
            name="cpassword"
            id="cpass"
            value={state.cpassword}
            required
            placeholder="Re enter your password"
          />
        </div>
        <br />
        <div id="showCheck">
          <label htmlFor="show">Show password</label>
          <span>
            <input
              onChange={showPass}
              type="checkbox"
              name="showpass"
              id="showpass"
            />
          </span>
        </div>
        <button className="regBtn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
