import contacts from '../contacts.json';
import React, { useState } from 'react';

function Table() {
  const initialArr = [];

  //Add single contact function
  function addContact(i) {
    return (
      <tr key={i}>
        <td>
          <img
            style={{ width: '100px' }}
            src={contacts[i].pictureUrl}
            alt="profile-image"
          />
        </td>
        <td>{contacts[i].name}</td>
        <td>{contacts[i].popularity.toFixed(2)}</td>
        <td>
          <button onClick={() => deleteContact(i)}>Delete</button>
        </td>
      </tr>
    );
  }
  //For loop for initial contacts
  for (let i = 0; i < 5; i++) {
    initialArr.push(addContact(i));
  }
  //UseState config
  let [cards, setCards] = useState(initialArr);
  //Add Random Contact without repeating those already added
  const addRandomContact = () => {
    const randomI = Math.floor(Math.random() * contacts.length);
    let repeated = 0;
    [...cards].forEach((card) => {
      if (card.key == randomI) {
        repeated++;
      }
    });
    let newContact = addContact(randomI);
    if (repeated === 0) {
      setCards([...cards, newContact]);
    }
  };
  //Sort by name
  const sortByName = () => {
    const sortedArr = [...cards].sort(function (a, b) {
      var nameA = a.props.children[1].props.children.toUpperCase();
      var nameB = b.props.children[1].props.children.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    });
    setCards(sortedArr);
  };
  //Sort by popularity
  const sortByPopularity = () => {
    const sortedArr = [...cards].sort(function (a, b) {
      return (
        b.props.children[2].props.children - a.props.children[2].props.children
      );
    });
    console.log(sortedArr);
    setCards(sortedArr);
  };
  //Delete contact
  const deleteContact = function (index) {
    let newArr = [...cards];
    newArr.filter((card) => card.key != index);
    // newArr.splice(index, 1);
    setCards(newArr);
  };

  return (
    <div>
      <center>
        <h1>Iron Contacts</h1>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>{cards}</tbody>
        </table>
      </center>
    </div>
  );
}

export default Table;
