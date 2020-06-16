import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contacts from './Contacts';


class App extends React.Component {

state = {

  renderedContacts: contacts.slice(0, 5)

}

addContact = () => {
  let clonedContacts = JSON.parse(JSON.stringify(this.state.renderedContacts))
  let randomContact = contacts[Math.floor(Math.random() * contacts.length)]
  clonedContacts.push(randomContact)
  this.setState ({
    renderedContacts: clonedContacts
  })
}

sortByName = () => {
  let clonedContacts = JSON.parse(JSON.stringify(this.state.renderedContacts))
  clonedContacts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
  this.setState ({
    renderedContacts: clonedContacts
  })

}

sortByPopularity = () => {
  let clonedContacts = JSON.parse(JSON.stringify(this.state.renderedContacts))
  clonedContacts.sort((a,b) => (a.popularity > b.popularity) ? 1 : ((b.popularity > a.popularity) ? -1 : 0))
  this.setState ({
    renderedContacts: clonedContacts
  })
}

deleteContact = (name) => {
  let clonedContacts = JSON.parse(JSON.stringify(this.state.renderedContacts))
  clonedContacts.map((el) => {
    if (el.name === name){
      clonedContacts.splice(clonedContacts.indexOf(el), 1)
    }
  })

  this.setState ({
    renderedContacts: clonedContacts
  })

}


  render () {
    return (<div>
        <button onClick={this.addContact} style = {{padding:'5px', backgroundColor:'white', padding:'7px'}}>Add Random Contact</button>

        <button onClick={this.sortByName} style = {{padding:'5px', backgroundColor:'white', padding:'7px'}}>Sort By Name</button>
        
        <button onClick={this.sortByPopularity} style = {{padding:'5px', backgroundColor:'white', padding:'7px'}}>Sort By Popularity</button>

        {
          this.state.renderedContacts.map((contacts, index) => {
            return <Contacts 
              key={index}
              name={contacts.name}
              pictureUrl={contacts.pictureUrl}
              popularity={contacts.popularity}  
              deleteContact={this.deleteContact}
        />

          })
        }
        

    </div>)
  }

  


}

export default App;
