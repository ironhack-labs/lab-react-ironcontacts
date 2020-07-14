import React from 'react'
import './App.css'
import ContactsList from './components/Contacts/ContactsList'


function App() {
  return (
    <>
      <h1>IronContacts</h1>
      {/* ¿Cómo se llamaría al botón desde aquí?, ¿pasando props como parámetros? */}
      {/* <button onClick={addRandom}>Add random contact</button> */}
      <ContactsList />
    </>
  )
}

export default App
