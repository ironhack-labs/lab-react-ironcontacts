import React from "react";
import "./Contacts.css";

const Contacts = ({ contacts }) => (
  <table className="contact">
    {/* JSX pide tbody obligatoriamente */}
    <tbody>
      {
        contacts.map((contact, i) => (
          <tr className="row" key={i}>
            <td className="column-body">
              <span className="name">{contact.name}</span>
            </td>
            <td className="column-body">
              <span className="popularity">{contact.popularity.toFixed(2)}</span>
            </td>
            <td className="column-body">
              <img className="picture" src={contact.pictureUrl} alt="contact image" />
            </td>
            <td className="column-body">
              <span className="delete">X</span>
            </td>
          </tr>
        ))
      }
    </tbody>

  </table>
);

export default Contacts;
