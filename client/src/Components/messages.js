import React from "react";

export default function Messages(props) {
  const { clientName, email, message } = props;
  return (
    <div className="[ row ][ card ]">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs_tXpPKVwoWQynT736mi5UMQf8cTJeqbrBTjnIc35fU103_bQ&usqp=CAU"
        alt="placeholder icon"
      />
      <div className="[ col-sm-6 ]">
        <p>Name: {clientName}</p>
        <p>email: {email}</p>
        <p>message: {message}</p>
      </div>
    </div>
  );
}
