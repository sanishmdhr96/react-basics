import React from "react";

function Destructuring({ name: clientName, address, email, country, state }) {
  const array = ["apple", "banana", "carrot"];

  const [app, ban, car] = array;
  return (
    <div>
      <div>{app}</div>
      <div>{clientName}</div>
      <div>{address}</div>
      <div>{email}</div>
      <div>{country}</div>
      <div>{state}</div>
    </div>
  );
}

export default Destructuring;
