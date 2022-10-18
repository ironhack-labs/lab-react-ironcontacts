
import './App.css';
import contactsFromJSON from './contacts.json'
import { useState } from "react";

function App() {

  let firstFive = contactsFromJSON.slice(0, 5)
  const [contacts, setContacts] = useState(firstFive)
  const title = "IronContacts";

  

  return (
    <div  className="App">
        <h1>{title}</h1>
        <button>Add Random Contact</button>
        <button>Sort by popularity</button>
        <button>Sort by name</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
            </tr>
          </thead>
          <tbody>
          {contacts.map( contactElement => {
          
            return( <tr>
              <td><img className="picture" src={contactElement.pictureUrl}/></td>
              <td>{contactElement.name}</td>
              <td>{Math.round(contactElement.popularity * 100)/100}</td>
              <td>{contactElement.wonOscar ? '🏆' : null}</td>
              <td>{contactElement.wonEmmy ? '🏆' : null}</td>
            </tr>)   
              }
            )
          }
          </tbody>
        </table>                          
    </div>
  );
}

export default App;


                          
