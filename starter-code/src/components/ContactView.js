import React from 'react'
import contacts from '../../src/contacts.json'
import {Table, Container} from 'react-bootstrap'



class ContactView extends React.Component {
    
    state = {copyContacts : [...contacts]}

    random = () => {
      let firstFive = this.state.copyContacts.sort( () => Math.random() - 0.5)
      this.setState({
        copyContacts: firstFive
      })
    }



    render() {

  return (
      <Container>
        <button onClick={() => this.random()}>Random Contacts</button>
              <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
    </thead>
    <tbody>
        {this.state.copyContacts.slice(0, 5).map((contact, index) => 
          <tr>
          <td key={index}>{index + 1}</td>
        <td><img className="photo-id" src={contact.pictureUrl} alt={contact.name}></img></td>
        <td>{contact.name}</td>
        <td>{(contact.popularity).toFixed(2)}</td>
        </tr>
          
          )}
    </tbody>
  </Table>
          </Container>
      )
}
}


export default ContactView