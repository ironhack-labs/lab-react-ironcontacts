import "./App.css";
import contacts from './contacts.json';

import {useState, useEffect} from 'react';

function App() {

  const [allContacts, setAllContacts] = useState(contacts);
  const [displayedContacts, setDisplayedContacts] = useState(contacts.slice(0,5));
  const [sortToggle, setSortToggle] = useState(true);

  const addContact = () => {

    const randomNum = Math.floor(Math.random() * (allContacts.length + 1 - 5) + 5)
    const newPerson = allContacts[randomNum];

    const updatedAllContacts = [...allContacts];

    updatedAllContacts.splice(randomNum, 1);

    setAllContacts(updatedAllContacts);

    setDisplayedContacts([...displayedContacts, newPerson]);

    setSortToggle(sortToggle);
    

  }

  const deleteContact = (id) => {
    setDisplayedContacts(displayedContacts.filter(person => person.id !== id));
  }

  const changeSort = () => {

    setSortToggle(!sortToggle);

  }

  useEffect(() => {

    const sortedContacts = [...displayedContacts];
    
    if (sortToggle) {
      sortedContacts.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sortedContacts.sort((a, b) => b.popularity - a.popularity);
    }
    
    setDisplayedContacts(sortedContacts);

  }, [sortToggle]);

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addContact}>Add Contact</button>
      <button onClick={changeSort}>Sorted by {sortToggle ? `Alphabet`: `Popularity`}</button>

      {
        displayedContacts.map(person => {

          return(

            <div className="card" key-={person.id}>
              <img src={person.pictureUrl} />
              <h3>Name: {person.name}</h3>
              <p><b>Popularity:</b> {person.popularity}</p>
              <p>{person.wonEmmy ? `🏆`: ``}</p>
              <p>{person.wonOscar ? `🌟`: ``}</p>
              <button onClick={() => {deleteContact(person.id)}}>Delete</button>
            </div>
          )
        })
      }



    </div>
  );
}

export default App;
