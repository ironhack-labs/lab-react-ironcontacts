import React from "react";
import './Contacts.css';

const Contacts = ({ actors, addRandomContact, sortByName, sortByPopularity, deleteContact }) => {
  return (
    <div className="">
        <h1>IronContacts</h1>
          <button onClick={addRandomContact}>Add Random Contact</button>
          <button onClick={sortByName}>Sort By Name</button>
          <button onClick={sortByPopularity}>Sort By Popularity</button>
      <ul>
          <span>Picture</span>
          <span>Name</span>
          <span>Popularity</span>
          <span>Action</span>
        {actors.map(actor => {
          return (
            <div className="contacts" key={actor.id}>
                <li><img src={actor.pictureUrl} alt="actor "/></li>
                <li>{actor.name}</li>
                <li>{actor.popularity.toFixed(2)}</li>
                <li><button id={actor.id} onClick={deleteContact}>Delete</button></li>
            </div>
          )
        })}
      </ul>
    </div>
  );
};

export default Contacts;

