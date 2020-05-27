import React from "react";
import { Link } from "react-router-dom";

export default function VenueSpecific(props) {
  const { name, email, price, max, selfcatering, description } = props;
  return (
    <div className=" container-fluid  ">
      <h2>Name: {name} </h2>
      <p>Max Persons: {max}</p>
      <p>Self catering: {selfcatering}</p>
      <p>email:{email}</p>
      <p>Price: {price}kr</p>
      <p>Description: {description}</p>

      <Link to={"/Enquiries"} className="btn btn-primary">
        Enquire
      </Link>
    </div>
  );
}
