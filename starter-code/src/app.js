import React from "react";
import ReactDOM from "react-dom";
import { FamousList, Button } from "./components/FamousList";
// import { Button } from "./components/RandomFamous";
console.log(FamousList);
const Famous = () => (
  <div>
    <FamousList />
  </div>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Famous></Famous>, root);
});
