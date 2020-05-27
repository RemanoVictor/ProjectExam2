import React from "react";
import { Link } from "react-router-dom";

import Logo from "../logo3.svg";

export default function Nav() {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/">
            <img src={Logo} alt="company logo" />
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/Dashboard">
              <span className="glyphicon glyphicon-log-in"></span> Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
