import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import { nanoid } from "nanoid";

function App() {
  const contactsArray =  contacts.slice(0,5);

  const [contactCelebrities, setContactCelebrities] = useState(contactsArray);

  const sortByName = () => {
    console.log(contactCelebrities)
    const contactCelebritiesCopy = [...new Set(contactCelebrities)];
    console.log(contactCelebritiesCopy)
    contactCelebritiesCopy.sort((a,b) => a.name.localeCompare(b.name));
    setContactCelebrities(contactCelebritiesCopy);
  }

  const addContact = () => {
    const newContactIndex = Math.floor(Math.random() * contacts.length);
    const newContact = contacts[newContactIndex];
    const contactCelebritiesCopy = [...new Set(contactCelebrities), newContact];
    setContactCelebrities(contactCelebritiesCopy);
    console.log(contactCelebrities)
  }

  const sortByPopularity = () => {
    const contactCelebritiesCopy = [...new Set(contactCelebrities)];
    contactCelebritiesCopy.sort((a,b) => b.popularity - a.popularity);
    setContactCelebrities(contactCelebritiesCopy);
  }

  const deleteHandler = (event, idToDelete) => {
    console.log(idToDelete);
    setContactCelebrities(contactCelebrities.filter(({ id }) => id !== idToDelete));
  };

  return (
    <div className="App">
    <h1 className='text-primary fw-bold text-uppercase'>IronContacts</h1>
    <button className='btn btn-light border-dark mx-1 fs-5' onClick={addContact}>Add Random Contact</button>
    <button className='btn btn-light border-dark mx-1 fs-5' onClick={sortByPopularity}>Sort by Popularity</button>
    <button className='btn btn-light border-dark mx-1 fs-5' onClick={sortByName}>Sort by Name</button>
    <div className='d-flex justify-content-center'>
      <table style={{width:"600px"}}>
      <thead>
          <tr>
            <td className='fs-5 fw-bold'>Picture</td>
            <td className='fs-5 fw-bold'>Name</td>
            <td className='fs-5 fw-bold'>Popularity</td>
            <td className='fs-5 fw-bold'>Won Oscar</td>
            <td className='fs-5 fw-bold'>Won Emmy</td>
            <td className='fs-5 fw-bold'>Actions</td>
          </tr>
        </thead>
        <tbody>

        {contactCelebrities.map((contact) => {
         return (
          <tr className='border border-dark' key={contact.id}>
          <td><img src={contact.pictureUrl} style={{width: "80px"}} /></td>
          <td className='fw-bold fs-5'>{contact.name}</td>
          <td className='fs-5'>{contact.popularity}</td>
          {contact.wonOscar ? <td className='fs-2'>🏆</td> : <td></td>}
          {contact.wonEmmy ? <td className='fs-2'>🏆</td> : <td></td>}
          <td>
          <button className='btn btn-danger' onClick={(event) => {
         deleteHandler(event, contact.id);
          }}>Delete</button>
       </td>
          </tr>
         )
        })}
          </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
