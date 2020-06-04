import React from "react";
import { Link } from "react-router-dom";

export default function Cards(props) {
  const { name, email, img, price, max, selfcatering, id } = props;
  return (
    <div className="col-md-6">
      <h2>Name: {name} </h2>
      <p> email: {email}</p>
      <img src={img} alt="just random" className="card--image" />
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
