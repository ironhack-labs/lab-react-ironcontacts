import { useState } from 'react';
import './App.css';
import contacts from './contacts.json'





function App() {

  const [dataContacts, setDataContacts] = useState(contacts)
  const fiveContacts = dataContacts.slice(0, 4)

  const addRandom = () => {

    const arrContacts = [...dataContacts]

    let randomContact = arrContacts[Math.floor(Math.random() * arrContacts.length)]

    arrContacts.unshift(randomContact)

    setDataContacts(arrContacts)

  }




  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button className='AddContactButton' onClick={addRandom}>Add Contact</button>

      <div className='table'>
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
            {fiveContacts.map(elm => {
              return (< tr key={elm.id}>
                <td><img src={elm.pictureUrl} alt="Contact Image" /></td>
                <td>{elm.name}</td>
                <td>{elm.popularity.toFixed(2)}</td>
                <td>{elm.wonOscar ? '🏆' : ' '}</td>
                <td>{elm.wonEmmy ? '🏆' : ' '}</td>
              </tr>)

            })}
          </tbody>



        </table>
      </div>

    </div >);
}

export default App;

// function App() {

//   const [dataContacts, setDataContacts] = useState(contacts)
//   const fiveContacts = dataContacts.slice(0, 4)

//   const addRandom = () => {

//     const arrContacts = [...dataContacts]

//     let randomContact = arrContacts[Math.floor(Math.random() * arrContacts.length)]

//     arrContacts.unshift(randomContact)

//     setDataContacts(arrContacts)

//   }