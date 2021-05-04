import React from "react";

function ContactItem({id, picture, name, popularity, removeItem}) {
  return (

      <tr className="contact-item">
        <td>
          <img src={picture} alt="picture"></img>{' '}
        </td>
        <td>{name}</td>
        <td>{popularity}</td>
        <td>
          <button onClick={removeItem}>Remove</button>
        </td>
      </tr>

  );



}



export default ContactItem;

