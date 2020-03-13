import React, {useContext} from 'react';
import ContactItem from './ContactItem';
import { ContactContext } from '../contexts/ContactContext';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return(
      <Row className="justify-content-md-center mt-5">
        <Col xs lg="9">
          <Table hover>
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
        </Col>
      </Row>
  );
}


export default ContactList;