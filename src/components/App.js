import './App.css'
import contacts from '../contacts.json'
import React from 'react';
import Contact from './Contact'

class App extends React.Component {
    state = {
        contacts: contacts.slice(0, 5)
    };

    addContact = () => {
        this.setState({
            contacts: this.state.contacts.concat([contacts[Math.floor(Math.random() * contacts.length)]])
        });
    };

    sortByName =() => {
        this.setState({
            contacts: this.state.contacts.sort((a, b) => {return (a.name < b.name) ? -1 : 0})
        })
    };

    sortByPopularity = () => {
        this.setState({
            contacts: this.state.contacts.sort((a, b) => {return (a.popularity > b.popularity) ? -1 : 0})
        })
    };

    deleteContact = (name) => {
        this.setState({
            contacts: this.state.contacts.filter((ele) => {return name !== ele.name})
        })
    }


    render() {
        return (
           
           <div>
            <h1>IRON CONTACT</h1>
            <section className="btn">
                <button onClick={this.addContact}>Add Random Contact</button>
                <button onClick={this.sortByName}>sort By Name</button>
                <button onClick={this.sortByPopularity}>sort By Popularity</button>
                </section>

            <table>
                <thead className="thead">
                    <tr className="table-header">
                        <th>PICTURE</th>
                        <th>name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <Contact contacts={this.state.contacts} deleteContact={this.deleteContact} />
            </table>
            </div>
        )
    }

}



export default App;