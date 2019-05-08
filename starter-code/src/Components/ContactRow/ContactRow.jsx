import React from 'react';
import Button from '../Button/Button'

function ContactCard(props) {
  return (
    <tr>
      <td><img src={props.fn.pictureUrl} alt={props.fn.name} width="100"/></td>
      <td><h3>{props.fn.name}</h3></td>
      <td><h3>{props.fn.popularity.toFixed(2)}</h3></td>
      <td>{<Button onClick={props.onClick} name="Delete"/>}</td>
    </tr>
);
}

export default ContactCard;
