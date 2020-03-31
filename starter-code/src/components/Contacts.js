import React from "react";

const Contacts = ({ actors, addRandomContact }) => {
  return (
    <div className="">
        <h1>IronContacts</h1>
          <button onClick={addRandomContact}>Add Random Contact
          </button>
        {actors.map(actor => {
          return (
            <div className="contacts" key={actor.id}>
                <li><img src={actor.pictureUrl} alt={actor.name} /></li>
                <li>{actor.name}</li>
                <li>{actor.popularity.toFixed(2)}</li>
            </div>
          )
        })}
    </div>
  );
};

export default Contacts;