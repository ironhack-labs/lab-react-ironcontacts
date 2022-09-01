import './Table.css'
import contactData from '../../contacts.json'
import Contact from '../Contact/Contact'
import { useState } from 'react'

function Table() {

let fiveFirstContactData = contactData.slice(0,6)

const [contact, setContact] = useState(fiveFirstContactData)

const handleClick = () => {
  const randomContact = contactData[Math.floor(Math.random() * contactData.length)]
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

const deleteContact = (artist) => {
  const newList = contact.filter((x) => x.name !== artist);
  setContact(newList);
};


  return(
    <div className='row text-center justify-content-center'>
      <div className="d-grid gap-2 mb-3 d-md-block">
        <button onClick={handleClick} className='btn btn-primary mx-1'>Add Random Contact</button>
        <button onClick={handleClickPopularity} className='btn btn-secondary mx-1'>Sort By Popularity</button>
        <button onClick={handleClickName} className='btn btn-secondary mx-1'>Sort By Name</button>
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
        <div className='col'>
          <h3>Actions</h3>
        </div>       
      </div>
      
        <ul className='row '>
          {contact.map((artist) => (
            <Contact deleteContact={deleteContact} key={artist.id} name={artist.name} pictureUrl={artist.pictureUrl} popularity={artist.popularity} wonOscar={artist.wonOscar} wonEmmy={artist.wonEmmy} />
          ))}
        </ul>

    </div>


  )
}

export default Table