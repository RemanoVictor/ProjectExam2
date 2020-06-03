import React from "react";
import { Link } from "react-router-dom";

export default function DropDownResults(props) {
  const { name, id } = props;
  return (
    <div className="row">
      <div className="col-md-8">
        <p>{name}</p>
      </div>
      <div className="col-md-4">
        <Link to={`/Venuespecific/${id}`} className="btn">
          View
        </Link>
      </div>
    </div>
  );
}
