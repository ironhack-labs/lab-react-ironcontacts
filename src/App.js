import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css';

export default class App extends Component {
  state = {
    displayedContacts: contacts.slice(0, 5)
  }

  addRandom = () => {
    const random = Math.floor(Math.random() * (contacts.length - 5) + 5); 
    const currentList = this.state.displayedContacts.slice();

    console.log(random);
    console.log('array length', contacts.length);
    
    if (!currentList.includes(contacts[random])) {
      currentList.push(contacts[random]);
      this.setState({
        displayedContacts: currentList
      })
    } else {
      this.addRandom();
    }
  }
  
  sortName = () => {
    const currentList = this.state.displayedContacts.slice(); 

    currentList.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1
      } else if (nameA > nameB) {
        return 1
      } else {
        return 0
      }
    })

    this.setState({
      displayedContacts: currentList
    })
  }

  sortPopularity = () => {
    const currentList = this.state.displayedContacts.slice();

    currentList.sort((a, b) => {
      return b.popularity - a.popularity;
    })

    this.setState({
      displayedContacts: currentList
    })
  }

  deleteContact = (id) => {
    const currentList = this.state.displayedContacts.slice();
    const filteredList = currentList.filter(e => e.id !== id); 

    this.setState({
      displayedContacts: filteredList
    })
  }

  render() {
    return (
      <div className="App">
        <div className='contacts'>

          <h1>IronContacts</h1>

          <div className='all-btns'>
            <button className='btn top-btn' onClick={this.addRandom}>
              Add Random Contact
            </button>

            <button className='btn top-btn' onClick={this.sortName}>
              Sort by name
            </button>

            <button className='btn top-btn' onClick={this.sortPopularity}>
              Sort by popularity
            </button>
          </div>

          <div className='contact-row'>
            <div className='contact-left'>
              <b>Picture</b>
            </div>

            <div className='contact-mid1'>
              <b>Name</b>
            </div>

            <div className='contact-mid2'>
              <b>Popularity</b>
            </div>

            <div className='contact-right'>
              <b>Action</b>
            </div>
          </div>

          {this.state.displayedContacts.map(e =>
              <div key={e.id} className='contact-row'>
                <div className='contact-left'>
                  <img src={e.pictureUrl} alt='contact pic' />
                </div>

                <div className='contact-mid1'>
                  {e.name}
                </div>

                <div className='contact-mid2'>
                  {e.popularity.toFixed(2)}
                </div>

                <div className='contact-right'>
                  <button 
                    className='btn delete-btn' 
                    onClick={() => this.deleteContact(e.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          }

        </div>
      </div>
    )
  }
}