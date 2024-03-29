import React from "react";

export default function Enquiries(props) {
  const { establishment, clientName, email, checkin, checkout } = props;
  return (
    <div className="col-md-6 userenquiries--container">
      <div>
        <img
          src="https://endpoint-cdn.imgix.net/cms/images/Test-Content/Placeholders/Image-Place-Holder.jpg?auto=format&crop=focalpoint&domain=endpoint-cdn.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=418&ixlib=php-2.3.0&q=82&w=800&s=fe96fdf3d77f659d3184aa71ac930f6c"
          alt="venue placeholder icon"
          className="userenquiries--container__image"
        />
      </div>
      <div className="userenquiries--container__body">
        <h2>Establishment Name: {establishment} </h2>
        <p>Client Name: {clientName}</p>
        <p>Client email: {email}</p>
        <p>check-in: {checkin}</p>
        <p>check-out: {checkout}</p>
      </div>
    </div>
  );
}
