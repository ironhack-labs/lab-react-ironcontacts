import React from "react";

function ContactItem({id, pictureUrl, name, popularity, removeItem}) {
  return (

      <tr className="contact-item">
        <td>
          <img src={pictureUrl} alt="picture" width="100px"></img>{' '}
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

