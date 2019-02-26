import React from 'react';

const ContactItem = (props) => {

  return (
      <tr>
        <td><img src={props.pictureUrl} className="rounded mx-auto" alt={props.name} style={{height: 60}}></img></td>
        <td className="align-middle">{props.name}</td>
        <td className="align-middle">{props.popularity}</td>
        <td className="align-middle"><button className="btn btn-danger" onClick={props.onClickDelete}>-</button></td>
      </tr>
  )
}

export default ContactItem
