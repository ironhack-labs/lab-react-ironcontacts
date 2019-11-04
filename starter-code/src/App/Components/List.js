import React from 'react';
import { Container, Button } from 'shards-react';

export default function List( { contacts, deleteContact } = this.props ) {
  return (
    <Container className="contacts-table">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
          </tr>
        </thead>
        <tbody>
          { contacts.map( (contact, index) => (
            <tr key={index}>
              <td><img src={contact.pictureUrl} alt={contact.name} width="100"/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td><Button theme="danger" onClick={event => deleteContact(index)}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}