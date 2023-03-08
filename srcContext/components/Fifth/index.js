import React from "react";
import "./style.css";

export default function Fifth() {
  const clickHandle = (e) => {
    console.log("hello");
  };
  return (
    <div className="Fifth">
      <h2>Fifth</h2>
      <button onClick={clickHandle}>Add one</button>
    </div>
  );
}
