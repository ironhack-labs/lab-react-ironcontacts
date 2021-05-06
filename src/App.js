import React from 'react';
import './App.css';
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

  deleteOne = (contactId) => {
    this.setState({
      contactInfo: this.state.contactInfo.filter(el => el.id !== contactId)
    })
  }

  

  render() {
    // const contacts = this.state.contactInfo.map(contact => (<tr key={contact.id}>{contact.name}</tr>));
    
    const info = this.state.contactInfo.map(contact => {
        
      return (

          <div >
              <table>
                  <tr key={contact.id}>
                      <td><img src={contact.pictureUrl}></img></td>
                      <td>{contact.name}</td>
                      <td>{contact.popularity}</td>
                      <td><button onClick={() => this.removeOne(contact.id) }>Delete</button></td>
                      
                  </tr>
                  
              </table>
          </div>
      )
  })

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
                    
        <tr>{info}</tr>
        </table>
      </div>
    )

  }

  

}

export default App;
