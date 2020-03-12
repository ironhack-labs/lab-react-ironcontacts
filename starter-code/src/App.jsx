import React, { useState } from "react";
import ReactDOM from "react-dom";
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

  const deleteContact = item => {
    const filteredList = list.filter(contact => contact !== item);
    setList(filteredList);
  };

  const sort = key => {
    const order = key === "name" ? "asc" : "desc";
    const sorted = _.orderBy(list, [contact => contact[key]], [order]);
    setList(sorted);
  };

  return (
    <div>
      <Header addRandomContact={addRandomContact} sortByName={e => sort("name")} sortByPopularity={e => sort("popularity")} />
      <ContactList list={list} deleteContact={deleteContact} />
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
