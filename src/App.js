import React, {useState} from 'react';
import './App.css';
import contacts from "./contacts.json";
import Table from './Components/Table';


export default function App() {
  const [contactsList, setContactsList] = useState(contacts.slice(0,5));
  const [people, setPeople] = useState(contacts.slice(5));

  //Random contact
  const randomOne = people[Math.floor(Math.random() * people.length)];

  //Add random
  const addRandom = () => setContactsList([...contactsList, randomOne]);
  
  //Sort by name
  const byName = () => setContactsList([...contactsList].sort((a,b) => 
                        (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0)));

  //Sort by popularity
  const byPop = () => setContactsList([...contactsList].sort((a,b) => 
                        (a.popularity < b.popularity) ? 1 : ((a.popularity > b.popularity) ? -1 : 0)));

  //Delete 
  const deleteOne = (x) => setContactsList([...contactsList].filter(contact => contact.id !== x));
  
    return (
      <div className='app'>
        <h1>IronContacts</h1>
          <div className='buttons'>
            <button onClick={addRandom}>Add Random Contact</button>
            &emsp;
            <button onClick={byName}>Sort By Name</button>
            &emsp;
            <button onClick={byPop}>Sort By Popularity</button>
          </div>
        <Table 
          celebs={contactsList}
          deleteContact={deleteOne}        
        />
      </div>
    );
};