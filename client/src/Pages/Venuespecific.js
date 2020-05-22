import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import axios from "axios";

import { ESTABLISHMENTSPECIFIC } from "./../Constants/constant";
import VenueSpecific from "./../Components/venuespecific";
// import { HEROKU_BYPASS_CORS } from "./../Constants/constant";

export default function Venue_Specific() {
  const [estData, setestData] = useState(undefined);
  let { id } = useParams();
  useEffect(() => {
    axios.get(ESTABLISHMENTSPECIFIC + id).then((estJSON) => {
      console.log(estJSON);
      setestData(estJSON.data);
    });
  }, [id]);
  return (
    <div className="container">
      {estData !== undefined ? (
        <VenueSpecific
          id={estData.id}
          name={estData.establishmentName}
          img={`${estData.imageUrl}`}
        />
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
