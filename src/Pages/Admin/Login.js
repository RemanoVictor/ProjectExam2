import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../logo3.svg";

export default function Login(props) {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  let handleChange = (input) => {
    const { name, value } = input.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = inputs;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    props.updateLoginStatus();
  };

  return (
    <>
      <div className="[ container-fluid ]">
        <div className="[ row ] [ navigation ]">
          <div className="[ col-sm-12 ]">
            <Link to="/" className="btn-primary">
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="bgimage1"></div>
      <div className="container-fluid loginContainer">
        <div className="row">
          <div className="[ col-sm-1 ]"></div>
          <div className="col-sm-10">
            <img src={Logo} alt="company logo" />
          </div>
          <div className="[ col-sm-1 ]"></div>
        </div>

        <div className="row">
          <div className="[ col-sm-4 ]"></div>
          <div className="[ col-sm-4 ]">
            <h2> Login </h2>
            <form onSubmit={handleSubmit}>
              <p> Enter Username </p>
              <input
                type="text"
                name="username"
                onChange={handleChange}
                className="form-control"
                placeholder="Noroff"
              />
              <p> Password </p>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="form-control"
                placeholder="finalCA"
              />
              <input type="submit" className="btn" />
            </form>
          </div>
          <div className="[ col-sm-4 ]"></div>
        </div>
      </div>
    </>
  );
}
