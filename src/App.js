import React,{Component} from 'react';
import './App.css';
import Contacts from './contacts.json';
import OneContact from './components/OneContact';

class App extends Component {
  state = { initialFive: Contacts.slice(0,5) };

randomActor = () => {
  const copyInitialFive = [...this.state.initialFive]
  const randomActor = Contacts[Math.floor(Math.random()*Contacts.length)]
  if(!copyInitialFive.includes(randomActor)){
    copyInitialFive.push(randomActor)
  }
  this.setState({
    initialFive: copyInitialFive
  });
}

sortByName = () => {
  const copyInitialFive = [...this.state.initialFive]
  copyInitialFive.sort(function(a, b){return b.name<a.name})
  this.setState({
    initialFive: copyInitialFive
  });
}

sortByPopularity = () => {
  const copyInitialFive = [...this.state.initialFive]
  copyInitialFive.sort(function(a, b){return b.popularity<a.popularity})
  this.setState({
    initialFive: copyInitialFive
  });
}

deleteContactHandler = (contactIndex) => {
  const copyInitialFive = [...this.state.initialFive]
  copyInitialFive.splice(contactIndex, 1);

  const filtered = this.state.initialFive.filter(initialFive => initialFive.id !== contactIndex)
  this.setState({
    initialFive: filtered,
  });
};


  render() {
  return (
    <div className="App">
    <button onClick={() => this.randomActor()}>Add Random Contact</button>
    <button onClick={() => this.sortByName()}>Sort by name</button>
    <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
    <table>
    <tr>
      <th>
        Picture
      </th>
      <th>
        Name
      </th>
      <th>
        Popularity
      </th>
      <th>
        Action
      </th>
    </tr>
    <tbody>
      {this.state.initialFive.map((oneContact, index) => {
        return (
          <div>
        <OneContact imageURL={oneContact.pictureUrl} name={oneContact.name} popularity={oneContact.popularity} />
        <button onClick={() => this.deleteContactHandler(oneContact.id)}>Delete</button>
        </div>
        )})}
      </tbody>
      </table>


    </div>
  )};
}

export default App;
