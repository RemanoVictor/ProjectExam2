import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-inverse">
      <ul className="nav navbar-nav">
        <li>
          <Link className="active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <a href="http://192.168.64.2/holidaze/contact.html"> Test </a>
        </li>
        <li>
          <Link to="/Dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}
