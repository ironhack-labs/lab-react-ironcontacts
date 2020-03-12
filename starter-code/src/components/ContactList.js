import React, {useContext} from 'react';
import ContactItem from './ContactItem';
import { ContactContext } from '../contexts/ContactContext';

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return(
    <div>
      <p>Contact List Cargada</p>
      <ul>
        {contacts.map(contact => {
          return (<ContactItem contact={contact} key={contact.id}/>);
        })}
      </ul>
    </div>
  );
}


export default ContactList;