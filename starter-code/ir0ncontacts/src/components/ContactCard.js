import React from "react";
import "./style/button.css";



const ContactCard = props => {
  return (
    <>
      <tr>
        <td>
          <img className="contactImg"
            src={props.pictureUrl}
            alt={props.name}
            width="30%"
            height="30%"
          ></img>
        </td>
        <td>{props.name}</td>
        <td> {props.popularity}</td>
        <td>
          <button onClick={props.deleteMovie} className="btn btn-sm btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
export default ContactCard;
