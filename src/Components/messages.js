import React from "react";

export default function Messages(props) {
  const { clientName, email, message } = props;
  return (
    <div className="col-md-6 message--card">
      <div className=" col-md-4 card message--card__image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs_tXpPKVwoWQynT736mi5UMQf8cTJeqbrBTjnIc35fU103_bQ&usqp=CAU"
          alt="icon plaeholder"
        />
      </div>
      <div className="col-md-8 message--card__body">
        <p>Name: {clientName}</p>
        <p>email: {email}</p>
        <p>message: {message}</p>
      </div>
    </div>
  );
}
