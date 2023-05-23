import './App.css'
import contacts from '../contacts.json'
import { useState } from 'react';

function App() {

  const copyContacts = [...contacts];
  const contactsData = copyContacts.slice(0, 5);

  const [contactsArray, setContactsArray] = useState(contactsData)

  const addContact = () => {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)];
    const copyContacts = [...contactsArray];
    copyContacts.unshift(newContact)
    setContactsArray(copyContacts)
  }

  const sortByNAme = () => {
    const copyContacts = [...contactsArray];
    const sortedArray = copyContacts.sort((a, b) => a.name.localeCompare(b.name));
    setContactsArray(sortedArray)

  }
  const sortByPopularity = () => {
    const copyContacts = [...contactsArray];
    const sortedArray = copyContacts.sort((a, b) => b.popularity - a.popularity);
    setContactsArray(sortedArray)

  }



  return (

    <section>
      <h1>Listado</h1>

      <button onClick={addContact}>New contact</button>
      <button onClick={sortByNAme}>Sort contacts by Name</button>
      <button onClick={sortByPopularity}>Sort contacts by Popularity</button>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>


        </thead>
        <tbody>
          {
            contactsArray.map(elm => {
              return (
                <tr key={elm.id}>
                  <td><img src={elm.pictureUrl} alt='' style={{ width: '100px' }} /></td>

                  <td>{elm.name}</td>

                  <td>{Math.floor(elm.popularity)}</td>
                  <td>
                    {elm.wonOscar ? "🏆" : " "}
                  </td>
                  <td>
                    {elm.wonEmmy ? "🏆" : " "}
                  </td>
                </tr>
              )

            })


          }
        </tbody>

      </table>



    </section>
  );
}

export default App;
