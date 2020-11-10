import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import contacts from './contacts';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

  render(){

    return (
      <div className="App">
       <header className="App-header">
        <Container>
          <Row className={'p-3'}>
            <Col xs={12}>
              <h1>IronContacts</h1>
            </Col>
            <Col xs={12} sm={4} className={'p-3'} >
              <Button onClick={()=>this.addRandomContact()}>Add Random Contact</Button>
            </Col>
            <Col xs={12} sm={4} className={'p-3'}>
              <Button onClick={()=>this.sortByName()}>Sort by name</Button>
            </Col>
            <Col xs={12} sm={4} className={'p-3'}>
              <Button onClick={()=>this.sortByPopularity()}>Sort by popularity</Button>
            </Col>
          </Row>
          <Row className={'p-3'}>
              <Col xs={4}>
                <h2>Picture</h2>
              </Col>
              <Col xs={4}>
              <h2>Name</h2>
              </Col>
              <Col xs={4}>
                <h2>Popularity</h2>
              </Col>
            </Row>
          {/* Start Contacts Loop */}
          {this.state.contacts.map(contact =>  
            <Row className={'p-3'}>
              <Col xs={4}>
                <img src={contact.pictureUrl} alt={contact.name} width={'55px'} height={'85px'}/>
              </Col>
              <Col xs={4}>
                <p>{contact.name}</p>
              </Col>
              <Col xs={4}>
              <p>{contact.popularity}</p>
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



{/* <table>
  <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
  </tr>
  {this.state.contacts.map(contact => 
    <tr>
      <td><img src={contact.pictureUrl} alt={contact.name} width={'55px'} height={'85px'}/></td>
      <td><p>{contact.name}</p></td>
      <td><p>{contact.popularity}</p></td>
    </tr>
    )} 
</table> */}