import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import allTheContacts from './contacts.json'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: allTheContacts.slice(0,5),
      theRest:  allTheContacts.slice(5)
    }
  }
  showList = ()=>{
    return(
      this.state.contacts.map((eachCelebrity,i)=>{
        return(
          <div className='eachCelebrity'>
          <img src={eachCelebrity.pictureUrl}></img>
          <p>{eachCelebrity.name}</p>
          <p>{eachCelebrity.popularity}</p>
          <button onClick={()=>{this.deleteCelebrity(i)}}>Delete</button>
          </div>
        )
      })
    );
  }

  chooseRandom = ()=>{
    let i = Math.floor(Math.random() * this.state.theRest.length);
    let clone = [...this.state.contacts];
    let newtheRest = [...this.state.theRest];
    clone.push(newtheRest[i]);
    newtheRest.splice(i,1)
    this.setState({
      contacts: clone,
      theRest: newtheRest
    });
  }

  sortByName = ()=>{
    let clone = [...this.state.contacts];
    let final = clone.sort((a,b)=>{
      if(a.name < b.name){return -1;}
      if(a.name > b.name){return 1;}
      return 0;
    })
    this.setState({contacts: final});
  }

  sortByPopularity = ()=>{
    let clone = [...this.state.contacts];
    let final = clone.sort((a,b)=>{
      if(a.popularity > b.popularity){return -1;}
      if(a.popularity < b.popularity){return 1;}
      return 0;
    })
    this.setState({contacts: final});
  }

  deleteCelebrity = (index)=>{
    let clone = [...this.state.contacts];
    clone.splice(index, 1);
    this.setState({contacts: clone});
  }

  render() {
    return (
      <div className="App">
        <div className='top-sec'>
          <h1>IronContacts</h1>
          <div>
            <button onClick = {()=>{this.chooseRandom()}}>Add Random Contact</button>
            <button onClick = {()=>{this.sortByName()}}>Sort by Name</button>
            <button onClick = {()=>{this.sortByPopularity()}}>Sort by Popularity</button>
          </div>
          <div className='header'>
            <h4>Picture</h4>
            <h4>Name</h4>
            <h4>Popularity</h4>
          </div>
        </div>
        {this.showList()}
      </div>
    );
  }
}

export default App;
