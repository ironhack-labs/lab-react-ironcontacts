import contacts from '../contacts.json'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons';




function Table() {
    const [firstFive, setFirstFive] = useState(contacts.slice(0, 5))
    const [allContacts, setAllContacts] = useState(contacts)

    const addRandomContact = () => {
        const otherContacts = allContacts.filter((contact) => !firstFive.includes(contact));
        const randomContact = otherContacts[Math.floor(Math.random() * otherContacts.length)];

        setFirstFive([...firstFive, randomContact]);
      };

    return (
        <div>

            {firstFive.map((contact) => (
                <li className="list-group-item" key={contact.name}></li>
            ))}
            <h2>Famous contacts</h2>
            <button className='addRandomContact' onClick={addRandomContact}>
        Add random contact
      </button>
      <table className='contacts'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Photo</th>
            <th scope='col'>Name</th>
            <th scope='col'>Rate of popularity</th>
            <th scope='col'>Won an Oscar</th>
            <th scope='col'>Won an Emmy</th>
          </tr>
        </thead>
        
        <tbody>
          {firstFive.map((contact, index) => (
            <tr key={contact.id}>
              <th scope='row'>{index + 1}</th>
              <td>
                <img className='contactPicture' src={contact.pictureUrl} alt='' />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar && <FontAwesomeIcon icon={faTrophy} />}</td>
              <td>{contact.wonEmmy && <FontAwesomeIcon icon={faTrophy} />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
