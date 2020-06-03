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
    <div className="[ container-fluid ]">
      <div className="[ row ] [ navigation ]">
        <div className="[ col-sm-12 ]">
          <Nav />
        </div>
      </div>

      <div className="container-fluid userEnquiries">
        <div className="row">
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
                src="https://ec.europa.eu/eurostat/cache/infographs/airports/pictures/plane-loading.gif"
                alt="loading"
                width="50%"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
