import React, { Component } from 'react';
import logo from './logoIronH.png';
import './App.css';
import contacts from './contacts.json';
//import ArtistFile from './components/ArtistFile';
import ArtistFileDisplayer from './components/ArtistFileDisplayer';

class App extends Component {
  constructor() {
        super();
        this.state = {
            artistFiles : [...contacts]
        }
       
        this.tableNameState = true;
        this.tableRatingState = true;

    }

    initializePagew5() {

      this.state.artistFiles = [...contacts];

      let newContacts = [...this.state.artistFiles.sort(function() {return Math.random() - 0.5}).splice(0,5)]

      //newContacts = newContacts.sort(function() {return Math.random() - 0.5}).splice(0,5)
      
      this.setState({
        artistFiles: newContacts
      })
    }

    // addArtist() {

    //   let newContacts = this.state.artistFiles

    //   newContacts.push([...contacts].splice(6,1))
      
    //   this.setState({
    //     artistFiles: newContacts
    //   })
    // }
    
    sortByName() {
      // console.log(this.state.artistFile.name)
      let newContacts = this.state.artistFiles

      const sortBy = fn => (a, b) => {
        const fa = fn(a)
        const fb = fn(b)
        return -(fa < fb) || +(fa > fb)
      }

      const sortDescBy = fn => (a, b) => {
        const fa = fn(a)
        const fb = fn(b)
        return +(fa < fb) || -(fa > fb)
      }

      const getName = o => o.name
      let sortByName;
      if (this.tableNameState) {
        sortByName = sortBy(getName)
       this.tableNameState = false;
      } else {
        sortByName = sortDescBy(getName)
        this.tableNameState = true;
      }
      
      console.log(newContacts.map(getName))

      newContacts = newContacts.sort(sortByName)
      console.log(newContacts)

      this.setState({
          artistFiles: newContacts
      })
  }

  sortByRating() {
    // console.log(this.state.artistFile.rating)
    let newContacts = this.state.artistFiles

    const sortBy = fn => (a, b) => {
      const fa = fn(a)
      const fb = fn(b)
      return -(fa < fb) || +(fa > fb)
    }

    const sortDescBy = fn => (a, b) => {
      const fa = fn(a)
      const fb = fn(b)
      return +(fa < fb) || -(fa > fb)
    }

    const getRating = o => o.popularity
    let sortByRating;
      if (this.tableRatingState) {
        sortByRating = sortBy(getRating)
       this.tableRatingState = false;
      } else {
        sortByRating = sortDescBy(getRating)
        this.tableRatingState = true;
      }
    
    console.log(newContacts.map(getRating))

    newContacts = newContacts.sort(sortByRating)
    console.log(newContacts)

    this.setState({
        artistFiles: newContacts
    })
}


    // clickHeader(chosenSectionId) {

    //     this.setState({
    //         artist : contacts[0]
    //     })
    // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
        </header>
        <button onClick={() => this.initializePagew5()}>Make it 5</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByRating()}>Sort by popularity</button>
        <button onClick={() => this.addArtist()}>Add an artist</button>
        <table className="tableFormat">
          <thead>
          <tr className="thFirstClass">
            <th>Picture</th>
            <th className="thClass">Name</th>
            <th>Popularity</th>
          </tr>
          </thead>
         
            <ArtistFileDisplayer artistFiles={this.state.artistFiles}></ArtistFileDisplayer>
       
        </table>
      </div>
    );
  }
}

export default App;
