import React from 'react';
import './contacts.css';

const Contacts = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.map((theContact) => {
          return (
            <tr key={theContact.id}>
              <td>
                <img
                  className="contactimage"
                  src={theContact.pictureUrl}
                  alt={theContact.name}
                />{' '}
              </td>
              <td>{theContact.name}</td>
              <td>{theContact.popularity.toFixed(2)}</td>
              <td>
                <button
                  onClick={() => {
                    props.deleteContact(theContact.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Contacts;
