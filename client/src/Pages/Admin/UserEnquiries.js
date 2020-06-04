import React, { useState, useEffect } from "react";

import axios from "axios";

import { ENQUIRIES } from "../../Constants/constant";
import Enquiries from "../../Components/enquiries";
import Nav from "../../Components/nav";

export default function UserEnquiries() {
  const [enqData, setenqData] = useState(undefined);
  useEffect(() => {
    axios.get(ENQUIRIES).then((enqJSON) => {
      console.log(enqJSON);
      setenqData(enqJSON.data);
    });
  }, []);
  return (
    <>
      <div className="[ row ] [ navigation ]">
        <div className="[ col-sm-12 ]">
          <Nav />
        </div>
      </div>

      <div className="container-fluid enquirybanner">
        <div className="row enquirybanner--container">
          <img
            src="https://images.pexels.com/photos/2874752/pexels-photo-2874752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="forest leaves in Bergen"
            className="enquirybanner--container__image"
          />
          <h2 className="enquirybanner--container__text">Enquiries</h2>
          <div className="enquirybanner--container__overlay"></div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row userenquiries">
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
