import React from "react";
import "./Page.css";

export default function Page(props) {
  const contacts = props.contacts.map((contact) => {
    return (
      <li key={contact.id} className="contact">
        <img src={contact.pictureUrl} alt="" height="100" />
        <p>{contact.name}</p>
        <p>{contact.popularity.toFixed(2)}</p>
        <button onClick={() => props.deleteContact(contact.id)}>Delete</button>
      </li>
    );
  });
  return <ul>{contacts}</ul>;
}
