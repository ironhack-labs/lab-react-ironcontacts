import React from "react";

function Contact({ name, pictureUrl, popularity }) {
  return (
    <>
      <div className="card">
        <img src={pictureUrl} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <h5 className="card-title">Popularity: {popularity}</h5>
        </div>
      </div>
    </>
  );
}

export default Contact;
