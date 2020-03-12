import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./public/App.css";
import contactsList from "./public/contacts.json";
import { Header } from "./components/Header";
import { ContactList } from "./components/ContactList";
import _ from "lodash";

const App = () => {
  const [list, setList] = useState(contactsList.splice(0, 5));

  const addRandomContact = () => {
    const randomItem = contactsList[_.random(contactsList.length)];
    setList([randomItem, ...list]);
  };

  return (
    <div>
      <Header addRandomContact={addRandomContact} />
      <ContactList list={list} />
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
