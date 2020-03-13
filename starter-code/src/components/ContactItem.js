import React, {useContext} from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { ContactContext } from '../contexts/ContactContext';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: #F1948A;
  border: none;
`;

const ContactItem = ({contact}) => {
  const {remove} = useContext(ContactContext);
  return(
    <tr>
      <td><Image src={contact.pictureUrl} rounded style={{width: "20%"}}/></td>
      <td className="name">{contact.name}</td>
      <td className="popularity">{contact.popularity}</td>
      <td className="delete"><StyledButton onClick={() => remove(contact.id)} variant="danger">Delete</StyledButton></td>
    </tr>
  );
}

export default ContactItem;