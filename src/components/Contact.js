import React from 'react';
import ButtonDelete from './ButtonDelete';

const Contact = (props) => {
  return (
    <tr>
      <td>
        <img className="contact-picture" src={props.picture} alt={props.name} />
      </td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td>
        <ButtonDelete delete={props.delete} />
      </td>
    </tr>
  );
};

export default Contact;
