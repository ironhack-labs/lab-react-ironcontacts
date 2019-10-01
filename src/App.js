import React, { Component } from 'react';
import logo from './logo.svg';
import contacts from "./contacts.json"
import Table from "./Table"
import Contact from "./Contact"
import Button from './Button'
import './App.css';



class App extends Component {
  state = {
    starterContacts : [...contacts].slice(0,5),
    }
    render() {

    const addFunc = () => {
      console.log('sup from addFunc')
      let randomIdx = Math.floor(Math.random()*[...contacts].length)
      let rando = contacts[randomIdx]
      let newContacts = [...this.state.starterContacts]
      newContacts.push(rando)

      this.setState({
        starterContacts : [...newContacts]
      })
    };

    const sortName = () => {
      console.log('sup from sortName')
      let newContacts = [...this.state.starterContacts]

        let sortedContacts = newContacts.sort((a, b) => {
          console.log(a.name, b.name)
          return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
      })

      console.log(sortedContacts[0])

      this.setState({
        starterContacts : [...sortedContacts]
      })
    }
    const sortPop = () => {
      console.log('sup from sortPop')
        let contacts = [...this.state.starterContacts]

        let sortedContacts = contacts.sort((a, b) => {
          return (a.popularity > b.popularity) ? -1 : (a.popularity < b.popularity) ? 1 : 0;
      })


      this.setState({
        starterContacts : [...sortedContacts]
      })
    }

    const deleteOne = (i) => {
      console.log('delete ' + i)
      let contacts = [...this.state.starterContacts]

      contacts.splice(i,1)


    this.setState({
      starterContacts : [...contacts]
    })
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
          <div className="buttons">
          <Button onclick={addFunc} name="add a contact" />
          <Button onclick={sortPop} name="sort by popularity" />
          <Button onclick={sortName} name="sort by name" />
          </div>
        </header>
        <div className="flexy">
          <Table deleteOne={deleteOne} starterContacts={this.state.starterContacts}/>
        </div>
      </div>
    );
  }
}

export default App;
