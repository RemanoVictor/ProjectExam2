import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import LocationMap from "../../Components/mapcomponent";

import Nav from "../../Components/nav2";

import axios from "axios";

import { ESTABLISHMENTSPECIFIC } from "../../Constants/constant";
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
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <img
            src="https://static-steelkiwi-dev.s3.amazonaws.com/media/filer_public/58/33/58336e64-632d-47dd-8d46-ab6cc28dd05b/5b370ecf-6835-4d78-92a1-b9defa012cd7.gif"
            alt="loading"
          />
        </div>
      )}
    </>
  );
}
