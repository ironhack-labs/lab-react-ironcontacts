import React from "react";

import contacts from "../../public/data/contacts.json";

import { Row } from "./Row.js";

import "./Table.css";

export const Table = () => {
  const list = contacts.slice(0, 5);

  return (
    <div className="Table">
      <table className="table-content">
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
