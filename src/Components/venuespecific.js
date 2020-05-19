import React from "react";
import { Link } from "react-router-dom";

export default function VenueSpecific(props) {
  const { name, img, email, price, max, selfcatering } = props;
  return (
    <div className="[ row ][ card ][ cardspecific ]">
      <div className="[ col-sm-6 ] ">
        <h2> Name: {name} </h2>
        <img src={img} alt="playing card" />
      </div>
      <div className="[ col-sm-6 ][ card-specific-body ]">
        <p>email:{email}</p>
        <p>Price: {price}</p>
        <p>Self catering: {selfcatering}</p>
        <p>Price: {price}</p>
        <p>Max Persons: {max}</p>
        <Link to={"/Enquiries"} className="btn btn-primary">
          Enquire
        </Link>
      </div>
    </div>
  );
}
