import React from 'react';

const Contact = props => {
  return (
    <tr key={props.key}>
      <td><img src={props.img} alt="actor" /></td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td><button onClick={props.onClick}>Delete</button></td>
    </tr>
  )
}
export default Contact;