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
      setcontactData(contactJSON.data[0]);
    });
  }, []);

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
            <div className="col-md-4"></div>
            <div className="col-md-4 welcome">
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

        <div className="row enquiriesSection">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <h3 className="enquiriesHeading"> Enquiries </h3>
              </div>
              <div className="col-md-4"></div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <Enquiries
                  establishment={enqData.establishment}
                  clientName={enqData.clientName}
                  email={enqData.email}
                  checkin={enqData.checkin}
                  checkout={enqData.checkout}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row messagesSection">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <h3 className="enquiriesHeading"> Messages </h3>
              </div>
              <div className="col-md-4"></div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <Messages
                  clientName={contactData.clientName}
                  email={contactData.email}
                  message={contactData.message}
                />
              </div>
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
