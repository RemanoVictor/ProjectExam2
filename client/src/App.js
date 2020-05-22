import React, { useState } from "react";

import "bootstrap3/dist/css/bootstrap.min.css";
import "./../src/scss/styles.scss";

import Nav from "./../src/Components/nav";
import Login from "./../src/Pages/Login";

export default function App(props) {
  const [isloggedin, setisloggedin] = useState(false);

  const updateLogin = () => {
    setisloggedin(true);
  };

  const logOut = () => {
    setisloggedin(false);
    localStorage.clear();
  };
  return localStorage.getItem("username") === "Noroff" &&
    localStorage.getItem("password") === "finalCA" &&
    isloggedin === true ? (
    <div className="App">
      <div className="[ container-fluid ]">
        <div className="[ row ] [ navigation ]">
          <div className="[ col-sm-10 ]">
            <Nav />
          </div>
          <div className="[ col-sm-2 ]">
            <button onClick={logOut} className="btn btn-default">
              LogOut
            </button>
          </div>
        </div>
      </div>
      <div className="[ container-fluid ]">{props.children}</div>
    </div>
  ) : (
    <>
      <Login updateLoginStatus={updateLogin} />
    </>
  );
}
