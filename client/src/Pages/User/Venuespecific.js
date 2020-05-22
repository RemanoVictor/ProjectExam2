import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import LocationMap from "../../Components/mapcomponent";

import Nav from "../../Components/nav2";

import axios from "axios";

import { ESTABLISHMENTSPECIFIC } from "../../Constants/constant";
import VenueSpecific from "../../Components/venuespecific";

export default function Venue_Specific(props) {
  const [estData, setestData] = useState(undefined);

  let { id } = useParams();
  useEffect(() => {
    axios.get(ESTABLISHMENTSPECIFIC + id).then((estJSON) => {
      setestData(estJSON.data);
    });
  }, [id]);

  return (
    <>
      <div className="[ container-fluid ]">
        <div className="[ row ] [ navigation ]">
          <div className="[ col-sm-12 ]">
            <Nav />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        {estData !== undefined ? (
          <>
            <div>
              <img src={`${estData.imageUrl}`} />
            </div>
            <VenueSpecific
              name={estData.establishmentName}
              email={estData.establishmentEmail}
              selfcatering={estData.selfCatering}
              price={estData.price}
              max={estData.maxGuests}
            />
            <div>
              <LocationMap
                latitude={estData.googleLat}
                longitude={estData.googleLong}
              />
            </div>
          </>
        ) : (
          <div>
            <img
              src="https://bloxy.info/assets/progress_horizontal-e1c9f4c66e06ad7aa169dc42e420abe6f097111e9d98cf35dfc162bb41ffffe1.gif"
              alt="loading"
            />
          </div>
        )}
      </div>
    </>
  );
}
