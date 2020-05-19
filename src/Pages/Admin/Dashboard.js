import React, { useState, useEffect } from "react";

import axios from "axios";

import { ENQUIRIES } from "../../Constants/constant";
import Enquiries from "../../Components/enquiries";
import Nav from "../../Components/nav";
import Login from "./Login";

export default function Dashboard() {
  const [isloggedin, setisloggedin] = useState(false);
  const [enqData, setenqData] = useState(undefined);

  const updateLogin = () => {
    setisloggedin(true);
  };

  const logOut = () => {
    setisloggedin(false);
    localStorage.clear();
  };

  useEffect(() => {
    axios.get(ENQUIRIES).then((enqJSON) => {
      setenqData(enqJSON.data);
    });
  }, []);

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
      <div className="[ container-fluid ]">
        {enqData !== undefined ? (
          enqData.map((value, index) => {
            return (
              <Enquiries
                key={index}
                establishment={value.establishment}
                clientName={value.clientName}
                email={value.email}
                checkin={value.checkin}
                checkout={value.checkout}
              />
            );
          })
        ) : (
          <div>
            <img
              src="https://bloxy.info/assets/progress_horizontal-e1c9f4c66e06ad7aa169dc42e420abe6f097111e9d98cf35dfc162bb41ffffe1.gif"
              alt="loading"
            />
          </div>
        )}
      </div>
    </div>
  ) : (
    <>
      <Login updateLoginStatus={updateLogin} />
    </>
  );
}
