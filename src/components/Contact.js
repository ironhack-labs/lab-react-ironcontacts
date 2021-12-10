import React from "react";

function Contact({ name, pictureUrl, popularity }) {
  return (
    <>
      <h2>Name:{name}</h2>
      <h2>Popularity:{popularity}</h2>
      <img src={pictureUrl} alt={name} />
    </>
  );
}

export default Contact;
