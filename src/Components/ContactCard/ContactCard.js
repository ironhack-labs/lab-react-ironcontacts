import React from "react";
import "./ContactCard.css";

const ContactCard = (props) => {
  return (
    <tr>
      <td>
        <img src={props.pictureUrl} alt="Hi, I'm a contact" />
      </td>
      <td>
        <p>{props.name}</p>
      </td>
      <td>
        <p>{props.popularity}</p>
      </td>
      <td>
        <button onClick={props.clickToDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default ContactCard;
