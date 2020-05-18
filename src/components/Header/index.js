import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
const Header = (props) => {
  return (
    <header className="header">
      <div className="wrapHead">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Mr Robot" />
          </Link>
        </div>
        <div className="callToActions">
          <ul className="regis">
            <li>
              <Link to="/registration">Registrater</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
