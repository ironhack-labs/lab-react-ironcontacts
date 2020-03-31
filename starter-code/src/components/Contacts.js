import React from "react";
import './Contacts.css';

const Contacts = ({ actors, deleteContact }) => {
  return (
    <div className="">
        {actors.map(actor => {
          return (
            <div className="contacts" key={actor.id}>
                <img src={actor.pictureUrl} alt={actor.name} />
                {actor.name}
                {actor.popularity.toFixed(2)}
                <button id={actor.id} onClick={deleteContact}>Delete</button>
            </div>
          )
        })}
    </div>
  );
};

export default Contacts;