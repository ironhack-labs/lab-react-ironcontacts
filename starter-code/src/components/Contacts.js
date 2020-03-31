import React from "react";
import './Contacts.css';

const Contacts = ({ actors }) => {
  return (
    <div className="">
        {actors.map(actor => {
          return (
            <div className="contacts" key={actor.id}>
                <img src={actor.pictureUrl} alt={actor.name} />
                {actor.name}
                {actor.popularity.toFixed(2)}
            </div>
          )
        })}
    </div>
  );
};

export default Contacts;