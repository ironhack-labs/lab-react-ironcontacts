import './App.css';
import ContactsGroup from './components/ContactsGroup/ContactsGroup';
import { useState} from "react";
import {getRandom, sortByKey} from './helpers/helpers'
import data from './contacts.json'
import Button from './components/Button/Button';
import Section from './components/Section/Section';


const App = () => {
  const [contacts, setContacts] = useState([])


  const addRandomContact = (e) => {
    e.preventDefault();
    let randomContact = getRandom(data, contacts) 
    return randomContact ? setContacts([...contacts, randomContact]) : null    
  }

  const sortByPopularity = (e) => {
    e.preventDefault();
    return setContacts(sortByKey([...contacts], "popularity"))
  }

  const sortByName = (e) => {
    e.preventDefault();
    return setContacts(sortByKey([...contacts], "name"))
  }

  const deleteContact = (id) => {
    return setContacts([...contacts].filter(contact => contact.id !== id))
  }

  return (
    <div className="App">
      <header className="App-header"> IronContacts</header>
      <Section className="button-group btn-toolbar">
        <div className="btn-toolbar d-flex justify-content-around w-100" role="group">
          <Button action={addRandomContact} className="btn btn-info">
            Add Random Contact
          </Button>
          <Button action={sortByPopularity}  className="btn btn-secondary">
            Sort by popularity
          </Button>
          <Button action={sortByName} className="btn btn-primary">
            Sort By Name
          </Button>
        </div>
		</Section>
      
      {/* <ButtonGroup actions={buttonActions} className="button-group btn-toolbar"></ButtonGroup> */}
      
        {contacts &&  <ContactsGroup buttonAction={deleteContact} data={contacts} className="contacts-group"></ContactsGroup>}
    </div>
  );
}

export default App;
