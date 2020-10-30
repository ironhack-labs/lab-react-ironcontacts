import React from 'react';
//import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component  {

  state = {
    contacts: contacts.slice(0,4),
  };

  getRandomContact = () => {

    const randomNum = Math.floor(Math.random()*contacts.length) + 5;

    // const contactJsx = <tr key={`${contacts[randomNum].id}`}>
    //                       <td><img src={contacts[randomNum].pictureUrl} alt={contacts[randomNum].name} /></td>
    //                       <td>{contacts[randomNum].name}</td>
    //                       <td>{contacts[randomNum].popularity.toFixed(2)}</td>
    //                     </tr>
    //firstFive.push(contactJsx);
    this.state.contacts.push(contacts[randomNum]);

    this.setState({contacts: this.state.contacts});
  };

  displayContacts = () => {
    //console.log(this.state.users)
    const contactJsx = this.state.contacts.map(contact => {
      return (
        <tr key={`${contact.id}`}>
          <td><img src={contact.pictureUrl} alt={contact.name} /></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
        </tr>
      );
    });
    return contactJsx;
}
  // let firstFive = [];
  // for (let i=0; i <= 4 ; i++){
  //   const contactJsx = <tr key={`${contacts[i].id}`}>
  //                         <td><img src={contacts[i].pictureUrl} alt={contacts[i].name} /></td>
  //                         <td>{contacts[i].name}</td>
  //                         <td>{contacts[i].popularity.toFixed(2)}</td>
  //                       </tr>
  //   firstFive.push(contactJsx);
  // };

  //console.log(firstFive);
  sortByName = () => {
    this.state.contacts.sort((user1, user2) => user1.name.localeCompare(user2.name))
    this.setState({contacts: this.state.contacts});
  };

  //console.log(firstFive);
  sortByPop = () => {
    this.state.contacts.sort((user1, user2) => user2.popularity - user1.popularity)
    this.setState({contacts: this.state.contacts});
  };

  render (){
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.getRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPop}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.displayContacts()}
          </tbody>
        </table>
      </div>
    );
  };
};

export default App;
