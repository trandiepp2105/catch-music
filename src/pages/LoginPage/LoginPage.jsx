import React from "react";
import "./LoginPage.scss";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
const LoginPage = () => {
  return (
    <div className="login-page">
      <Header />
      <div className="main-content">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
