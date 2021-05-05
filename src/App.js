import React from 'react';
import './App.css';
import Celebrities from './Celebrities';
import contacts from "./contacts.json";


class App extends React.Component {

  state = {
    contactInfo: contacts.slice(0, 5)
  }

  addRandom = () => {
    // const randomActor = contacts[Math.floor(Math.random() * (contacts.length+1))];
    // const newContactsArr = this.state.contactInfo.slice();
    // newContactsArr.push(randomActor);
    this.setState({
      contactInfo: this.state.contactInfo.concat(contacts[Math.floor(Math.random() * (contacts.length+1))])
    })
  }

  sortByName = () => {
    const nameOrder = this.state.contactInfo.slice();
    this.setState({
      contactInfo: nameOrder.sort((a, b) => a.name.localeCompare(b.name))
    })
    console.log(nameOrder)
  }

  sortByPopularity = () => {
    const popOrder = this.state.contactInfo.slice();
    this.setState({
      contactInfo: popOrder.sort((a, b) => b.popularity - a.popularity)
    })
    console.log(popOrder)
  }

  render() {
    const contacts = this.state.contactInfo.map(contact => (<tr key={contact.id}>{contact.name}</tr>));
    
    return (
      <div>
          <button onClick={this.addRandom}>Add Random</button>
          <button onClick={this.sortByName}>Sort by Name</button>
          <button onClick={this.sortByPopularity}>Sort by Popularity</button>
          <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Rating</th>
          </tr>
                    
        <Celebrities contactInfo={this.state.contactInfo}/>
        </table>
      </div>
    )

  }

  

}

export default App;
