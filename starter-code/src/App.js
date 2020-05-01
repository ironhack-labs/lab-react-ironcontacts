import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import RowTable from './components/RowTable.jsx'




class App extends Component {

  state = {
    contacts: contacts.splice(0, 5),
  };


  deleteContact = this.deleteContact.bind(this);



  getRandomContact(){
   const addedContact = contacts[Math.floor(Math.random()*contacts.length)]
   const newContacts = this.state.contacts
   newContacts.push(addedContact)
   this.setState({contacts:newContacts})
  }

  getSortedTable(type){

    const sortedContacts = this.state.contacts.sort((a,b) => {
      if (a[type] < b[type]) {
        return -1;
      }
      if (a[type] > b[type]) {
        return 1;
      }
      return 0;
    }) 
    this.setState({contacts: sortedContacts})
  }

  
deleteContact(idx){

 const newContacts = [...this.state.contacts]

 newContacts.splice(idx,1)



this.setState({contacts: newContacts})

}



  render() {
    return (
      <div className="App">
      <h1>Ironcontacts</h1>
<div>
      <button onClick={() => this.getRandomContact() }>
                    Add random contact
                </button>
                <button onClick={() => this.getSortedTable('name') }>
                   Sort by name
                </button>

                <button onClick={() => this.getSortedTable('popularity') }>
                    Sort by popularity
                </button>

</div>
      <table>
      <thead><tr><th>Picture</th><th>Name</th><th>Popularity</th></tr></thead>
       {this.state.contacts.map((contact, index) => 
              
       (
      
            <RowTable key={index}  pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity} 
            deleteContact={this.deleteContact} />
       
      )
       
      )}
      </table>
      </div>
    );
  }
}

export default App;
