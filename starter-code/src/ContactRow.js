import React from 'react';

const ContactRow = (props) => {
  return (
    <tr>
      <td><img className="contact-image" src={props.pictureUrl} alt="contact face" /></td>
      <td>{props.name}</td>
      <td>{Number(props.popularity).toFixed(2)}</td>
      <td>{props.children}</td>
    </tr> 
  )
}

export default ContactRow;