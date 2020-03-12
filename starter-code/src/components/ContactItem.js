import React, {useContext} from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { ContactContext } from '../contexts/ContactContext';

const ContactItem = ({contact}) => {
  const {remove} = useContext(ContactContext);
  return(
    <tr>
      <td><Image src={contact.pictureUrl} rounded style={{width: "10%"}}/></td>
      <td className="name">{contact.name}</td>
      <td className="popularity">{contact.popularity}</td>
      <td className="delete"><Button onClick={() => remove(contact.id)} variant="danger">Delete</Button></td>
    </tr>
  );
}

export default ContactItem;