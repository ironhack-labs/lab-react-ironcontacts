import contacts from './contacts.json';
import './App.css';
import { useState } from 'react';

function App() {
  const initialContactsArr = contacts.slice(0, 4);
  const [contactsArr, SetContactsArr] = useState(initialContactsArr);



  return (
    <div className="App">
      <table>

        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>

        <tbody>
          {contactsArr.map((contact) => {
            return (
              <tr>
                <td><img src={contact.pictureUrl} alt={contact.name} className="contact-picture" /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            );
          })}
        </tbody>

      </table>
    </div>
  );
}

export default App;
