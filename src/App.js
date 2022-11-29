import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';

function App() {
  let subArr = contacts.slice(0, 5);
  const [ironContacts, setIronContacts] = useState(subArr);

  // click functions
  function addRandomContact() {
    let randomCont = contacts[Math.floor(Math.random() * contacts.length)];

    let newArr = [...ironContacts, randomCont];
    let uniqueArr = [...new Set(newArr)];

    setIronContacts(uniqueArr);
  }

  function sortByName() {
    let nameArr = [...ironContacts];

    const compare = (a, b) => {
      const nameA = a.name;
      const nameB = b.name;

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    };

    let sortedNameArr = nameArr.sort(compare);
    setIronContacts(sortedNameArr);
  }

  function sortByRating() {
    let ratingArr = [...ironContacts];

    let sortedRatingArr = ratingArr.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    setIronContacts(sortedRatingArr);
  }

  function deleteItem(id) {
    let filteredArr = [...ironContacts].filter((contact) => {
      return contact.id !== id;
    });
    setIronContacts(filteredArr);
  }

  return (
    <div className='app'>
      <section>
        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr className='row'>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ironContacts.map((contact) => {
              return (
                <tr className='row' key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt='contact' />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  {contact.wonOscar ? (
                    <td>
                      <i className='fa-solid fa-trophy'></i>
                    </td>
                  ) : (
                    <td>
                      <i className='fa-solid fa-minus'></i>
                    </td>
                  )}
                  {contact.wonEmmy ? (
                    <td>
                      <i className='fa-solid fa-star'></i>
                    </td>
                  ) : (
                    <td>
                      <i className='fa-solid fa-minus'></i>
                    </td>
                  )}
                  <td>
                    <button onClick={() => deleteItem(contact.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className='btns'>
          <button onClick={sortByName} className='sort-by-name'>
            Sort by name
          </button>
          <button className='add-random-contact' onClick={addRandomContact}>
            Add a contact
          </button>
          <button onClick={sortByRating} className='sort-by-rating'>
            Sort by rating
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
