import React, { Component } from 'react';
import './Contacts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import contacts from '../../contacts.json';


class StarsList extends Component{

    firstContacts = [];
    firstContacts = contacts.slice(0, 5);

    state = {
                contacts: this.firstContacts
    }


    addRandomContact = () => {
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
        const newRandomContact = [...this.state.contacts, randomContact]
        this.setState({ contacts: newRandomContact })
    }


    sortByName = () => {
        const sortedList = this.state.contacts.sort(function (a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        })
        this.setState({ contacts: sortedList })
    }


    sortByPopularity = () => {
        const sortedList = this.state.contacts.sort(function (a, b) {
            if (a.popularity < b.popularity) { return 1; }
            if (a.popularity > b.popularity) { return -1; }
            return 0;
        })
        this.setState({ contacts: sortedList })
    }
    

    removeContact = (_id) => {
        const removedStar = this.state.contacts.filter(contact => contact.id !== _id)
        this.setState({ contacts: removedStar })
    }
    

    
    render() {

    return (
        <div className="App">
            <header className="App-header">

                <h1>IronContacts</h1>
               

                <Row>
                <Button class="btn" onClick={this.addRandomContact}>Add a new star!</Button>
                <Button class="btn" onClick={this.sortByName}>Sort stars by name!</Button>
                <Button class="btn"  onClick={this.sortByPopularity}>Sort stars by fame!</Button>
                </Row>
                
                <table class="table">
                    <tr>
                        <p class="space">*</p>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>

                    {this.state.contacts.map(contact =>
                        <tr>
                            <p class="space">*</p>
                            <td><img src={contact.pictureUrl} alt={contact.name} width={'60px'} height={'90px'} /></td>
                            <td><p>{contact.name}</p></td>
                            <td><p>{contact.popularity}</p></td>
                            <Button class="btn" onClick={() => this.removeContact(contact.id)}>Delete</Button>
                        </tr>
                        
                    )}

                </table>

            </header>
        </div>
    );
    }
}

export default StarsList