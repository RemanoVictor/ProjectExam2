import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import axios from "axios";

import { ESTABLISHMENTSPECIFIC } from "../../Constants/constant";

import LocationMap from "../../Components/mapcomponent";
import Nav from "../../Components/nav2";
import VenueSpecific from "../../Components/venuespecific";

export default function Venue_Specific() {
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

      {estData !== undefined ? (
        <div className=" container-fluid ">
          <img src={estData.imageUrl} alt="a preview of the venue" />
          <div className="row">
            <div className="col-md-6">
              <VenueSpecific
                name={estData.establishmentName}
                max={estData.maxGuests}
                selfcatering={estData.selfCatering}
                email={estData.establishmentEmail}
                price={estData.price}
                description={estData.description}
              />
            </div>
            <div className="col-md-6 map">
              <LocationMap
                latitude={estData.googleLat}
                longitude={estData.googleLong}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <img
            src="https://ec.europa.eu/eurostat/cache/infographs/airports/pictures/plane-loading.gif"
            alt="loading"
            width="50%"
          />
        </div>
      )}
    </>
  );
}
