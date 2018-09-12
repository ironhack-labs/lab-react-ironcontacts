import React, { Component } from "react";

const Contact = props => {
  return (
    <tr>
      <td>
        <img src={props.img} alt="" />
      </td>
      <td>
        <h3>{props.name}</h3>
      </td>
      <td>
        <p>{props.popularity}</p>
      </td>
      <td>
        <button onClick={() => props.deleteContact(props.name)}>Delete</button>
      </td>
    </tr>
  );
};

export default Contact;
