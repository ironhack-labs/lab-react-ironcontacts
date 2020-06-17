import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import List from './components/List'
import Random from './components/Random'
import Sort from './components/Sort'

class App extends Component {

  state = {
    contactsList: contacts.slice(0,5)
  }

  handleRandom = () => {
    let cloneCelebrity = JSON.parse(JSON.stringify(this.state.contactsList))
    let randomCeleb = contacts[Math.floor(Math.random() * contacts.length)];
    cloneCelebrity.push(randomCeleb)

    this.setState({
      contactsList: cloneCelebrity 
    })

  }

  handleSortByName = ()=> {
    let cloneCelebrity = JSON.parse(JSON.stringify(this.state.contactsList))
    cloneCelebrity.sort((a, b) => {
      if (a.name < b.name){
      return -1;
      }
      else if (a.name > b.name){
        return 1;
      }
      return 0;
  })
  this.setState({
    contactsList: cloneCelebrity
  })
  }

  handleSortByPop = ()=> {
    let cloneCelebrity = JSON.parse(JSON.stringify(this.state.contactsList))
    cloneCelebrity.sort((a, b) => {
      if (a.popularity < b.popularity){
      return -1;
      }
      else if (a.popularity > b.popularity){
        return 1;
      }
      return 0;
  })
  this.setState({
    contactsList: cloneCelebrity
  })
  }

  deleteCeleb = (name) => {
    let cloneCelebrity = JSON.parse(JSON.stringify(this.state.contactsList))
    cloneCelebrity = cloneCelebrity.filter((contacts) => {
      return contacts.name !== name;
    });
    this.setState({
      students: cloneCelebrity
    })
}

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <Random 
        onRandom={this.handleRandom}/>
        <Sort 
        onSortName={this.handleSortByName}
        onSortPop={this.handleSortByPop}/>
          {
            this.state.contactsList.map((item, index) => {
              return (
                <>
                  <List
                    key={index}
                    picture={item.pictureUrl}
                    name={item.name}
                    popularity={item.popularity}
                    onDelete={this.deleteCeleb} />
                </>
              )
            })
          }
      </div>
  );
    }
}

export default App;
