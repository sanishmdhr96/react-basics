import React from "react";

function Counter(props) {
  console.log(props);
  return <div>{props.count}</div>;
}

export default Counter;
