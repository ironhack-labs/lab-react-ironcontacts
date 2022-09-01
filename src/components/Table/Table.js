import './Table.css'
import contacts from '../../contacts.json'
import Contact from '../Contact/Contact'
import { useState } from 'react'

function Table() {

let fiveFirstContacts = contacts.slice(0,5)

  return(
    <div className='row text-center'>
      <div className='row d-flex justify-content-center '>
        <div className='col'>
          <h3>Picture</h3>
        </div>
        <div className='col'>
          <h3>Name</h3>
        </div>
        <div className='col'>
          <h3>Popularity</h3>
        </div>
      </div>
      
        <ul className='row '>
          {fiveFirstContacts.map((contact, i) => (
            <Contact key={i} name={contact.name} pictureUrl={contact.pictureUrl} popularity={contact.popularity} />
          ))}
        </ul>

    </div>


  )
}

export default Table