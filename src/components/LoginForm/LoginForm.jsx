import React from "react";
import "./LoginForm.scss";
const LoginForm = () => {
  return (
    <div className="login-form">
      <div className="left-column">
        <div className="wrapper-login-cat">
          <img
            src={`${process.env.PUBLIC_URL}/assets/login-cat.png`}
            alt="login-cat"
          />
          <span className="blur-box"></span>
        </div>
      </div>
      <div className="right-column">
        <p className="title">LOGIN</p>
        <input
          type="text"
          className="user-input-field"
          placeholder="User name"
        />
        <input
          type="password"
          className="user-input-field"
          placeholder="Password"
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
