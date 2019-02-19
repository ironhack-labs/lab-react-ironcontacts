import React, { Component } from 'react';
import TableData from '../tableData/TableData';
import TableHead from '../tableHead/TableHead';
import contacts from '../../contacts.json';

class Table extends Component{
  state = {
    contacts: contacts.slice(0, 5),
  };

  handleClick = () => {
    let newContacts = [...this.state.contacts];
    let randomNumber = Math.floor(Math.random() * contacts.length);
    let randomCelebrity = contacts[randomNumber];
    this.setState({
      contacts: newContacts.concat(randomCelebrity),
    });
  };
  
  render(){

    const celebrities = this.state.contacts.map((celebrity, index) => {
      return (<TableData key={index} src={celebrity.pictureUrl} name={celebrity.name} popularity={celebrity.popularity}/>); 
    });

    return(
      <div>
        <h1>IronContacts</h1>

        <button onClick={this.handleClick}>Add Random Contact</button>

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