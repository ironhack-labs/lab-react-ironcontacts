import React, { Component } from 'react';
import TableData from '../tableData/TableData';
import TableHead from '../tableHead/TableHead';
import contacts from '../../contacts.json';

class Table extends Component{
  state = {
    contacts: contacts.slice(0, 5),
  };

  addContact = () => {
    let copyContacts = [...this.state.contacts];
    let randomNumber = Math.floor(Math.random() * contacts.length);
    let randomCelebrity = contacts[randomNumber];
    
    this.setState({
      contacts: copyContacts.concat(randomCelebrity),
    });
  };

  sortName = () => {
    let copyContacts = [...this.state.contacts];
    copyContacts.sort(function(a, b){
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
  })
    this.setState({
      contacts: copyContacts,
    });

  };

  sortPopularity = () => {
    let copyContacts = [...this.state.contacts];
    copyContacts.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      contacts: copyContacts,
    });

  };
  
  render(){

    const celebrities = this.state.contacts.map((celebrity, index) => {
      return (<TableData key={index} src={celebrity.pictureUrl} name={celebrity.name} popularity={celebrity.popularity}/>); 
    });

    return(
      <div>
        <h1>IronContacts</h1>

        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>

        <table className="table">
          <TableHead />
            <tbody>
              {celebrities}
            </tbody>
        </table>
      </div>
    )
  }
}

export default Table;