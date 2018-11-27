import React, {Component} from 'react';
import initialContacts from '../contacts.json';

import './Contacts.css';

class Contacts extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      contacts: initialContacts.slice(0,5)
    }
  }

  addContact(){
    let {contacts} = this.state;
    contacts.push(
      initialContacts[Math.floor(Math.random()*initialContacts.length)]
    );
    this.setState({contacts});
  }

  sortByName(){
    let {contacts} = this.state;
    contacts.sort((a, b) => (a.name < b.name) ? -1 : 1);
    this.setState({contacts});

    contacts.sort()
  }

  sortByPopularity(){
    let {contacts} = this.state;
    contacts.sort((a, b) => b.popularity - a.popularity);
    this.setState({contacts});
  }

  deleteActor(idx){
    let {contacts} = this.state;
    contacts.splice(idx, 1);
    this.setState(contacts);
  }


  render(){
    const {contacts} = this.state;
    return (
      <section>
        <button onClick={()=> this.addContact()}>Add Random Contact</button>
        <button onClick={()=> this.sortByName()}>Sort by name</button>
        <button onClick={()=> this.sortByPopularity()}>Sort by popularity</button>

        <table>

          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th> 
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
          {
            contacts.map((contact, idx) => {
              return <tr key={idx}>
                <td><img src={contact.pictureUrl} alt={'portrait of ' + contact.name}></img></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td><button onClick={() => this.deleteActor(idx)}>Delete</button></td>
              </tr>
            })
          }
          </tbody>
          
        </table>
      </section>
    );
  }
}

export default Contacts;