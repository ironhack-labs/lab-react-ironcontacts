import React from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  let filteredList = contactsData.slice(0, 1);

  const [list, setContacts] = React.useState(filteredList);

  const addContact = () => {
    let idx = Math.floor(Math.random() * contactsData.length)
    list.push(contactsData[idx])
    setContacts([...list]);


    
  };
  const iteratedList = list.map((contact) => {
    return (
      <tr>
        <td>
          <img src={contact.pictureUrl} alt={contact.name} />
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity.toFixed(2)}</td>
      </tr>
    );
  });


  return (
    <div className="App">
      <button onClick={addContact}>Add Random Contact</button>
      <h1>IronContacts</h1>
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
