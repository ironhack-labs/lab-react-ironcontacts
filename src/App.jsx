import "./App.css";
import Row from "./components/Row";
import contacts from "./contacts.json";
import { useState } from "react";


function App() {

  const [newContacts, setNewContacts] = useState(contacts.slice(0, 5));
  const [isSorted, setIsSorted] = useState()
  const addRandom = () => {
    const randomNumber = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomNumber];
    //console.log(randomContact);
    if (!newContacts.includes(randomContact)) {
      setNewContacts([...newContacts, randomContact])
    } else {
      addRandom();
    }
  }

  const sortByName = () => {
    if (isSorted === false) {
      const sortedContacts = [...newContacts].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setNewContacts(sortedContacts);
      setIsSorted(true);
    
  } else {
    const sortedContacts = [...newContacts].reverse();
    setNewContacts(sortedContacts);
    }
  };
    

  const sortByPopularity = () => {
    const sortedContacts = [...newContacts].sort((a, b) => {b.popularity
  });
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        </thead>
        <tbody>
        {newContacts.map((contact) => {
          return (
            <Row key={contact.id} contact={contact} />
          )
        })}
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
       </tbody>
        
      </table>
      <button onClick={() => addRandom()}>Add random contact</button>
      <button onClick={() => sortByName()}>Sort by name</button>
      <button onClick={() => sortByPopularity()}>Sort by Popularity</button>
    </div>
  );
}

export default App;
