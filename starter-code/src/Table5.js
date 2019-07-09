import React from "react";

export default function Table(props) {
  return (
    <div id="big-container">
      <table id="contacts-table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {props.contacts.map((contact, i) => (
            <tr data-index={i} key={i}>
              <td>{contact.name}</td>
              <td>
                <img src={contact.pictureUrl} alt="celeb pic" />
              </td>
              <td>{contact.popularity}</td>
              <td>
                <button onClick={props.clbk}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
