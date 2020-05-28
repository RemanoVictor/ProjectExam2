import React from "react";

export default function Messages(props) {
  const { clientName, email, message } = props;
  return (
    <div className="[ row ][ card ][ cardspecific ]">
      <div className="[ col-sm-6 ][ card-specific-body ]">
        <p>Name: {clientName}</p>
        <p>email: {email}</p>
        <p>message: {message}</p>
      </div>
    </div>
  );
}
