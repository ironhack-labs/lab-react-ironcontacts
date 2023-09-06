import contactsJSON from '../../contacts.json';
import { useState } from 'react';
import ContactsItem from './ContactsItem';
import UPS from '../../../public/ups.jpg'

const INITIAL_CONTACTS = contactsJSON.splice (0, 5); // con esta variable traemos a los 5 primero de la lista
//const SORT_BY_OPTIONS = [ 'Popularity' , 'Name']


// en esta variable estoy creando un nuevo JSON sin el elemento borrado


function ContactList () {
    //const [ contacts, setContacts] = useState (contactsJSON) // el estado de los contactos
    const [ contacts, setContacts] = useState (INITIAL_CONTACTS); // cambiamos el estado para que solo traiga 5 contactos
    //const [ sortBy, setSortBy ] = useState (null);

    const onDeleteContact = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);
    
        setContacts (newContacts)
    }

    return (
        <div className='ContactList'>
        { contacts.length > 0 ? (
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
                {contacts.map(contact => (
                    
                    <ContactsItem key={contact.id} {...contact} onDelete={() => onDeleteContact(contact.id)} /> 
                ) )
                
                }

            </tbody>
            
            </table>

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