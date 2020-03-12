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

  const sort = value => {
    const key = Object.key(value);
    console.log(key);

    const sorted = _.sortBy(list, [contact => contact[key]]);
    console.log(sorted);

    setList(sorted);
  };

  return (
    <div>
      <Header addRandomContact={addRandomContact} sortByName={sort("name")} />
      <ContactList list={list} />
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
