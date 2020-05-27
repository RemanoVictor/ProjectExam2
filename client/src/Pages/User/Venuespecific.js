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
            <div className="container-fluid">
              <div className="row">
                <img src={estData.imageUrl} alt="a preview of the venue" />
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <VenueSpecific
                    name={estData.establishmentName}
                    max={estData.maxGuests}
                    selfcatering={estData.selfCatering}
                    email={estData.establishmentEmail}
                    price={estData.price}
                    description={estData.description}
                  />
                </div>
                <div className="col-sm-6 map">
                  <LocationMap
                    latitude={estData.googleLat}
                    longitude={estData.googleLong}
                    price={estData.price}
                  />
                </div>
              </div>
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
