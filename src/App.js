import React from 'react'
import './App.css'
import ContactsList from './components/Contacts/ContactsList'


function App() {
  return (
    <>
      <h1>IronContacts</h1>
      {/* ¿Cómo se llamaría al botón desde aquí? */}
      {/* <button onClick={addRandom}>Add random contact</button> */}

      <table className="contact-row">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          <ContactsList />
        </tbody>
      </table>
    </>
  )
}

export default App
