import {Component} from 'react';
import './App.css';
import ContactForm from './contacts.json';

class Contact extends Component {

  state = {
    contacts: ContactForm.slice(0, 5)
  };

  randomContact = () => {
    let randomNumber = Math.floor(Math.random() * ContactForm.length)
    this.setState((state) => ({
      contacts: [...state.contacts, ContactForm[randomNumber]]
    }));
  };

  sortByName = () => {

    let sortedName = this.state.contacts.sort(function (a, b) {
      //console.log(a)
      if (a.name > b.name) {
          return 1;
      }
      if (b.name > a.name) {
          return -1;
      }
      return 0;
    });
  
    this.setState((state) => ({
    contacts: sortedName
    }));
  }; 

  sortByPopularity = () => {

    let sortedPopularity = this.state.contacts.sort(function (a, b) {
      
      if (a.popularity > b.popularity) {
          return -1;
      }
      if (b.popularity > a.popularity) {
          return 1;
      }
      return 0;
    });
  
    this.setState((state) => ({
    contacts: sortedPopularity
    }));
  };

  deleteContact = (arr) => {
    console.log(arr)

    const deletedCont = [...this.state.contacts]
    deletedCont.splice(arr,1)

    this.setState((state) => ({
      contacts: deletedCont
      }));
  }


  render() {
    //console.log(this.state.contacts[0].name)
    return (
      <>
      <button onClick={this.randomContact}>Add Random Contact</button>
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
              {
                this.state.contacts.map((contact, index) => {
                  return (
                    <tr key={contact.id}>
                        <td> <img src={contact.pictureUrl}/> </td>
                        <td>{contact.name}</td>
                        <td>{contact.popularity.toFixed(2)}</td>
                        <td><button onClick={() => this.deleteContact(index)}>Delete</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
        </table>
        </>
    )}; 
};


function App() {
    return (
        <div className="App">
            <Contact/>
        </div>
    );
}

export default App;