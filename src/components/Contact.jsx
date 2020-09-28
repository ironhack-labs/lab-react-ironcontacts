import React from 'react';
import Button from './Button';

const Contact = (props) => (
  <tr>
    <td>
      <img src={props.contact.pictureUrl} alt={props.contact.name} />
    </td>
    <td>{props.contact.name}</td>
    <td>{props.contact.popularity}</td>
    <td>
      <Button
        className="btn btn-danger"
        onClick={() => props.deleteContact(props.contact)}
      >
        Delete
      </Button>
    </td>
  </tr>
);

export default Contact;
