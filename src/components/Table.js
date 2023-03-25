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

    function sortByPopularity(a, b) {
        return b.popularity - a.popularity
    }
    
    const sortPopularity = () => {
        const sortedContacts = [...firstFive].sort(sortByPopularity);
        setFirstFive(sortedContacts)
    }

    function sortByName(a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
    }

    const sortName = () => {
        const sortedContacts = [...firstFive].sort(sortByName);
        setFirstFive(sortedContacts)
    }

    const deleteContact = (id) => {
        const contactsAfterRemoveOne = firstFive.filter((contact) => contact.id !== id);
        setFirstFive(contactsAfterRemoveOne)
    }

    return (
        <div>

            {firstFive.map((contact) => (
                <li className="list-group-item" key={contact.name}></li>
            ))}
            <h2>Famous contacts</h2>
            <button type="button" className="btn btn-outline-info" onClick={addRandomContact}>
                Add random contact
            </button>

            <button type="button" className="btn btn-outline-primary" onClick={sortPopularity}>Sort by popularity</button>
            <button type="button" className="btn btn-outline-success" onClick={sortName}>Sort by name</button>

            <table className='contacts'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Photo</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Rate of popularity</th>
                        <th scope='col'>Won an Oscar</th>
                        <th scope='col'>Won an Emmy</th>
                        <th scope='col'>Actions</th>
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
                            <td>
                            <button type="button" className="btn btn-outline-warning" onClick={() => deleteContact(contact.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
