import React, { useState, useEffect } from "react";

import axios from "axios";

import { ENQUIRIES, CONTACTS } from "../../Constants/constant";
import Enquiries from "../../Components/enquiries";
import Messages from "../../Components/messages";
import Nav from "../../Components/nav";
import Login from "./Login";

export default function Dashboard() {
  const [isloggedin, setisloggedin] = useState(false);
  const [enqData, setenqData] = useState(undefined);
  const [contactData, setcontactData] = useState(undefined);

  const updateLogin = () => {
    setisloggedin(true);
  };

  const logOut = () => {
    setisloggedin(false);
    localStorage.clear();
  };

  useEffect(() => {
    axios.get(ENQUIRIES).then((enqJSON) => {
      setenqData(enqJSON.data[0]);
    });
  }, []);

  useEffect(() => {
    axios.get(CONTACTS).then((contactJSON) => {
      setcontactData(contactJSON.data[(0, 1)]);
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
              <span className="glyphicon glyphicon-log-in"></span> LogOut
            </button>
          </div>
        </div>
      </div>
      <div className="[ container-fluid ]">
        <div className="row">
          <Enquiries
            establishment={enqData.establishment}
            clientName={enqData.clientName}
            email={enqData.email}
            checkin={enqData.checkin}
            checkout={enqData.checkout}
          />
        </div>
        <div className="row">
          <Messages
            clientName={contactData.clientName}
            email={contactData.email}
            message={contactData.message}
          />
        </div>
      </div>
    </div>
  ) : (
    <>
      <Login updateLoginStatus={updateLogin} />
    </>
  );
}
