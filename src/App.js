import './App.css';
import contacts from './contacts.json'
import { useState } from 'react';

function App() {

  // const [contactos, setContacts] = useState(newContacts);



  const arrContacts = contacts.slice(0, 5)
  // console.log(arrContacts)
  // for (let i = 0; i < 5; i++) {
  //   arrContacts.push(contacts[i])
  // }
  const [initContacts, setContacts] = useState(arrContacts);

  const addContact = () => {
    const random = Math.floor(Math.random() * contacts.length)
    const newContacts = [...initContacts]
    newContacts.push(contacts[random])
    setContacts(newContacts)
  }

  function orderByName() {
    const orderName = [...initContacts].sort((a, b) => a.name < b.name ? -1 : 1)
    setContacts(orderName)
  }
  function orderByPopularity() {
    const orderPopu = [...initContacts].sort((a, b) => a.popularity < b.popularity ? 1 : -1)
    setContacts(orderPopu)
  }

  function deleteContacts(id) {
    const deleteContact = initContacts.filter((contact) => contact.id !== id);
    setContacts(deleteContact);
  }

  // console.log(newContacts)
  return (
    <div className="App">

      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={orderByName}>Sort by name</button>
      <button onClick={orderByPopularity}>Sort by Popularity</button>



      < table >
        <tbody>
          <tr>
            <th>Name</th>
            <th>Popularity</th>
            <th>Picture</th>

            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
          {
            initContacts.map((contact) => {
              return (
                <tr className="list" key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td><img src={contact.pictureUrl} alt="" /></td>
                  {
                    contact.wonOscar ? <td>🏆</td> : <td>💩</td>
                  }
                  {
                    contact.wonEmmy ? <td>🏆</td> : <td>💩</td>
                  }
                  <button onClick={() => { deleteContacts(contact.id) }}>Delete Contact</button>
                </tr>
              )
            })
          }



        </tbody>
      </table>

    </div >
  );
}

export default App;
