import React from "react";

// function doSomething() {
//   console.log("local click");
// }

export default function Add({ text, onClick: parentHandler }) {
  return (
    <button className="btn" onClick={parentHandler}>
      {text}
    </button>
  );
}
