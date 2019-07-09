import React from "react";

function ContactTab(props) {
  return (
    <tr className="contact">
      <td>
        <img className="contact-picture" src={props.pictureUrl} />
      </td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td>
        <button onClick={props.clickToDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default ContactTab;
