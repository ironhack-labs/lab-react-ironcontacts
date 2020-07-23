import React, { useState } from 'react';
import contacts from '../contacts.json';

const initialState = contacts.slice(0, 5);
console.log(initialState);

function Contacts() {
  const [state, setState] = useState(initialState);

  function handleAddClick() {
    const randomNumber = Math.floor(Math.random() * (contacts.length - 5) + 5);

    if (state.includes(contacts[randomNumber])) {
      return handleAddClick();
    }

    state.push(contacts[randomNumber]);

    return setState([...state]);
  }

  function handleSortClick(key) {
    state.sort((a, b) => {
      if (key === 'name') {
        return a[key].localeCompare(b[key]);
      }

      return a[key] - b[key];
    });

    console.log(state);

    return setState([...state]);
  }

  // function handleDeleteClick(id) {
  //   return setState([...state.filter((contact) => contact.id !== id)]);
  // }

  function handleDeleteClick(event) {
    const id = event.currentTarget.attributes[0].value;
    return setState([...state.filter((contact) => contact.id !== id)]);
  }

  return (
    <div className="container-fluid pt-5">
      <div className="vh-100 d-flex justify-content-center">
        <div className="w-50">
          <div className="w-100 d-flex justify-content-between mb-4">
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={handleAddClick}
            >
              Add Random Contact
            </button>
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={() => handleSortClick('name')}
            >
              Sort by name
            </button>
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={() => handleSortClick('popularity')}
            >
              Sort by popularity
            </button>
          </div>

          <table className="table">
            <thead className=" thead-dark">
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {state.map((contact) => {
                return (
                  <tr key={contact.id}>
                    <td>
                      <img
                        className="contact-picture"
                        src={contact.pictureUrl}
                        alt="The actor"
                      />
                    </td>
                    <td className="align-middle">{contact.name}</td>
                    <td className="align-middle">
                      {contact.popularity.toFixed(2)}
                    </td>
                    <td className="align-middle">
                      <button
                        dataid={contact.id}
                        type="button"
                        onClick={handleDeleteClick}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Contacts;