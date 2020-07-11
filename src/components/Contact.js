import React from 'react';

const Contact = (props) => {
  return (
    <tr>
      <td>
        <img className="contact-picture" src={props.picture} alt={props.name} />
      </td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
    </tr>
  );
};

export default Contact;
