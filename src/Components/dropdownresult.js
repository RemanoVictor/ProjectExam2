import React from "react";
import { Link } from "react-router-dom";

export default function DropDownResults(props) {
  const { name, id } = props;
  return (
    <div>
      <li>{name}</li>{" "}
      <Link to={`/Venuespecific/${id}`} className="btn btn-primary">
        Read More
      </Link>
    </div>
  );
}
