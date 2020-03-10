import React from "react";

import contacts from "../../public/data/contacts.json";

import { Row } from "./Row.js";
import { Button } from "./Button.js";

import "./Table.css";

export const Table = () => {
  const list = contacts.slice(0, 5);

  const handleClick = () => {

  }

  return (
    <div className="Table">
      <div className="wrapper-btn">
        <Button>Add Random Contact</Button>
        <Button>Sort by name</Button>
        <Button>Sort by popularity</Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {list.map((e, i) => (
            <Row key={i}>{e}</Row>
          ))}
        </tbody>
      </table>
    </div>
  );
};
