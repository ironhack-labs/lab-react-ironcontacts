import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    shortList: contacts.slice(0,5),
  };

  addRandom() {
    const contactsCopy = [...this.state.shortList];
    const newRandom = contacts[Math.floor(Math.random() * contacts.length)]

    contactsCopy.push(newRandom);

    this.setState({
      shortList: contactsCopy
    })

  };
  
  sortByName() {
    const sortedList = this.state.shortList
    .sort((a, b) => a.name.localeCompare(b.name))
    
    this.setState({
      shortList: sortedList
    })
  };

  sortByPopularity() {
    const newSortedList = this.state.shortList
    .sort((a, b) => a.popularity - b.popularity)
    
    this.setState({
      shortList: newSortedList
    })
  };

  render() {
        return(
        <div className="App">
          <h1>IronContacts</h1>
          <button onClick={() => this.addRandom()}>Add Random</button>
          <button onClick={() => this.sortByName()}>Sort by name</button>
          <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
          <table>
            <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>

          {this.state.shortList.map((item) => {
            return (
            <tr key={item.id} {...item}>
              <td><img src={item.pictureUrl} alt="" height="150" /></td>
              <td>{item.name}</td>
              <td>{Math.round(item.popularity * 100) / 100}</td>
            </tr>
          )
          })}
          </table>
          
        </div>
        )
      };
}


// function App() {
  

//   return (
//     <div className="App">
//     <h1>IronContacts</h1>
//     <table>
//       <tr>
//       <th>Picture</th>
//       <th>Name</th>
//       <th>Popularity</th>
//     </tr>
//     <tr>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     </table>
      
//     </div>
//   );
// }

export default App;
