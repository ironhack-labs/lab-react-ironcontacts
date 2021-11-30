import React from "react";
import "./ContactCard.css";

const ContactCard = ({ name, pictureUrl, popularity, removeContact }) => {
  return (
    <div className="Card">
      <article className="CardContainer">
        <img src={pictureUrl} />
        <div className="CardInfo">
          <h4>{name}</h4>
          <p>Popularity: {popularity}</p>
        </div>
        <button onClick={removeContact}>Delete contact</button>
      </article>
    </div>
  );
};

export default ContactCard;
