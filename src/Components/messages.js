import React from "react";

export default function Messages(props) {
  const { clientName, email, message } = props;
  return (
    <div className="container">
      <div className=" col-sm-4 card message--Card__Image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs_tXpPKVwoWQynT736mi5UMQf8cTJeqbrBTjnIc35fU103_bQ&usqp=CAU"
          alt="icon plaeholder"
        />
      </div>
      <div className="col-sm-8 message--Card--Body">
        <p>Name: {clientName}</p>
        <p>email: {email}</p>
        <p>message: {message}</p>
      </div>
    </div>
  );
}
