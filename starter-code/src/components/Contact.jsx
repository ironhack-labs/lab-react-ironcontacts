import React from 'react';
import App from '../App';
const Contact = (props) => {

  return (
    <tr>
      <td><img scr={props.pictureUrl}></img></td>
      <td>{props.name}</td> 
      <td>{props.popularity}</td>
      <td><button onClick={() => props.delete(props.key)}>Delete</button></td>
    </tr>
  )
}
export default Contact;