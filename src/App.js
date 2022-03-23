import React, { useState } from 'react'
import ContactsJson from './data/contacts.json'
import Header from './components/Header/Header'



function App() {

  //[Add javascript logic:]
  const listContactSlice = ContactsJson.slice(0, 5);
  //const [state, setState] = useState(initialState);
  const [contacts, setContacts] = useState(listContactSlice);

  //Add random actor from 'contacts.json'
  const addRandom = () => {
    //Generate the random object
    let random = ContactsJson[Math.floor(Math.random() * ContactsJson.length)];
    //Add the random object to the new state array
    const updatedList = [...contacts, random];
    setContacts(updatedList);
  }
  //Sort by Name:
  const sortByName = () => {
    const sortedArr = contacts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })
    setContacts([...sortedArr])
  }
  //Sort By Popularity:
  const sortByPopularity = () => {
    const sortedArr = contacts.sort((a, b) => {
      if (a.popularity < b.popularity) return 1;
      if (a.popularity > b.popularity) return -1;
      return 0;
    })
    setContacts([...sortedArr])
  }
  //Delete a Contact
  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
    
  }


  return (
    <div className="App">
      <Header />
      <div className='container'>
        <h1 className='text-center my-4'>IronContact</h1>
        <div className='d-flex justify-content-around mb-4'>

          <button className='btn btn-light border-dark' onClick={addRandom}>Add Random Contact </button>
          <button name='name' className='btn btn-light border-dark' onClick={sortByName}>Sort by Name </button>
          <button name='popularity' className='btn btn-light border-dark' onClick={sortByPopularity}>Sort by Popularity </button>

        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
              <th scope="col">Won Oscar</th>
              <th scope="col">Won Emmy</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(({ name, pictureUrl, popularity, id, wonOscar, wonEmmy }, index) => (
              <tr key={id}>
                <th scope="row"></th>
                <td><img src={pictureUrl} style={{ height: '110px', width: '100px' }} className='rounded'></img></td>
                <td>{name}</td>
                <td>{popularity.toFixed(2)}</td>
                <td>{wonOscar && '🏆'}</td>
                <td>{wonEmmy && '🏆'}</td>
                <td><button className="btn btn-outline-danger" onClick={()=> deleteContact(id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default App;

