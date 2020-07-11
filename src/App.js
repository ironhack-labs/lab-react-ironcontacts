import React, {useState} from 'react';
import contacts from './contacts.json';
import './App.css';
import ContactList from './components/ContactList';

function App() {

  //const contactList = contacts;

  const [contactList, setContacts] = useState(contacts)

  const addRandomItem = () => {
    const contactListToUpdate = [...contactList]

    const randomItem =
      contactList[Math.floor(Math.random() * contactList.length)];

    contactListToUpdate.push(randomItem);

    setContacts(contactListToUpdate)
  }

  // const sortBy = (field) => {
  //   const contactListToSort = [...contactList].sort(
  //     (elem, elem2) => elem[field].localeCompare(elem2[field])
  //   );

  //   setContacts(contactListToSort)
  // }

  const sortByName = () => {

    const list = [...contactList]

    const contactListToSort = list.sort(
      (elem, elem2) => elem.name.localeCompare(elem2.name)
    );
    setContacts(contactListToSort)
  }

  const sortByPopularity = () => {

    const list = [...contactList]

    const contactListToSort = list.sort(
      (elem, elem2) => elem.popularity - elem2.popularity
    );
    setContacts(contactListToSort)
    
  }
  const onDelete = (id) => {
    const copy = [...contactList];

    const index = copy.findIndex(elem => elem.id === id);

    copy.splice(index, 1)

    setContacts(copy);
  }

  return (
    <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={addRandomItem}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
        <ContactList list={[...contactList]} onDelete={onDelete}/>
    </div>
  );
}

export default App;
