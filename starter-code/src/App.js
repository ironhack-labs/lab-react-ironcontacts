import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Artist from "./Components/Artist"

class App extends Component {
  state = {
    contSelect: contacts.splice(0,5),
    sortedByName: false,
    sortedByPop: false,
  };

  addRandomContact = () => {
    let i = Math.floor(Math.random()*contacts.length)
    this.setState({contSelect: [...this.state.contSelect, contacts[i]]});
    contacts.splice(i,1);
  }

  sortByName = () => {
    if (!this.state.sortedByName)
      {
        console.log(this.state)
        this.setState({
          contSelect: this.state.contSelect.sort( (a, b) => { 
            if (a.name > b.name) { 
              return 1; } 
            if (a.name < b.name) { 
              return -1; } 
            return 0; 
          }),
          sortedByName: true,
      })
    }
    else 
    {
      console.log(this.state)
      this.setState({
        contSelect: this.state.contSelect.sort( (a, b) => { 
            if (b.name > a.name) { 
              return 1; } 
            if (b.name < a.name) { 
              return -1; } 
            return 0; 
          }),
        sortedByName: false,
      })
    }
  }

  sortByPop = () => {
    if (!this.state.sortedByPop)
      this.setState({
        contSelect: this.state.contSelect.sort( (a, b) => b.popularity - a.popularity),
        sortedByPop: true,
      })
    else 
    this.setState({
      contSelect: this.state.contSelect.sort( (a, b) => a.popularity - b.popularity),
      sortedByPop: false,
    })
  }

  deleteElem = (i) => {
    const saveArray = this.state.contSelect
    saveArray.splice(i,1)
    this.setState({
      contSelect: saveArray,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="AppBlock">
          <h1>IronContacts</h1>
          <div className="AppButtons">
            <button className="AppButton" onClick ={this.addRandomContact}>Add random contact</button>
            <button className="AppButton" onClick ={this.sortByName}>Sort by name</button>
            <button className="AppButton" onClick ={this.sortByPop}>Sort by popularity</button>
          </div>
          <table className="AppTable">
            <thead>
              <tr>
                <td className="AppTableHeaderCell">Picture</td>
                <td className="AppTableHeaderCell">Name</td>
                <td className="AppTableHeaderCell">Popularity</td>
                <td className="AppTableHeaderCell">Action</td>
              </tr>
            </thead>
            <tbody>
            {this.state.contSelect.map((a, i) =>  
            <Artist key={i} 
                    name={a.name} 
                    pictureUrl={a.pictureUrl} 
                    popularity={parseFloat(a.popularity.toFixed(2))}
                    deleteElem={() => {this.deleteElem(i)}}/>
                )}
              {/* parseFloat(avg.toFixed(2)) */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
