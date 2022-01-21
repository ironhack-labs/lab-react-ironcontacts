import React from "react";
import contactsData from "./contacts.json";
import './App.css'

function App() {
  let filteredList = contactsData.slice(0, 1);

  const [list, setContacts] = React.useState(filteredList);

  const addContact = () => {
    let idx = Math.floor(Math.random() * contactsData.length)
    list.push(contactsData[idx])
    setContacts([...list]);
  };

  const sortName = () => {
    list.sort((a, b) => a.name.localeCompare(b.name));
    setContacts([...list])
  }

const sortPopularity = () => {
  list.sort((a, b) => a.popularity - b.popularity)
  setContacts([...list])
}

const deleteContact = (event) => {

  let id = event.target.id
 
  let removedContact = list.filter(contact => contact.id !== id)
  setContacts([...removedContact])
 
}

  const iteratedList = list.map((contact) => {
    return (
      <tr>
        <td>
          <img src={contact.pictureUrl} alt={contact.name} />
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity.toFixed(2)}</td>
        <td><button className='btn-danger' id={contact.id} onClick={deleteContact}>Delete</button></td>
      </tr>
    );
  });


  return (
    <div className="App">
     
      <h1>IronContacts</h1>
      <button className='btn-primary' onClick={addContact}>ADD (random)</button>
      <button className='btn-primary' onClick={sortName}>SORT (name)</button>
      <button className='btn-primary' onClick={sortPopularity}>SORT (popularity)</button>
      <table>
        <tbody>
          <tr className="table-head">
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
          </tr>
          {iteratedList}
        </tbody>
      </table>
    </div>
  );
}

export default App;
