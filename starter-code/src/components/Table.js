import React from "react";

import contacts from "../../public/data/contacts.json";

import { Row } from "./Row.js";

export const Table = () => {
  const list = contacts.slice(0, 4);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {list.map((e,i) => {
            <Row />
          })}
        </tbody>
      </table>
    </div>
  );
};
