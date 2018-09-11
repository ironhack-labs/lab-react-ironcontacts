import React, { Component } from "react";

const Card = props => {
  return (
    <div className="contact-container">
      <img src={props.pictureUrl} alt="" />
      <p>{props.name}</p>
      <p>{props.popularity}</p>
      <button onClick={() => props.deleteContact(props.index)}>Delete</button>
    </div>
  );
};

export default Card;
