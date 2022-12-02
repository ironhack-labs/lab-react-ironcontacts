import './App.css';
import contacts from "./contacts.json";
import { useState } from 'react';

function App() {
  const contactsTop = contacts.slice(0, 5);
  const [contactList, setContactList] = useState(contactsTop);

  const addRandom = () => {
    const pending = contacts.filter(contact =>{
      return !contactList.includes(contact);
    });

    if (pending.length > 0) {
      const rand = Math.floor(Math.random()*pending.length);
      const newList = [...contactList, pending[rand]];
      setContactList(newList);
    }
  }

  const sortList = (param) => {
    const sortList = [...contactList];

    if (param === "name") {
      sortList.sort((a, b) => {
        let surnameA = a[param].split(" ")[1];
        let surnameB = b[param].split(" ")[1];
        return surnameA > surnameB;
      });
    }

    if (param === "popularity") {
      sortList.sort((a, b) => {
        return b[param] - a[param];
      });
    }

    setContactList(sortList);
  }

  const deleteContact = (id) => {
    const remaining = contactList.filter(contact => {
      return contact.id !== id;
    });

    setContactList(remaining);
  }

  return (
    <div className="App">
    <h1>IronContacts</h1>

    {contactList.length < contacts.length ?
      <button onClick={addRandom}>Add Random Contact</button> :
      <p>No More Contacts to Add!</p>
    }

    <div>
      <h3>Sort Contacts</h3>
      <button onClick={() => sortList("name")}>By Name</button>
      <button onClick={() => sortList("popularity")}>By Popularity</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar?</th>
          <th>Won Emmy?</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contactList.map(({ name, pictureUrl, popularity, id, wonOscar, wonEmmy }) => {
          return (
            <tr key={id}>
              <td><img src={pictureUrl} alt={name}/></td>
              <td>{name}</td>
              <td>{popularity.toFixed(2)}</td>
              {wonOscar ? <td className='prize'>🏆</td> : <td></td>}
              {wonEmmy ? <td className='prize'>🏆</td> : <td></td>}
              <td><button onClick={()=>deleteContact(id)}>Delete</button></td>
            </tr>
          );
        })}
      </tbody>

    </table>
    </div>
  );
}

export default App;
