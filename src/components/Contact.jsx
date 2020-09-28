import React from 'react';

const Contact = (props) => (
  <tr>
    <td>
      <img src={props.contact.pictureUrl} alt={props.contact.name} />
    </td>
    <td>{props.contact.name}</td>
    <td>{props.contact.popularity}</td>
    <td>
      <button
        className="btn btn-danger"
        onClick={() => props.deleteContact(props.contact)}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default Contact;
