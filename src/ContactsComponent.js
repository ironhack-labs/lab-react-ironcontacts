import React from "react";
import "./ContactsComponent.css";
import contacts from "./contacts.json";

function Contacts({ pictureUrl, name, popularity }) {
  return (
    <tbody>
      {contacts.map((el) => {
        return (
          <tr>
            <td>{el.pictureUrl}</td>
            <td>{el.name}</td>
            <td>{el.popularity}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default Contacts;
