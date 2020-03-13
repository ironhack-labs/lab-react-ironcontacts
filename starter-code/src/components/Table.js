import React, { useState } from "react";

import contactsData from "../../public/data/contacts.json";
import { Contact } from "./Contact";

const initList = contactsData.slice(0, 5);

export const Table = () => {
  const [list, setList] = useState(initList);

  const addRandom = () => {
    const newList = [...list];
    let randomContact;

    do {
      randomContact =
        contactsData[Math.floor(Math.random() * contactsData.length)];
    } while (list.includes(contact));

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

  const handleDelete = index => {
    const newList = [...list];
    newList.splice(index, 1);
    setState(newList);
  };

  return (
    <div className="Table">
      <div className="wrapper-btn">
        <button className="btn-add" onClick={() => addRandom()}>
          Add random contact
        </button>
        <button className="btn-sort" onClick={() => sortByName()}>
          Sort by name
        </button>
        <button className="btn-sort" onClick={() => sortByPopularity()}>
          Sort by popularity
        </button>
      </div>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Select</th>
        </tr>
        <tr>
          {list.map((e, i) => (
            <Contact
              pic={e.pictureUrl}
              name={e.name}
              popu={e.popularity}
              deleteFunction={handleDelete}
              index={i}
            />
          ))}
        </tr>
      </table>
    </div>
  );
};
