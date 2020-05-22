import React, { useState, useEffect } from "react";

import axios from "axios";

import { ENQUIRIES } from "./../Constants/constant";
import Enquiries from "./../Components/enquiries";
// import { HEROKU_BYPASS_CORS } from "./../Constants/constant";

export default function Dashboard() {
  const [enqData, setenqData] = useState(undefined);
  useEffect(() => {
    axios.get(ENQUIRIES).then((enqJSON) => {
      console.log(enqJSON);
      setenqData(enqJSON.data);
    });
  }, []);
  return (
    <div className="container">
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
  );
}
