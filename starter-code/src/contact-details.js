import React from "react";
// import "./UserDetails.css";

export default function({ contactsAll }) {
  return (
    <div className="user-details">
      <h2 className="title">Contacts</h2>
      {contactAll(
        <ul className="list">
          <li className="item">
            <b>Picture</b> {contactAll.picture}
          </li>
          <li className="item">
            <b>Name</b> {contactAll.name}
          </li>
          <li className="item">
            <b>Popularity</b>
            {contactAll.popularity}
          </li>
        </ul>
      )}
    </div>
  );
}
