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
    </tr>
  );
};

export default Contact;
