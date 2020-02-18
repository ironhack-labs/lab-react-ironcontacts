import React, {Component} from 'react';
import './../stylesheets/DisplayContacts.css';
// import contacts from './../contacts.json';

// const showContacts = [...contacts.splice(0,5)];
// var reservedContacts = 

export default class DisplayContacts extends Component {
    state = {
        contacts: this.props.contacts,
        displayedContacts: [...this.props.contacts.splice(0,5)],
        reservedContacts: [...this.props.contacts.splice(4, 190)]    
    }

    getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      }

    handleSortByName = (e) => {
        var copy = [...this.state.displayedContacts];
          
          var sortedCopy = copy.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({ displayedContacts: sortedCopy})
    }

      handleSortByPopularity = (e) => {
        var copy = [...this.state.displayedContacts];
        var sortedCopy = copy.sort((a, b) => b.popularity - a.popularity)
        this.setState({ displayedContacts: sortedCopy})
    }

   handleRandomClick = () => {
        var randomCelebIndex = this.getRandomArbitrary(4, (this.state.reservedContacts.length-1));
        var randomCeleb = this.state.reservedContacts[randomCelebIndex];
        this.setState({ displayedContacts: [...this.state.displayedContacts, randomCeleb]})
    }

    handleDelete = (e) => {
        var index = Number(e.target.id)
        var copy = [...this.state.displayedContacts];
        var UpdatedCopy = copy.filter((celeb, i) => index !== i)
        this.setState({ displayedContacts: UpdatedCopy})
    }

    render() {
        console.log(this.state.contacts.length)
        return (
            <div className = "display-contacts">
                <div className="buttons">
                    <button id = "random" onClick={ this.handleRandomClick}>Add random celeb</button>
                    <button id= "name" onClick={ this.handleSortByName }>Sort by name</button>
                    <button id= "popularity" onClick={ this.handleSortByPopularity }>Sort by popularity</   button>
                </div>
                
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                    <tbody>
                    {this.state.displayedContacts.map((contact, i) => (
                        <tr key = {i}>
                            <td><img src = {contact.pictureUrl} alt = {contact.name}/></td>
                            <td>{contact.name}</td>
                            <td>{contact.popularity}</td>
                            <td><button className="delete-btn" id = {i} onClick = {this.handleDelete}>X</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

