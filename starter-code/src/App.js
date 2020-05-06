import React, { Component } from "react"
import "./App.css";
import contacts from "./contacts.json"
import Card from "./components/cards/Card.js"

class App extends Component {
    constructor() {
        super()
        this.contactsCopy = [...contacts]
        this.state = {
            contactsCopy: contacts.splice(0, 5)
        }
    }

    addContactRandom = () => {
        let randomContact = this.contactsCopy[Math.floor(Math.random() * this.contactsCopy.length)]
        this.state.contactsCopy.push(randomContact)
        this.setState({})
    }

    sortByName = () => {
        this.state.contactsCopy.sort( (a,b) => {
            if (a.name > b.name) {
              return 1
            }
            if (a.name < b.name) {
              return -1
            }
            return 0
        })
        this.setState({})
    }

    sortByPopularity = () => {
        this.state.contactsCopy.sort( (a,b) => {
            if (a.popularity > b.popularity) {
              return -1
            }
            if (a.popularity < b.popularity) {
              return 1
            }
            return 0
        }) 
        this.setState({})
    }

    removeContactFromState = idx => {
        this.state.contactsCopy.splice(idx, 1)
        this.setState({})
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.addContactRandom}>Add Contact Random</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.sortByPopularity}>Sort by popularity</button>
                <table>
                    <tbody>
                        {this.state.contactsCopy.map((elm, idx) => (
                        <Card
                        key={elm.id}
                        name={elm.name}
                        pictureUrl={elm.pictureUrl}
                        popularity={elm.popularity}
                        removeContact={() => this.removeContactFromState(idx)}
                        />))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App
