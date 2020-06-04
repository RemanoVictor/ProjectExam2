import React, { useState } from "react";

import Nav from "../../Components/nav";
import Login from "./Login";

export default function Dashboard() {
  const [isloggedin, setisloggedin] = useState(false);

  const updateLogin = () => {
    setisloggedin(true);
  };

  const logOut = () => {
    setisloggedin(false);
    localStorage.clear();
  };

  return localStorage.getItem("username") === "Cameron" &&
    localStorage.getItem("password") === "Admin" &&
    isloggedin === true ? (
    <div className="App">
      <div className=" container-fluid dashboardPage">
        <div className=" col-md-4 overlay2"></div>

        <div className="[ row ] [ navigation ]">
          <div className="[ col-sm-10 ]">
            <Nav />
          </div>
          <div className="[ col-sm-2 ]">
            <button onClick={logOut} className="btn btn-default">
              <span className="glyphicon glyphicon-log-in"></span> LogOut
            </button>
          </div>
        </div>

        <div className="container-fluid dashboardContainer">
          <div className="overlay"></div>
          <div className="row">
            <div className="col-md-4 col-md-offset-4 welcome">
              <h2>Welcome, {localStorage.getItem("username")}</h2>
            </div>
            <div className="col-md-4">
              <iframe
                title="world clock"
                src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=medium&timezone=Europe%2FOslo"
                width="100%"
                height="115"
                frameBorder="0"
                seamless
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Login updateLoginStatus={updateLogin} />
    </>
  );
}
