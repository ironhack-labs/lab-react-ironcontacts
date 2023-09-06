import contactsJSON from '../../contacts.json';
import { useState } from 'react';
import ContactsItem from './ContactsItem';
import UPS from '../../../public/ups.jpg'

const INITIAL_CONTACTS = contactsJSON.splice (0, 5); // con esta variable traemos a los 5 primero de la lista
const SORT_BY_OPTIONS = [ 'Popularity' , 'Name']


// en esta variable estoy creando un nuevo JSON sin el elemento borrado


function ContactList () {
    //const [ contacts, setContacts] = useState (contactsJSON) // el estado de los contactos
    const [ contacts, setContacts] = useState (INITIAL_CONTACTS); // cambiamos el estado para que solo traiga 5 contactos
    const [ sortBy, setSortBy ] = useState (null);

    // agregando la logica de los botones para ordernar por name y popularity

    const renderContactItems = () => {
        let contactsCopy = [...contacts];

        if (SORT_BY_OPTIONS.includes (sortBy)) {
            if (sortBy === 'Name') {
                contactsCopy = contactsCopy.sort((a, b) => {
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();

                    if (nameA < nameB ) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
            }
            if (sortBy === 'Popularity') {
                contactsCopy = contactsCopy.sort((a, b) => b.popularity - a.popularity);
            }
        }

        return contactsCopy.map(contact => (
            <ContactsItem key={contact.id} {...contact} onDelete={() => onDeleteContact(contact.id)} />
        ))
        
    }

    const handleSortByButton = (value) => {
        if (sortBy === value) {
            setSortBy (null)
        } else {
            setSortBy (value)
        }
    }

    const onDeleteContact = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);
    
        setContacts (newContacts)
    }

    const addRandomContact = () => {
        if (contactsJSON.length === 0) {
          return alert('There are no more Contacts');
        }
    
        const randomIndex = Math.floor(Math.random() * contactsJSON.length);
        const newContact = contactsJSON.splice(randomIndex, 1)[0]; // splice devuelve un arr con lo que borra, así que me quedo con el índice 1
        setContacts([...contacts, newContact])
      }

    return (
        <div className='ContactList'>
            <h1 className='h1Contact'> Iron Contact </h1>

        { contacts.length > 0 ? (

            <>
            <div className='flex buttonsContact'>
            <div className="btn-group mt-4  me-3" role="group" aria-label="Basic example">
                {SORT_BY_OPTIONS.map((option) => (
                  <button
                    key={option} type="button"
                    className={`btn btn-outline-dark ${sortBy === option ? 'active' : ''}`}
                    onClick={() => handleSortByButton(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <button onClick={addRandomContact} type="button" className="btn mt-4 btn-outline-dark">Add Random Contact</button>

            </div>

            

            <table className="table table-hover mt-4">
            <thead>
                <tr className='trContact'>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Popularity</th>
                <th scope="col">Won Oscar</th>
                <th scope="col">Won Emmy</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
               {renderContactItems ()}

            </tbody>
            
            </table>
            </>
            ) : (
                <div className="card">
                    <img  src={UPS} className="card-img imgUPS" alt={UPS} />
                    </div>
            )
            }




        </div>
    )
}

export default ContactList;