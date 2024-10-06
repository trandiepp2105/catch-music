import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <button className="logo">
        <div className="logo-image">
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="logo" />
        </div>
        <h2 className="brand-name">CATCH MUSIC</h2>
      </button>

      <div className="header-button-services">
        <button className="header-btn chill-now-btn">Chill now</button>
        <button className="header-btn sign-up-btn">Sign up</button>
        <button className="change-language-btn">
          <img
            src={`${process.env.PUBLIC_URL}/assets/language-icon.png`}
            alt="logo"
            className="language-icon"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/triangle.png`}
            alt="logo"
            className="triangle-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
