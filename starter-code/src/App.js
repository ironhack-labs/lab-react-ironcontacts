
import React, { Component } from 'react';
import './App.css';
import contacts from './contacts'
import ContactRows from './ContactsRow'
import "antd/dist/antd.css";
import {Button} from 'antd'


class App extends Component {
  contactsSliced = contacts.slice(0, 5)
  state={
    data: this.contactsSliced
  }


  addContact = () => {
    const newContacts = [...this.state.data]
    const filterContacts = contacts.filter(el => !newContacts.includes(el))
    const contact = 
      filterContacts[Math.floor(Math.random() * filterContacts.length)]
      if(filterContacts.length === 1) {
        return
      } else {
        newContacts.push(contact)
      }
      this.setState({data: newContacts})
  }

}



  render() {
    return (
      <div className="container">
        <Button style={{margin: '40px'}} type="primary" onClick={this.addContact}>Add random contact</Button>
        
        {this.state.data.map((el, index) => {
          return (
            <Datos 
            key={index}
            {...el}
            Delete={() => this.removeContact(index)}
            />
          )
        })}
      </div>
    );
  }
}

export default App;