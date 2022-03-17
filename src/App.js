import "./App.css";
import { useState } from "react";
const contactSample = require("./contacts.json");

function App() {
  const contactSlice = contactSample.slice(0, 5);

  const [contacts, setContacts] = useState(contactSlice);

  const handleAddRandom = () => {
    const rando =
      contactSample[Math.floor(Math.random() * contactSample.length) + 5];
    const updatedList = [...contacts, rando];
    setContacts(updatedList);
  };

  const sortedPopularity = () =>  {
    const sortListByPopularity = [...contacts];
    const sorted = sortListByPopularity.sort((a, b) => {
     if (a.popularity < b.popularity) {
       return 1
     } else if (a.popularity > b.popularity) {
       return -1
     }else {
       return 0
     }
   });
    console.log("sorted :>> ", sorted);
    setContacts(sorted);
  };

  const sortedName = () => {
    const sortedListByName = [...contacts];
    const sortedNameList = sortedListByName.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      } else if (a.name < b.name) {
        return -1
      }else {
        return 0
      }
    });
    setContacts(sortedNameList);
  }

  const deleteContactHandler = (id) => {
    const newContactList = contacts.filter((contactSample) => contactSample.id !== id);
    setContacts(newContactList)
}

  return (
    <>
      <div className="App">
        <>
          <h1>IronContacts</h1>
          <div className="buttons">
            <button onClick={handleAddRandom}>Add Random Contact</button>
            <button onClick={sortedPopularity} className="centerButton">Sort by Popularity</button>
            <button onClick={sortedName}>Sort by Name</button>
          </div>
        </>
        <table class="table table-striped" className="center">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>
                      <img
                        src={contact.pictureUrl} alt="contactPic"
                        id="celebPic"
                      />
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity.toFixed(2)}</td>
                    <td>{contact.wonOscar ? "🏆" : ""}</td>
                    <td>{contact.wonEmmy ? "🌟" : ""}</td>
                    <td><button onClick={() => deleteContactHandler(contact.id)}>Remove</button></td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
