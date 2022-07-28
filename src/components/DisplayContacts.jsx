import React, { Component } from 'react'
// import contacts from '../contacts.json';

export default class DisplayContacts extends Component {

    state = {
        contacts: this.props.contacts,
        displayedContacts: this.props.contacts.splice(0,5),
    };

    addContact = () => {
        var newContact = this.state.contacts[Math.floor(Math.random() * (this.props.contacts.length-5))+5]
        const copy = [...this.state.displayedContacts];
        copy.push(newContact);
        this.setState({displayedContacts:copy});
    }

    sortByName = () => {
        const copy = [...this.state.displayedContacts];
        copy.sort((a,b) => a.name.toUpperCase() > b.name.toUpperCase()? 1: -1);
        this.setState({displayedContacts:copy});
    }

    sortByPopularity = () => {
        const copy = [...this.state.displayedContacts];
        copy.sort((a,b) => a.popularity < b.popularity ? 1: -1);
        this.setState({displayedContacts:copy});
    }

    deleteArtist = index => {
        const copy = [...this.state.displayedContacts];
        copy.splice(index, 1);
        this.setState({displayedContacts:copy});
    };
   
    render() {
        return (
            <div className="displayContacts">
            <div className="btns">
                <button onClick={this.addContact}>Add Random Contact</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.sortByPopularity}>Sort by popularity</button>
            </div>
            
            <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>wonOscar</th>
                            <th>wonEmmy</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {this.state.displayedContacts.length? (<tbody>
                        {this.state.displayedContacts.map((contact,i) => (
                        <tr key={i}>
                            <td><img src={contact.pictureUrl} alt=""/></td>
                            <td>{contact.name}</td>
                            <td>{contact.popularity.toFixed(2)}</td>
                            {contact.wonOscar ? <td className="wonOscar">🏆</td>  : <td className="wonOscar"></td> }
                            {contact.wonEmmy ? <td className="wonEmmy">💥</td>  : <td className="wonEmmy"> </td> }
                            <td><button onClick={() => this.deleteArtist(i)}>Delete</button></td>
                        </tr>
            ))}
                    </tbody>):(
                    <td colSpan="4">No contacts yet!</td>
                )}
                    </table>
            </div>
        )
    }
}