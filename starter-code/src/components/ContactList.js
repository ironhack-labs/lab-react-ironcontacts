import React, {useContext} from 'react';
import ContactItem from './ContactItem';
import { ContactContext } from '../contexts/ContactContext';
import Table from 'react-bootstrap/Table';

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return(
    <div>
      <Table hover style={{width: "60%"}}>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => {
            return (<ContactItem contact={contact} key={contact.id}/>);
          })}
        </tbody>
      </Table>
    </div>
  );
}


export default ContactList;