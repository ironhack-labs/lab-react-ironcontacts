import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import contacts from './contacts';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


class App extends Component {

  initContacts = [];
  initContacts = contacts.filter((contact, idx) => idx < 5);

  state = {
    contacts: this.initContacts
  }

  addRandomContact = () =>{
    const rndContact = contacts[Math.floor(Math.random()*contacts.length)]
    const newContacts = [...this.state.contacts, rndContact]
    this.setState({contacts: newContacts})
  }

  sortByName = () => {
    const sortedContacts = this.state.contacts.sort(function(a,b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
    this.setState({contacts: sortedContacts})
  }

  sortByPopularity = () => {
    const sortedContacts = this.state.contacts.sort(function(a,b){
      if(a.popularity < b.popularity) { return 1; }
      if(a.popularity > b.popularity) { return -1; }
      return 0;
    })
    this.setState({contacts: sortedContacts})
  }

  removeContact = (_id) => {
    // const contact = this.state.contacts.map(contact => {
    //   return contact.id === id});
    const contactUpdated = this.state.contacts.filter(contact => contact.id !== _id);
 this.setState({contacts: contactUpdated})
  }

  render(){

    return (
      <div className="App">
       <header className="App-header">
        <Container>
          <Row className={'p-3'}>
            <Col xs={12}>
              <h1>IronContacts</h1>
            </Col>
            <Col xs={6} md={4}></Col>
            <Col xs={12} md={8} className={'p-3'}>
              <Button onClick={()=>this.addRandomContact()}>Add Random Contact</Button>
              <Button onClick={()=>this.sortByName()}>Sort by name</Button>
              <Button onClick={()=>this.sortByPopularity()}>Sort by popularity</Button>
            </Col>
          </Row>
          <Row className={'p-3'}>
              <Col xs={3} className={'d-none d-md-block'}>
                <h2>Picture</h2>
              </Col>
              <Col xs={3} className={'d-none d-md-block'}>
              <h2>Name</h2>
              </Col>
              <Col xs={3} className={'d-none d-md-block'}>
                <h2>Popularity</h2>
              </Col>
              <Col xs={3} className={'d-none d-md-block'}>
                <h2>Action</h2>
              </Col>
            </Row>
          {/* Start Contacts Loop */}
          {this.state.contacts.map(contact =>  
            <Row className={'p-3'}>
              <Col xs={12} md={3}>
                <img src={contact.pictureUrl} alt={contact.name} width={'50%'} height={'auto'}/>
              </Col>
              <Col xs={12} md={3}>
                <p>{contact.name}</p>
              </Col>
              <Col xs={12} md={3}>
              <p>{contact.popularity}</p>
              </Col>
              <Col xs={12} md={3}>
                <Button variant="danger" onClick={()=>this.removeContact(contact.id)}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                
              </Col>
            </Row>
          )}
          {/* End Contacts Loop */}
        </Container>
       </header>
     </div>
   );

  }

}

export default App;