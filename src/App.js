import './App.css';
import contactsDataJSON from './contacts.json';
import { useState } from 'react';
import IronContacts from './components/IronContacts';

function App() {
  const firstFive = contactsDataJSON.slice(0, 5);
  console.log(firstFive);
  const [contacts, setContacts] = useState(firstFive);
  return (
    <div className='App'>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        {contacts.map((contact) => (
          <IronContacts eachContact={contact} />
        ))}
      </table>
    </div>
  );
}

export default App;
