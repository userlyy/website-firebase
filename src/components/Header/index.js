import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";

import Logo from "../../assets/logo.png";
const Header = (props) => {
  const { currentUser } = props;
  return (
    <header className="header">
      <div className="wrapHead">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Mr Robot" />
          </Link>
        </div>
        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <span onClick={() => auth.signOut()}>Log Out</span>
              </li>
            </ul>
          )}

          {!currentUser && (
            <ul className="regis">
              <li>
                <Link to="/registration">Registrater</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};
export default Header;
