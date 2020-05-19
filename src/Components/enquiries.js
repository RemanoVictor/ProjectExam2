import React from "react";

export default function Enquiries(props) {
  const { establishment, clientName, email, checkin, checkout } = props;
  return (
    <div className="[ row ][ card ][ cardspecific ]">
      <div className="[ col-sm-6 ] ">
        <h2> Name: {establishment} </h2>
      </div>
      <div className="[ col-sm-6 ][ card-specific-body ]">
        <p>Name: {clientName}</p>
        <p>email: {email}</p>
        <p>check-in: {checkin}</p>
        <p>check-out: {checkout}</p>
      </div>
    </div>
  );
}
