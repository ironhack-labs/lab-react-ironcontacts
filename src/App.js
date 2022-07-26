import './App.css';
import contacts from './contacts.json'
import { useState } from "react";

function App() {

  const [currentContacts, setCurrentContacts] = useState(contacts.slice(0, 5));
  const [restContacts, setRestContacts] = useState(contacts.slice(5, contacts.length - 1));

  const addRandomContact = () => {
    if (restContacts.length > 0) {
      const randomContact = Math.floor(Math.random() * restContacts.length);
      setCurrentContacts((prevContacts) => {
        return [...prevContacts, restContacts[randomContact]];
      });

      setRestContacts((newRestContacts) => {
        newRestContacts.splice(randomContact, 1);
        return newRestContacts;
      });
    };
  };

  const sortByPop = () => {
    setCurrentContacts((prevContacts) => {
      const prevContactsCopy = [...prevContacts];
      prevContactsCopy.sort((a, b) => b.popularity - a.popularity);
      return prevContactsCopy;
    });
  };

  const sortByAlp = () => {
    setCurrentContacts((prevContacts) => {
      const prevContactsCopy = [...prevContacts];
      prevContactsCopy.sort((a, b) => a.name.localeCompare(b.name));
      return prevContactsCopy;
    });
  };

  const deleteContact = (contactId) => {
    setCurrentContacts((prevContacts) => {
      const newList = prevContacts.filter((element) => {
        return element.id === contactId ? false : true;
      });
     return newList;
    });
  };


  return (
    <div className="App">

      <header>
        <h1>IronContacts</h1>
      </header>

      <button onClick={() => { addRandomContact() }}>Add Random Contact</button>
      <button onClick={sortByPop}>Sort by popularity</button>
      <button onClick={sortByAlp}>Sort by name</button>

      <table>
        <thead>
          <tr>
            <th><h2>Picture</h2></th>
            <th><h2>Name</h2></th>
            <th><h2>Popularity</h2></th>
            <th><h2>Won Oscar</h2></th>
            <th><h2>Won Emmy</h2></th>
            <th><h2>Action</h2></th>
          </tr>
        </thead>

        <tbody>
          {currentContacts.map(contact => {
            return (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                <td><h4>{contact.name}</h4></td>
                <td><h4>{contact.popularity}</h4></td>
                {contact.wonOscar
                  ? <td>🏆</td>
                  : <td></td>
                }
                {contact.wonEmmy
                  ? <td>🏆</td>
                  : <td></td>
                }
                <td><button onClick={() => { deleteContact(contact.id) }}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>

      </table>

    </div>
  );
}

export default App;
