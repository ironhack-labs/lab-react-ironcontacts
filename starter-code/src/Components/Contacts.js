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

  addContact = ()=>{
    let randomContact = Math.floor(Math.random() * (contactsList.length - contacts.length) + contacts.length)
    contacts.push(contactsList[randomContact])
    this.setState({contacts});
  }
  
  sortByName = ()=>{
    contacts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 :0));
    this.setState({contacts});
  }
  
  sortByPopularity = ()=>{
    contacts.sort((a,b) => (b.popularity - a.popularity));
    this.setState({contacts});
  }
  
  removeContact = (e)=>{
    contacts.splice(e.target.id-1,1)
    this.setState({contacts});
  }

  handleClick = (e) => {
    if (e.target.name === 'addContact') this.addContact();
    if (e.target.name === 'sortByName') this.sortByName();
    if (e.target.name === 'sortByPopularity') this.sortByPopularity();
    if (e.target.name === 'removeContact') this.removeContact(e);
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