import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-inverse">
      <ul className="nav navbar-nav">
        <li>
          <Link className="active" to="/">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Home">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
