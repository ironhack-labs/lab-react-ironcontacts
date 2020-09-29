import React from "react";

const ContactsCard = ({ name, pictureUrl, popularity, id, removeActor }) => {
  return (
    <article className="movie-card">
      <h5>{name}</h5>
      <img src={pictureUrl} alt={name} style={{ width: 8 + "em" }} />
      <h3>Popularity: {popularity}</h3>

      <button onClick={removeActor}>Eliminar </button>
    </article>
  );
};

export default ContactsCard;
