import React from "react";
import { Link } from "react-router-dom";

export default function VenueSpecific(props) {
  const { name, email, price, max, selfcatering, description } = props;
  return (
    <div className="container-fluid">
      <h2>Name: {name} </h2>
      <br></br>
      <p>Max Persons: {max}</p>
      <br></br>
      <p>Self catering: {selfcatering}</p>
      <br></br>
      <p>email:{email}</p>
      <br></br>
      <p>Price: {price}kr</p>
      <br></br>
      <p>Description: {description}</p>
      <br></br>

      <Link to={"/Enquiries"} className="btn btn-primary">
        Enquire
      </Link>
    </div>
  );
}
