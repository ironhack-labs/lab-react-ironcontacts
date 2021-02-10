import React, { useState } from 'react';

const Table = ({ data }) => {
  let showContacts = [];
  for (let i = 0; i < 5; i++) {
    showContacts[i] = data[i];
  }

  const [actors, setActors] = useState(showContacts);

  const handleRandom = () => {
    setActors([...actors, addRandom()]);
  };

  const handleSortName = () => {
    sortActorsName();
    setActors([...actors]);
  };
  const handleSortPopularity = () => {
    sortActorsPopularity();
    setActors([...actors]);
  };

  const sortActorsName = () => {
    actors.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  };

  const sortActorsPopularity = () => {
    actors.sort((a, b) =>
      a.popularity < b.popularity ? 1 : b.popularity < a.popularity ? -1 : 0
    );
  };

  const addRandom = () => {
    const randomNum = Math.floor(Math.random() * (data.length - 0)) + 0;
    const newActor = data[randomNum];
    return newActor;
  };

  const deleteActor = (id) => {
    actors.forEach((actor, index, arr) => {
      if (id === actor.id) {
        arr.splice(index, 1);
      }
    });
  };

  const handleDelete = (actor) => {
    deleteActor(actor);
    setActors([...actors]);
  };

  return (
    <main>
      <h1>IronContacts</h1>
      <button onClick={handleRandom}>Add Random Contact</button>
      <button onClick={handleSortName}>Sort by name</button>
      <button onClick={handleSortPopularity}>Sort by popularity</button>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {actors.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{parseFloat(contact.popularity).toFixed(2)}</td>
              <td>
                <button onClick={() => handleDelete(contact.id)}>
                  {' '}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Table;
