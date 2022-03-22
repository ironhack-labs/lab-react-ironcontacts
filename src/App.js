import React, { useState } from 'react'
import ironContacts from './data/contacts.json'
import Header from './components/Header/Header'
import SortList from './components/SortList/SortList';


function App() {
 
  //Add javascript logic:
  const listContactSlice = ironContacts.slice(0, 5);
  //const [state, setState] = useState(initialState);
  const [contacts, setContacts] = useState(listContactSlice);

  //Add random actor from 'contacts.json'
  const addRandom = () => {
    //Generate the random object
    let random = ironContacts[Math.floor(Math.random() * ironContacts.length)];
    //Add the random object to the new state array
    const updatedList = [...contacts, random];
    setContacts(updatedList);
  }
  
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <h1 className='text-center my-4'>IronContact</h1>
        <div className='d-flex justify-content-around mb-4'>

          <button className='btn btn-light border-dark' onClick={addRandom}>Add Random Contact </button>
          <SortList/>

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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default App

