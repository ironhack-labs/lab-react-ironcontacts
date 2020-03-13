import React from "react";
import ReactDOM from "react-dom";
import { FamousList } from "./components/FamousList";

const Famous = () => (
  <div>
    <FamousList />
  </div>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Famous></Famous>, root);
});
