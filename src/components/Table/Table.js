import './Table.css'
import contacts from '../../contacts.json'
import Contact from '../Contact/Contact'
import { useState } from 'react'

function Table() {

let fiveFirstContacts = contacts.slice(0,6)

const [contact, setContact] = useState(fiveFirstContacts)

const handleClick = () => {
  const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
  setContact([randomContact, ...contact]);
  console.log(setContact)
}

const  handleClickPopularity = () => {
  contact.sort(function (a, b) {
    if (a.popularity > b.popularity) {
      return -1;
    }
    if (a.popularity < b.popularity) {
      return 1;
    }
    return 0;
  });

  setContact([...contact]);
}

const  handleClickName = () => {
  contact.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  setContact([...contact]);
}


  return(
    <div className='row text-center justify-content-center'>
      <div class="d-grid gap-2 d-md-block">
        <button onClick={handleClick} className='btn btn-primary'>Add Random Contact</button>
        <button onClick={handleClickPopularity} className='btn btn-primary'>Sort By Popularity</button>
        <button onClick={handleClickName} className='btn btn-primary'>Sort By Name</button>
      </div>


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
        <div className='col'>
          <h3>Won Oscar</h3>
        </div>
        <div className='col'>
          <h3>Won Emmy</h3>
        </div>       
      </div>
      
        <ul className='row '>
          {contact.map((contact, i) => (
            <Contact key={i} name={contact.name} pictureUrl={contact.pictureUrl} popularity={contact.popularity} wonOscar={contact.wonOscar} wonEmmy={contact.wonEmmy} />
          ))}
        </ul>

    </div>


  )
}

export default Table