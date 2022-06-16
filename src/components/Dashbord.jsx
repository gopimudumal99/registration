import React from "react";

function Dashbord({ user }) {
  return (
    <div className="box-container">
      <h2>: User Information :</h2>
      <div className="user-info">
        <p>
          <span>Username : </span>
          <span className="username"> {user.username}</span>
        </p>
        <p>
          <span>Email : </span>
          {user.email}
        </p>
        <p>
          <span>Phone No : </span>
          {user.phoneNo}
        </p>
      </div>
    </div>
  );
}

export default Dashbord;
