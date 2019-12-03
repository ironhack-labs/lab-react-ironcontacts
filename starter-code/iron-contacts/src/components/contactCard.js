import React from "react";

const contactCard = props => {
  return (
    <tr className="contact-box">
      <td>
        <img src={props.imgSrc} alt={props.name} />
      </td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td>
        <button className="btn btn-dark" onClick={props.deleteContact}>Delete</button>
      </td>
    </tr>
  );
};

export default contactCard;
