import React, { Component } from "react";
import contacts from "./contacts.json";

let myContactArr = [];
const addContacts = () => {
  for (let i = 0; i < 5; i++) {
    myContactArr.push(contacts[i]);
  }
  console.log(myContactArr);
};

export const Table = () => {
  addContacts();
  return (
    <div>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
    </div>
  );
};

export const Contact = () => {
  return (
   
      <div>
        {myContactArr.map(e => (
          <tr key={e.name}>
            <td>
              <img width={100} src={e.pictureUrl} />
            </td>
            <td>{e.name}</td>
            <td>{e.popularity}</td>
          </tr>
        ))}
      </div>
   
  );
};
