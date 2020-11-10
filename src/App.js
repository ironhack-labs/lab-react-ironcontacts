import React, {Component} from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends Component {
  
  state = {
    cutedArray: contacts.slice(0,5)
  }


  selectRandom = () => {
    const contactsCopy = [...this.state.cutedArray]
    const newRandom = contacts[Math.floor(Math.random() * contacts.length)];
    if (!contactsCopy.includes(newRandom)){
      contactsCopy.push(newRandom)
    }
      this.setState({
        cutedArray: contactsCopy
      })
  }
  
  sortByName = () => {
    const sortedArrayByName = [...this.state.cutedArray].sort((a, b) => {
      if (a.name > b.name){
        return 1;
      }
      else if (a.name < b.name){
        return -1;
      }
      return 0
      });
    
      this.setState({
        cutedArray: sortedArrayByName
      })
    }

    sortByPopoularity = () => {
      const sortedArrayByPopularity = [...this.state.cutedArray].sort((a, b) => {
        if (a.popularity > b.popularity){
          return 1;
        }
        if (a.popularity < b.popularity){
          return -1;
        }
        return 0
        });
      
        this.setState({
          cutedArray: sortedArrayByPopularity
        })
      }

      deleteContact = (contactIndex) => {
        const contactsCopy = [...this.state.cutedArray]
        const filtered = contactsCopy.filter(contact => contact.id !== contactIndex)
        this.setState({
          cutedArray: filtered
        })
      }

  render(){
    return (
      <div className="App">
        <h1>IconContacts</h1>
        <button onClick={this.selectRandom}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopoularity}>Sort By Popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
          {this.state.cutedArray.map((oneContact, index) => {
            return (
            <tr key={index} {...oneContact}>
              <td><img src={oneContact.pictureUrl} alt="" height="150" /></td>
              <td>{oneContact.name}</td>
              <td>{Math.round(oneContact.popularity*100)/100}</td>
              <td><button onClick={() => this.deleteContact(oneContact.id)}>Delete</button></td>
            </tr>
          )
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
