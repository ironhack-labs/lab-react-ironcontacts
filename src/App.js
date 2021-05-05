import './App.css';
import React from 'react'
import Contacts from './contacts.json';



class App extends React.Component {

  state = {
    initialArr: Contacts.slice(0, 5)
  }

  randomContact = () => {
    const contactArr2 = Contacts.slice(5);
    const contactFromArr2 = contactArr2[Math.floor(Math.random() * contactArr2.length)];
    const newContactArr = [...this.state.initialArr];
    newContactArr.unshift(contactFromArr2);
    console.log(newContactArr)
    this.setState({
      initialArr: newContactArr,
    })
  }

  sortByName = () => {
    let newContactArr = [...this.state.initialArr];
    newContactArr.sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })
    this.setState({
      initialArr: newContactArr
    })
  }

  sortByPopularity = () => {
    let newContactArr = [...this.state.initialArr];
    newContactArr.sort(function (a, b) {
      if (a.popularity > b.popularity) { return -1; }
      if (a.popularity < b.popularity) { return 1; }
      return 0;
    })
    this.setState({
      initialArr: newContactArr
    })
  }

  removeContact = (id) => {
    console.log(this.state.initialArr)
    let filteredArr = this.state.initialArr.filter(contact => contact.id !== id)
    console.log(filteredArr)
    this.setState({
      initialArr: filteredArr
    })
  }

  render() {
    const contactsArr = this.state.initialArr.map(contact => {
      return (
        <div key={contact.id} className='card'>
          <img src={contact.pictureUrl} alt={contact.name} />
          <div>
            <p><b>Name:</b> {contact.name}</p>
            <p><b>Popularity:</b> {Math.round(contact.popularity * 100) / 100}</p>
          </div>
          <button onClick={() => this.removeContact(contact.id)}>Delete</button>
        </div>
      )
    });

    return (
      <div className="App" >
        <div className="App-header">

          <h1>IronContacts</h1>
          <div className='buttonContainer'>
            <button onClick={this.randomContact}>Add Random Contact</button>
            <button onClick={this.sortByName}>Sort by Name</button>
            <button onClick={this.sortByPopularity}>Sort by Popularity</button>
          </div>
          {contactsArr}
        </div>
      </div>
    );
  }
}

export default App;
