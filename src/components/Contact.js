import React, { useState } from 'react';
import contactsData from '../contacts.json';

export default function Contact() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const handleRandom = () => {
    // let counter = contacts.length+1
    // const newContacts = contactsData.slice(0,counter)
    let randomCelebrity = contactsData[Math.floor(Math.random()*contactsData.length
      )];
    console.log('hi', randomCelebrity);
    // let newContacts = contacts.push(randomCelebrity)

    setContacts([...contacts, randomCelebrity]);
  };

  const handleSort = () => {
    let cloneContact = [...contacts];
    cloneContact.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });

    setContacts(cloneContact);
  };
  const handlePop = () => {
    let cloneContact = [...contacts];
    cloneContact.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      } else if (a.popularity < b.popularity) {
        return -1;
      } else {
        return 0;
      }
    });

    setContacts(cloneContact);
  };

  const handleDelete =  (elem) => {
    console.log('hoo', elem.id);
    // const filterContact = contacts.filter((element) => {
    //   return element.id !== elem.id;
    // });
     setContacts(contacts.filter((element) => element.id !== elem.id));
  };

  console.log(
    "render"
  );
  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={() => handleRandom()}>Add Random Contact</button>
      <button onClick={() => handleSort()}>Sort by name</button>
      <button onClick={() => handlePop()}>Sort by popularity</button>
      <center>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((elem,index) => (
              <tr key={index}>
                <td>
                  <img style={{ width: '100px' }} src={elem.pictureUrl}></img>
                </td>

                <td>{elem.name}</td>

                <td>{elem.popularity}</td>
                <td>
                  <button onClick={() => handleDelete(elem)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}
