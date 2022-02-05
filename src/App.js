import './App.css';
import contacts from "./contacts.json";
import { useState } from 'react';

function App() {
  const List = contacts.slice(0,5)
  const [ listContacts, setContact ] = useState(List);

  const addRandom = () => { contacts[Math.floor(Math.random() * contacts.length)];

  }



  return (
    <div className="App">
        <button className="random-contact" onClick={ addRandom }>Add Random Contact</button>


        
          <div className="contacts-table">
      <table>
       <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </thead>
        <tbody>
        {List.map(contact => {
          return(
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} width={50} alt="" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
            </tr>
            )  
        })
      }
      </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
