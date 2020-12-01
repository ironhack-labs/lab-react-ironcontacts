import React from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends React.Component {
  
  state = { 
    celebs: contacts.slice(5),
    displayedCelebs: contacts.slice(0,5)
  }

  addRandom = () => {
    
    const randomInd = Math.floor(Math.random() * this.state.celebs.length);
    const randomObj = this.state.celebs.splice(randomInd, 1);
    this.state.displayedCelebs.push(randomObj[0]);
    this.setState( {displayedCelebs: this.state.displayedCelebs, celebs: this.state.celebs})
  }

  sortByName = () => {
    const {displayedCelebs} = this.state;
    const sortedByName = displayedCelebs.sort((a,b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({displayedCelebs: sortedByName});
  }

  sortByPopularity = () => {
    const {displayedCelebs} = this.state;
    const sortedByPopularity = displayedCelebs.sort((a,b) => {
      return b.popularity - a.popularity;
    });
    this.setState({displayedCelebs: sortedByPopularity})
  }

  handleDelete = (id) => {

    const {displayedCelebs} = this.state;
    const updatedCelebs = displayedCelebs.filter(celebObj => {
      if (celebObj.id !== id) {
        return true
      } else {
        return false
      }
    })
    this.setState({displayedCelebs: updatedCelebs});
  }

  render(){

  return (
    <div className="App">
        <h1>IronContacts</h1>
          <button onClick={this.addRandom}>Add Random Contact</button>
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
                this.state.displayedCelebs.map((celebObj) => {
                    return (
                    <tr key={celebObj.id}>
                      <td><img src={celebObj.pictureUrl} alt="" width="100px" height="150px"/></td>
                      <td>{celebObj.name}</td>
                      <td>{Number(celebObj.popularity.toFixed(2))}</td>
                      <td><button onClick={() => this.handleDelete(celebObj.id)}>Delete</button></td>
                    </tr>
                  )})
              }

            </tbody>
          </table> 
      </div>
    );
}
}
export default App;