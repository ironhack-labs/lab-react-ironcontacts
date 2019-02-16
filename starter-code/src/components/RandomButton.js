import React, { Component } from "react";
import contacts from "../contacts.json";

const randomButton = props => {
  return <button onClick={() => alert("Add")}>Add random character!</button>;
};

export default randomButton;
