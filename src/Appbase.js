import React from "react";
import contacts from './Contacts';

export default class Appbase extends React.Component {

  state = {
    originContacts: contacts,
    newArray: contacts.splice(0, 5)
  };

  

  handleAddNewContact = (id) => {
    const newArray = [...this.state.newArray];
    const randomContact = this.state.newArray[Math.floor(Math.random()
       * this.state.newArray.length)];

    newArray.push(randomContact);
    
    this.setState({
      newArray: newArray
    });
  };

  handleSortByName = (id) => {
    const arrayCopy = [...this.state.newArray];
    arrayCopy.sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });
  
    this.setState({
      newArray: arrayCopy
    });
  };

  handleDelete = (id) => {
    const arrayCopy = [...this.state.newArray];
    const index = arrayCopy.findIndex((element) => element.id === id);
    arrayCopy.splice(index, 1);
   
    this.setState({
      newArray: arrayCopy
    });
  };

  handleSortByPop = (id) => {
    const arrayCopy = [...this.state.newArray]
    const sortByPop = arrayCopy.sort((a,b) => b.popularity - a.popularity)
    
    this.setState({
        newArray: sortByPop
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="contacts">Cinema Contacts</h1>
        <button className= "button1 button" onClick={() => { this.handleAddNewContact(contacts.id); }}>Add Random Contact</button>
        <button className= "button2 button" onClick={() => { this.handleSortByName(contacts.name); }}>Sort by Name</button>
        <button className= "button2 button" onClick={() => { this.handleDelete(contacts); }}>Delete</button>
        <button className= "button2 button" onClick={() => { this.handleSortByPop(contacts.popularity); }}>Sort by Pop</button>
        <table className= "table">
          <thead>
            <tr>
              <th className="th1">Picture</th>
              <th className="th2">Name</th>
              <th className="th3">Popularity</th>
            </tr>
          </thead>
          <tbody className= "image">
            {this.state.newArray.map((contacts) =>
              <tr key={contacts.id}>
                  <td><img id="actors" src={contacts.pictureUrl} alt=''/></td>
                <td className= "names">{contacts.name}</td>
                <td className = "pop">{contacts.popularity}</td>
              </tr>
              )}
          </tbody>
        </table>
      </div>
    );
  }
}