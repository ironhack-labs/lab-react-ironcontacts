import "./App.css";
import contactsList from "./contacts.json"
import React, { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsList.slice(0,5))
  const [leftContacts, setLeftContacts] = useState(contactsList.slice(5, contactsList.length));

  

  return <div className="App">


    <h1>IronContacts</h1>

    {/* add random contact */}
    <button onClick={() => {
      if (leftContacts.length === 0) {
        console.log('No more contacts left to add');
        return;
      }

      const randomIndex = Math.floor(Math.random() * leftContacts.length);
      setContacts([leftContacts[randomIndex], ...contacts]);

      setLeftContacts(prevLeftContacts => {
        const newLeftContacts = [...prevLeftContacts];
        newLeftContacts.splice(randomIndex, 1);
        return newLeftContacts;
      });
    }}>Add random Contact</button>

    {/* sort by popularity */}
    <button onClick={()=>{
        const sortedCopy = contacts.slice().sort((a, b) => {
          return b.popularity - a.popularity; 
        });
        setContacts(sortedCopy)
      }
      }
    >Sort by popularity</button>

    {/* sort by Name */}
    <button onClick={()=>{
      const sortedCopy = contacts.slice().sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1
        } else if (nameA > nameB) {
          return 1
        } else {
          return 0
        }
      });
      setContacts(sortedCopy)

    }}>
      Sort by name
    </button>


    <main>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th> 
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=>{
            return(
              <tr>
                <td><img src={contact.pictureUrl} style={{width: "70px"}} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>
                  {contact.wonOscar && <p>🏆</p>}
                </td>
                <td>
                  {contact.wonEmmy && <p>🏆</p>}
                </td>
                <td>
                  <button onClick={(event)=>{
                    const contactId = event.currentTarget.querySelector("span").innerHTML
                    setContacts(contacts.filter(contact => contact.id !== contactId))
                  }}>
                    <span hidden>{contact.id}</span>
                    delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </main>

    
  </div>;
}

export default App;
