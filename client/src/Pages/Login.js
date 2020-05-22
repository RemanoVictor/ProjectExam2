import React, { useState } from "react";

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
    <div className="container">
      <div className="row loginTitle">
        <div className="[ col-sm-1 ]"></div>
        <div className="col-sm-10">
          <h1> Holidaze </h1>
        </div>
        <div className="[ col-sm-1 ]"></div>
      </div>
      <div className="row">
        <div className="[ col-sm-4 ]"></div>
        <div className="[ col-sm-4 ] [ login ]">
          <h1> Login </h1>
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
  );
}
