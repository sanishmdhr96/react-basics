import React, { useState } from "react";

function Immutability() {
  const [todoList, setTodoList] = useState([
    {
      name: "",
    },
  ]);
  //   const todoList = [];

  let obj = { name: "sanish", value: "123" };
  obj.name = "Manish";

  let obj1 = Object.assign(obj, { name: "Anish" });

  console.log(obj1);

  const addItem = () => {
    const newItem = {
      name: "Learn react",
    };

    setTodoList((prevState) => [...prevState, newItem]);
  };

  console.log(todoList);

  return (
    <div>
      <button onClick={addItem}>Add</button>

      <ul>{todoList && todoList.map((item) => <li>{item.name}</li>)}</ul>
    </div>
  );
}

export default Immutability;
