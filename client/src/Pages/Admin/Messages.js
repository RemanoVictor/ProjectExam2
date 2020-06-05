import React, { useState, useEffect } from "react";

import axios from "axios";

import { CONTACTS } from "../../Constants/constant";
import Messages from "../../Components/messages";
import Nav from "../../Components/nav";

export default function ContactMessages() {
  const [messageData, setmessageData] = useState(undefined);
  useEffect(() => {
    axios.get(CONTACTS).then((messageJSON) => {      
      setmessageData(messageJSON.data);
    });
  }, []);
  return (
    <>
      <div className="[ container-fluid ]">
        <div className="[ row ] [ navigation ]">
          <div className="[ col-sm-12 ]">
            <Nav />
          </div>
        </div>
      </div>

      <div className="container-fluid messagebanner">
        <div className="row messagebanner--container">          
          <img
            src="https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=" Bergen,Norway"
            className="messagebanner--container__image"
          />
          <h3 className="messagebanner--container__text">Messages</h3>
          <div className="messagebanner--container__overlay"></div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {messageData !== undefined ? (
            messageData.map((value, index) => {
              return (
                <Messages
                  key={index}
                  clientName={value.clientName}
                  email={value.email}
                  message={value.message}
                />
              );
            })
          ) : (
            <div className="col-md-4 col-md-offset-4">
              <img
                src="https://ec.europa.eu/eurostat/cache/infographs/airports/pictures/plane-loading.gif"
                alt="loading"
                width="50%"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
