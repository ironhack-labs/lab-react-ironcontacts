import { useState } from "react";
import "./App.css";

import contacts from "./contacts.json";


function getFirstFiveArrayItems(arr = []) {
  return arr.slice(0, 5);
}


function getRandomItemFromArrayWithStartingIndex(arr = [], startingIndex) {
  const randomIdx = startingIndex + Math.floor(arr.length * Math.random());
  return arr[randomIdx];
}

function sortArrayASCByName(arr=[]) {
  const list = [...arr];
  return list.sort((AObj, BObj) => {
    if (AObj.name > BObj.name) {
      return 1;
    } else if (AObj.name < BObj.name) {
      return -1;
    } else {
      return 0;
    }
  })
}

function sortArrayDESCByPopularity(arr=[]) {
  const list = [...arr];
  return list.sort((BObj, AObj) => {
    if (AObj.popularity > BObj.popularity) {
      return 1;
    } else if (AObj.popularity < BObj.popularity) {
      return -1;
    } else {
      return 0;
    }
  })
}

function App() {
  const fiveContactsForInitialContactStateArray = getFirstFiveArrayItems(contacts);


  const [contactStateArray, setContactStateArray] = useState(fiveContactsForInitialContactStateArray);  


  const addRandomContact = () => {
    const randomContact = getRandomItemFromArrayWithStartingIndex(contacts, 5);
    const newContactStateArray = [...contactStateArray, randomContact];
    setContactStateArray(newContactStateArray)
  }

  const deleteContact = contactId => {
    const filteredContacts = contactStateArray.filter(contact => {
      return contact.id !== contactId;
    });
 
    setContactStateArray(filteredContacts);
  };


  return (
    <div className="App">
        <h1>IronContacts</h1>
        <div>
          <button onClick={addRandomContact}>
            Add Random Contact
          </button>
          <button onClick={() => {
            const sortedContacts = sortArrayDESCByPopularity(contactStateArray)
            setContactStateArray(sortedContacts)
          }}>
            Sort By Popularity
          </button>
          <button onClick={() => {
            const sortedContacts = sortArrayASCByName(contactStateArray)
            setContactStateArray(sortedContacts)
          }}>
            Sort By Name
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                Picture
              </th>
              <th>
                Name
              </th>
              <th>
                Popilarity
              </th>
              <th>
                Won an Oscar
              </th>
              <th>
                Won an Emmy 
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {
              contactStateArray.map((contactObj) => {
                return (
                  <tr key={contactObj.id}>
                    <td><img src={contactObj.pictureUrl} alt={contactObj.name} height={90} width={64}/></td>
                    <td>{contactObj.name}</td>
                    <td>{contactObj.popularity}</td>
                    <td>{contactObj.wonOscar && "🏆"}</td>
                    <td>{contactObj.wonEmmy && "🌟"}</td>
                    <td><button onClick={() => deleteContact(contactObj.id)}>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  );
}

export default App;
