import React, {Component} from 'react';
import Contact from './Contact.js';
import contactsList from '../contacts.json';
import Buttons from './Buttons.js';


let contacts = contactsList.slice(0,5);

class Contacts extends Component {

  constructor(){
    super();
    this.state = {
      contacts
    }
  }

  handleClick = (e) => {
    if (e.target.name === 'addContact'){
      console.log(e.target.name)
      let randomContact = Math.floor(Math.random() * (contactsList.length - contacts.length) + contacts.length)
      console.log(randomContact)
      contacts.push(contactsList[randomContact])
      console.log(contacts)
      this.setState({contacts});
    }
    console.log(e.target.name)
  }
 
  render(){

    return(
      <div>
        <div>
          <Buttons handleClick={this.handleClick}/>
        </div>
        <div>
          <table>
            <thead>
              <tr>  
                <th>Item</th>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((oneContact, index) => 
                <Contact key={index} item={index+1} pictureUrl={oneContact.pictureUrl} name={oneContact.name} popularity={oneContact.popularity} handleClick={this.handleClick} />
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Contacts;