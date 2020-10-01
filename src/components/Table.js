import React, { useState } from 'react';

// Importing the data
import contacts from '../assets/data/contacts.json';

const getRandomArtist = () => {
  const randomI = Math.floor(Math.random() * contacts.length);
  return contacts[randomI];
};

const Table = () => {
  const [state, setState] = useState(contacts.slice(0, 5));

  const handleAdd = (event) => {
    const newArtist = getRandomArtist();
    setState([...state, newArtist]);
  };

  const handleSortName = (event) => {
    const newState = [...state];
    newState.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    setState([...newState]);
  };

  const handleSortPop = (event) => {
    const newState = [...state];
    newState.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
      return 0;
    });
    setState([...newState]);
  };

  const handleDelete = (event) => {
    const newState = [...state];
    newState.splice(event.currentTarget.id, 1);
    setState([...newState]);
  };

  return (
    <div className="container">
      <button className="button is-info mr-3" onClick={handleAdd}>
        Add Random Contact
      </button>
      <button className="button mr-3" onClick={handleSortName}>
        Sort by name
      </button>
      <button className="button" onClick={handleSortPop}>
        Sort by popularity
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.map((artist, i) => (
            <tr key={artist.id}>
              <th>
                <img src={artist.pictureUrl} alt={artist.name} width="80px" />
              </th>
              <th>{artist.name}</th>
              <th>{artist.popularity}</th>
              <th>
                <button
                  className="delete"
                  id={i}
                  onClick={handleDelete}
                ></button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
