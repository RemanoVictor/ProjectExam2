import React from "react";
import { Link } from "react-router-dom";

export default function Cards(props) {
  const { name, email, img, price, max, selfcatering, id } = props;
  return (
    <div className="col-sm-3 card">
      <h3>Name: {name} </h3>
      <p> email: {email}</p>
      <img src={img} alt="just random" className="[ CardImg ]" />
      <p>price: {price}kr </p>
      <p>max guests: {max}</p>
      <p>selfcatering: {selfcatering}</p>
      <Link to={`/Venuespecific/${id}`} className="btn btn-primary">
        Read More
      </Link>
    </div>
  );
}
