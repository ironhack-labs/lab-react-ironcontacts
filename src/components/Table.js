import React, { useState } from "react";

import contacts from "../../public/data/contacts.json";

import { Row } from "./Row.js";
import { Button } from "./Button.js";

const initContacts = contacts.slice(0, 5).map(e => {
  e.check = false;
  return e;
});

export const Table = () => {
  const [list, setList] = useState(initContacts);

  const addRandom = () => {
    const newList = [...list];
    let contact = null;

    do {
      contact = contacts[Math.floor(Math.random() * contacts.length)];
    } while (list.includes(contact));

    contact.check = false;
    newList.push(contact);

    setList(newList);
  };

  const sortByName = () => {
    const newList = [...list.sort((a, b) => (a.name > b.name ? 1 : -1))];

    setList(newList);
  };

  const sortByPopularity = () => {
    const newList = [...list.sort((a, b) => b.popularity - a.popularity)];

    setList(newList);
  };

  const handleCheck = (newCheck, index) => {
    const newList = [...list];

    newList[index].check = newCheck;

    setList(newList);
  };

  const deleteSelect = () => {
    const newList = list.filter(e => !e.check);

    console.log(newList);

    setList(newList);
  };

  return (
    <div className="Table">
      <div className="wrapper-btn">
        <Button className="btn-add" setClick={addRandom}>
          Add Random Contact
        </Button>
        <Button className="btn-sort" setClick={sortByName}>
          Sort by name
        </Button>
        <Button className="btn-sort" setClick={sortByPopularity}>
          Sort by popularity
        </Button>
        <Button className="btn-delete" setClick={deleteSelect}>
          Delete
        </Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {list.map((e, i) => (
            <Row check={e.check} setChecked={c => handleCheck(c, i)} key={i}>
              {e}
            </Row>
          ))}
        </tbody>
      </table>
    </div>
  );
};
