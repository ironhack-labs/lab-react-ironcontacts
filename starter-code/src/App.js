import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import ContactCard from './components/ContactCard';


class App extends React.Component {
  
  constructor () {
    super()
    this.state = {
      contactArr: contacts.splice(0, 5)
    }
  }

  addRandomContact = () => { 
    // console.log('Clicked', e.target);
    const randomContact = contacts[Math.floor(contacts.length * Math.random())]
    const newArr = this.state.contactArr;
    
    newArr.push(randomContact)
    this.setState({ contactArr: newArr })
    
  }
  
  filterContacts = () => {
    
    console.log('Clicked');
    const newArr = this.state.contactArr;
    const arrFiltered = newArr.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
        else {
          return +1
        }
      }
    )
    console.log('filtered', arrFiltered);
    
   this.setState({ contactArr: arrFiltered })
  }
  
  render() {
    return (
      <div className="App">

      <h1>IronContacts</h1>
        
        <button onClick={() => this.addRandomContact() }>Add random contact</button>
        <button onClick={() => this.filterContacts() }>Filter contacts</button>
        {
          this.state.contactArr.map( (contact, index) => {
            return (
              <ContactCard name={contact.name} picture={contact.pictureUrl} popularity={contact.popularity} key={index}/>
            )
          } )
        }


      </div>
    );
  }
}

export default App;
