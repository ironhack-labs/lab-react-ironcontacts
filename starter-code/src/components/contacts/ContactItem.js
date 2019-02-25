import React from 'react';

const ContactItem = (props) => {
  return(
    <tr>
      <td><img src={props.pictureUrl} alt="..." /></td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td><button className="btn btn-danger" onClick={props.onClickDelete}>x</button></td>
    </tr>
  );
}

export default ContactItem;