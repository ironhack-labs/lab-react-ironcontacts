import React from 'react';
import '../stylesheets/Table.css';

export default function Table(props) {
  return (
    <table className="table">
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Action</th>
      </tr>

      {props.contacts.map((contact, index) => {
        return (
          <tr>
            <td>
              <img
                className="img-user"
                src={contact.pictureUrl}
                alt={contact.name}
              />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>
              <button
                className="btn-delete"
                onClick={() => props.deleteUser(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
}
