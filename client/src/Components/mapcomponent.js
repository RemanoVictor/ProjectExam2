import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

function LocationMap({ google, latitude, longitude }) {
  return (
    <div>
      <Map
        google={google}
        zoom={14}
        initialCenter={{
          lat: latitude,
          lng: longitude,
        }}
        //style={containerStyle}
      >
        <Marker name={"Current location"} />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBdE9B6ERAU5GRht33vGZ3ChwfUlX7aVpM",
})(LocationMap);
