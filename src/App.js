import './App.css';
import { useState } from 'react';
import  contacts from   './contacts.json'
function App() {

  const conFive = contacts.slice(0,5)

  const [contactInfo, setContactInfo] = useState(conFive)

  const addContact = () => {
    const random = contacts[Math.floor(Math.random()* contacts.length)]
    const newList = [...contactInfo]
    newList.push(random)
    setContactInfo(newList)
  }

  return (
    <div className="App">
      <div>
      <table>
    <thead>
        <tr>
            <th colspan="2">Contacts</th>
        </tr>
    </thead>
    
        <tr>
            <td>Name</td>
            <td>Picture</td>
            <td>Popularity</td>
            <td>Won an oscar</td>
            <td>Won an Emmy</td>
        </tr>
    <tbody>
    {
              contactInfo.map((contact, contact_index) => (
                <tr key={contact_index}>
                  <td><img src={contact.pictureUrl} height="180" width="120"/></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                  {contact.wonOscar && <p>🏆</p>}
                  {!contact.wonOscar && <p>No</p>}
                  </td>
                  <td>
                  {contact.wonEmmy && <p>🏆</p>}
                  {!contact.wonEmmy && <p>No</p>}
                  </td>
                  <td>
              
                  </td>
                </tr>
              ))
            }
    </tbody>
</table>
      </div>
      <button onClick={addContact}>ADD</button>
    </div>
  );
}

export default App;

