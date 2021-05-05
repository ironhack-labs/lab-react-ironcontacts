import React, { useState } from 'react';
import Contacts from '../contacts.json';

const ContactsList = () => {

  const [contacts, setContact] = useState(Contacts.slice(0, 5));


  const addContact = () => {
    const randomContact = Contacts[Math.floor(Math.random() * (Contacts.length - 1) + 5)]
    
    setContact([...contacts, randomContact ])
  }

  const sortContactByName = () => {
    const sortByName = Contacts.sort((a, b) => a.name.localeCompare(b.name))

    setContact([...sortByName ])
  }

  const sortContactByPopularity = () => {
    const sortByPopularity = Contacts.sort((a, b) => b.popularity - a.popularity)

    setContact([...sortByPopularity])
  }

  const deleteContact = (id) => {
    const contactsCopy = [...Contacts];
    const contactIndex = contactsCopy.findIndex((item) => item.id === id);
    contactsCopy.splice(contactIndex, 1);

  
    setContact(contactsCopy);
  }



  return (
    <div className="container ">
      <h1>Celebrities contacts</h1>
      <button className="btn btn-outline-primary " onClick={() => addContact()}> Add Random Contact</button>
      <button className="btn btn-outline-secondary " onClick={() => sortContactByName()}> Sort contacts by name</button>
      <button className="btn btn-outline-success " onClick={() => sortContactByPopularity()}> Sort contacts by popularity</button>


        <table className="table">
          <thead>
            <tr className="table-sucess">
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
            </tr>
          </thead>

          {contacts.map((item, id) => {
            return (
              <tbody>
                <th scope="row"></th>
                <tr key={id}>
                  <td><img className="img" width="95px" src={item.pictureUrl} alt="img" /></td>
                  <td className="name"><strong>{item.name}</strong></td>
                  <td>{(item.popularity).toFixed(2)}</td>
                  <button className="btn btn-outline-danger" onClick={() => deleteContact(item.id)}>Delete</button>
                </tr>
              </tbody>
            )
          })}
        </table>
      
    </div>
  )

}


export default ContactsList;