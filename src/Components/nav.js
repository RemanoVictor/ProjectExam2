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
            <Link className="active" to="/Dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/UserEnquiries">Enquiries</Link>
          </li>
          <li>
            <Link to="/Messages">Messages</Link>
          </li>
          <li>
            <Link to="/AddVenue">Add Establishment</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
