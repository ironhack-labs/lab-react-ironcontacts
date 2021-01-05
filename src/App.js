import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {

  state = {
    firstFive: contacts.slice(0, 5),
  };

  addRandomContact = () => {
    var randomContact = contacts[Math.floor(Math.random() * Math.floor(contacts.length))]
    this.setState({firstFive: [...this.state.firstFive, randomContact]})
  }

  sortName = () => {
    this.setState({firstFive: this.state.firstFive.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })}) 
  }

  sortPopularity = () => {
    this.setState({firstFive: this.state.firstFive.sort(function(a, b){
      if(a.popularity < b.popularity) { return 1; }
      if(a.popularity > b.popularity) { return -1; }
      return 0;
  })}) 
  }

  remove = (selectedActor) => {
    this.setState({
      firstFive: this.state.firstFive.filter((actor) => actor.id !== selectedActor.id),
    });
  }

  render() {
    return <div><h1>IronContacts</h1>
    <button onClick={this.addRandomContact}>Add Random Contact</button>
    <button onClick={this.sortName}>Sort by name</button>
    <button onClick={this.sortPopularity}>Sort by popularity</button>
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
          {this.state.firstFive.map((actor) => {
            return (
              <tr>
                <td><img className="image-actor" src={actor.pictureUrl} alt="" /></td>
                <td>
                  {actor.name}
                </td>
                <td>{Math.round(actor.popularity * 100) / 100}</td>
                <td><button onClick={() => this.remove(actor)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  }
}
export default App;