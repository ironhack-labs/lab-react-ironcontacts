import React from 'react';
import './App.css';
import contactsList from './contacts.json';
class App extends React.Component {
  state = {
    // contactListTotals : [...contactsList]
    contactsList: contactsList.splice(0, 6),
    // randomList : contactListTotals.splice()
  };
  handlerandom = () => {
    let random
    let inList = true;
    while(inList){
      random = contactsList[Math.floor(Math.random() * contactsList.length)];
      inList = false;
      this.state.contactsList.forEach(e => {
        if(e.name === random.name) {
          inList = true;
        }
      });
    }
    this.setState({
      contactsList: [...this.state.contactsList, random]
    })
  };
  sortByName = () => {
    var byName = this.state.contactsList;
    byName.sort(function(a,b) {
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
    });
    this.setState({
      contactsList: [...byName]
    })
  }
  sortByPopularity = () => {
    var byPop = this.state.contactsList;
    byPop.sort(function(a,b) {
    var x = a.popularity;
    var y = b.popularity;
    return x > y ? -1 : x < y ? 1 : 0;
    });
    this.setState({
      contactsList: [...byPop]
    })
  }

  deleteButton = (actorIndex) => {
    const actorList = this.state.contactsList.filter(oneContact => oneContact.id !== actorIndex)
    this.setState({
      contactsList : actorList,
    })
  }


  render() {
    let actores = this.state.contactsList.map((oneContact, index) => {
      return (
        <tr>
          <td>{oneContact.name}</td>
          <td>
            <img
              src={oneContact.pictureUrl}
              alt={oneContact.name + ' photo'}
              width="100px"
              height="150px"
            />
          </td>
          <td>{oneContact.popularity}</td>
          <td> <button onClick={() => this.deleteButton(oneContact.id)} > Delete</button> </td>
        </tr>
      );
    });
    return (
      <div>
      <button onClick={this.handlerandom} >Add random Contact</button>
      <button onClick={this.sortByName} >Sort by name</button>
      <button onClick={this.sortByPopularity} >Sort by popularity</button>
      <table>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Popularity</th>
          <th>Delete</th>
        </tr>
        {actores}
      </table>
      </div>
    );
  }
}
export default App;