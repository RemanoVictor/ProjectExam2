import React from "react";
import { Link } from "react-router-dom";

export default function Cards(props) {
  const { name, email, img, price, max, selfcatering, id } = props;
  return (
    <div className="col-sm-6 card">
      <h3>Name: {name} </h3>
      <p> email: {email}</p>
      <img src={img} alt="just random" className="[ CardImg ]" />
      <br></br>
      <p>price: {price}kr per night </p>
      <br></br>
      <p>max guests: {max}</p>
      <br></br>
      <p>self-catering: {selfcatering}</p>
      <br></br>
      <Link to={`/Venuespecific/${id}`} className="btn btn-primary">
        Read More
      </Link>
    </div>
  );
}
