import React, {Component} from 'react';
import contacts from '../contacts.json';


class Table extends Component{

  constructor(props){
    super(props);
    this.state = {
      contacts: contacts.splice(0,5)
    }
  }

  addRandomContact = () =>{
    this.setState({
      contacts: [...this.state.contacts, ...contacts.splice(Math.floor(Math.random() * contacts.length),1)]
    });
  }

  deleteContact = (indexToRemove) => {
    const stateContactsCopy = [...this.state.contacts];
    stateContactsCopy.splice(indexToRemove, 1);
    this.setState({
      contacts: stateContactsCopy
    });
  }

  sortByName = () => {
    
    this.setState({
      contacts: [...this.state.contacts].sort( (a,b) => a.name.localeCompare(b.name))
    });
  }

  sortByPopularity = () => {
    this.setState({
      contacts: [...this.state.contacts].sort((a,b) => b.popularity-a.popularity)
    });
  }

  render(){
    return (
      <div style={{textAlign: 'left'}}>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {this.state.contacts.map((contact, index) =>{
            return (
              <tr key={index}>
                <td><img src={contact.pictureUrl} alt=''></img></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td><button onClick={this.deleteContact.bind(this, index)}>Delete</button></td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }

}


export default Table;