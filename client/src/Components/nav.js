import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-inverse">
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
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
