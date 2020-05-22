import React from "react";

export default function VenueSpecific(props) {
  return (
    <div className="[ row ][ card ][ cardspecific ]">
      <div className="[ col-sm-6 ] ">
        <h2> Name: {props.name} </h2>
        <img src={props.img} alt="playing card" />
      </div>
      <div className="[ col-sm-6 ][ card-specific-body ]">
        <p>Colour: {props.colour}</p>
        <p>Rarity: {props.rarity}</p>
        <p>About: {props.about}</p>
      </div>
    </div>
  );
}
