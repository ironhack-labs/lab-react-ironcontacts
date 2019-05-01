import React from "react";
import "./Contact.css";
import Button from "../Button/Button";

const Contact = ({ contacts, whenClicked }) => (
  <table className="actors">
    <tbody>
      {contacts.map((oneContact, i) => (
        <tr key={i}>
          <td>
            <img
              className="pic"
              src={oneContact.pictureUrl}
              alt="contact-pic"
            />
          </td>
          <td className="name">
            <div>{oneContact.name}</div>
          </td>
          <td className="popularity">
            <div>{oneContact.popularity.toFixed(2)}</div>
          </td>
          <td className="delete">
            <Button
              className="btn"
              text="Delete"
              onClick={() => whenClicked(i)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Contact;
