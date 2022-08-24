import "./App.css";
import contatctsList from './contacts.json'
import { useState } from "react";

let firstFiveArr = contatctsList.slice(0, 5);

function App() {
  const [contacts, setContacts] = useState(() => firstFiveArr);
  const contactsCopy = [...contacts];


  const addRandomContact = () => {
    let randomIndex = Math.floor(Math.random() * contatctsList.length);


    if (!contactsCopy.includes(contatctsList[randomIndex]))
      contactsCopy.push(contatctsList[randomIndex]);

    setContacts(contactsCopy);
  };

  return (
    <div className="App">
      <div className="navbar">
      <h1>IronContacts</h1>
      <button onClick={() => addRandomContact()} className="button">Add Random Contact</button>
      </div>
      <div>
      <table className="contact-table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won a Oscar</th>
          <th>Won a Emmy</th>
        </tr>
        {contacts.map((contacts) => {
          return (
            <tr key={contacts.id}>
              <td>
                <img src={contacts.pictureUrl} alt="contact" />
              </td>
              <td>{contacts.name}</td>
              <td>{contacts.popularity.toFixed(2)}</td>
              <td>{contacts.wonOscar ? <>🏆</> : <> </>}</td>

              <td>{contacts.wonEmmy ? <>🌟</> : <> </>}</td>
            </tr>
          );
        })}
      </table>
      </div>
    </div>
  );
}

export default App;