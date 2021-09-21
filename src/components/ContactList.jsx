import React, { useState } from 'react';
import contacts from '../contacts.json';
import Filter from './Filter';

const ContactList = () => {
  let contactsShort = contacts.slice(0, 5);
  const [contactsList, setContactsList] = useState(contactsShort);
  const addContactHandler = () => {
    const randomNum = Math.floor(Math.random() * contacts.length);
    setContactsList((prevState) => {
      console.log(contacts[randomNum]);
      return [...prevState, contacts[randomNum]];
    });
  };
  const deleteHandler = (id) => {
    const updatedArr = contactsList.filter((element) => element.id !== id);
    setContactsList(updatedArr);
  };
  const selectedSortFunctionHandler = (sortBy) => {
    if (sortBy === 'name') {
      const copiedStateArr = contactsList.slice();
      copiedStateArr.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      setContactsList(copiedStateArr);
    } else {
      const copiedStateArr = contactsList.slice();
      copiedStateArr.sort((a, b) => {
        if (a.popularity < b.popularity) {
          return 1;
        }
        if (a.popularity > b.popularity) {
          return -1;
        }
        return 0;
      });
      setContactsList(copiedStateArr);
    }
  };
  return (
    <div className='contacts-component'>
      <Filter
        onSelectSortFunction={(sortBy) => selectedSortFunctionHandler(sortBy)}
      ></Filter>
      <hr />
      <div className='flexwrapper'>
        {contactsList.map((contact) => {
          return (
            <div key={Math.random()} className='contacts-box'>
              <div>
                <img src={contact.pictureUrl} alt='' />
              </div>

              <div>
                <h4>{contact.name}</h4>
                <h6>Rating: {Math.round(contact.popularity * 100) / 100}</h6>
                <button
                  onClick={() => {
                    deleteHandler(contact.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
      <button onClick={addContactHandler}>Add new Contact!</button>
    </div>
  );
};

export default ContactList;
