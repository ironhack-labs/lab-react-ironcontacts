import React from "react";

import contacts from "../../public/data/contacts.json";

import "./Main.css";

export const Main = () => {
  const list = contacts.slice(0, 4);

  return (
    <div>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {list.map(item => (
          <tr>
            <td>{item.pictureUrl}</td>
            <td>{item.popularity}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
