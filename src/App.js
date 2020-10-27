import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    celebrities: contacts.slice(0, 5),
  };



  handleRandomCelebrity = () => {
    console.log("function called: ")

    let cloneCelebrities = [...this.state.celebrities]
    

    let randomCelebrity = contacts[Math.floor(Math.random() * contacts.length)]
    cloneCelebrities.push(randomCelebrity)
    
    this.setState({
    celebrities: cloneCelebrities
    })
};


//Sort celebrities by name
  handleSortCelebrities = () => {
    //clone the array first to not update / modify the original array
    let cloneCelebrities2 = [...this.state.celebrities];
    cloneCelebrities2.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    //to actually update the UI
    this.setState({
      celebrities: cloneCelebrities2,
    });
  };

  //Sort celebrities by name
  handleSortCelebritiesByPop = () => {
    let cloneCelebrities3 = [...this.state.celebrities];
    cloneCelebrities3.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else if (a.popularity > b.popularity) {
        return -1;
      } else {
        return 0;
      }
    });
    //to actually update the UI
    this.setState({
      celebrities: cloneCelebrities3,
    });
  };

//Delete celebrities by ID
    handleDeleteCelebrity = (celebId) => {
      console.log("button delete clicked")

      let filteredCelebrities = this.state.celebrities.filter((celebrity) => {
          return celebrity.id !== celebId
      })
      
      this.setState({
        celebrities: filteredCelebrities
      })
    }


  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <button onClick={this.handleRandomCelebrity}>Add Random Contact</button>
      <button onClick={this.handleSortCelebrities}>Sort by name</button>
      <button onClick={this.handleSortCelebritiesByPop}>Sort by popularity</button>


      <table>
        <thead>
        <tr>
          <td>Picture</td>
          <td>Name</td>
          <td>Popularity</td>
        </tr>
        </thead>
        <tbody>
        
        {
          this.state.celebrities.map((celebrity) => {
        return (
        <tr key={celebrity.id} >
          <td>
            <img width="100px" src={celebrity.pictureUrl}/>
            <br/>
            <button onClick={() => { this.handleDeleteCelebrity(celebrity.id) }}>Delete</button>
          </td>
          <td> {celebrity.name} </td>
          <td> {Number(celebrity.popularity.toFixed(2))}  </td>
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
