import React from 'react';

const Contact = (props) => (
  <tr>
    <td>
      <img src={props.contact.pictureUrl} alt={props.contact.name} />
    </td>
    <td>{props.contact.name}</td>
    <td>{props.contact.popularity}</td>
  </tr>
);

export default Contact;
