import { useState } from "react";
import "./App.css";
import contactsArr from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsArr.slice(0, 5));
  const [sortBy, setSortBy] = useState(null);

  function addRandomContact(){
    let filterArr = contactsArr.filter(contactArr =>{
      let idx = contacts.findIndex(contact => (contact.id === contactArr.id));
      return (idx < 0);
    })

    let randomIdx = Math.floor(Math.random() * filterArr.length + 1);
    if (!filterArr[randomIdx]){
      console.log('randomeidx', randomIdx, ' contacts.le', contacts.length, 'contactArrLe', contactsArr.length)
    }
    const newContacts = [...contacts, filterArr[randomIdx]];
    setContacts(newContacts);

    // Apply the existing sorting based on the current `sortBy` state
    if (sortBy === 'POP') {
      newContacts.sort((a, b) => b.popularity - a.popularity);
      setContacts([...newContacts]);
    } else if (sortBy === 'NAME') {
      newContacts.sort((a, b) => a.name.localeCompare(b.name));
      setContacts([...newContacts]);
    }
  }
  
  function deleteContact(id){
    let filteredArr = contacts.filter(contact =>{
      return (contact.id !== id);
    })
    setContacts(filteredArr);
  }

  function sortByPopularity(){
    contacts.sort((a, b) => {return (b.popularity - a.popularity)});
    setSortBy('POP');
    setContacts([...contacts]);
  }

  function sortByName(){
    contacts.sort((a, b) => {return (a.name.localeCompare(b.name))});
    setSortBy('NAME');
    setContacts([...contacts]);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className="buttons">
        <button className="button" onClick={addRandomContact}>Add Randome Contact</button>
        <button className="button" onClick={sortByPopularity}>Sort by popularity</button>
        <button className="button" onClick={sortByName}>Sort by name</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact =>{
            return(
              <tr key={contact.id}>
                <td className="pic-area">
                  <img src={contact.pictureUrl} alt="Pictures" className="pic"/>
                </td>
                <td>
                  {contact.name}
                </td>
                <td>
                  {contact.popularity}
                </td>
                <td>
                  {contact.wonOscar ? '🏆' : null}
                </td>
                <td>
                  {contact.wonEmmy ? '🌟' : null}
                </td>
                <td>
                  <button className="button" onClick={()=>{deleteContact(contact.id)}}>Delete</button>
                </td>
              </tr>
            )})
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
