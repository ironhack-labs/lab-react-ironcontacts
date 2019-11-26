import React, { Component } from 'react'
import allContacts from "./contacts.json";


// Display that array of 5 contacts in a <table>
//and display the picture, name, and popularity of each contact.


export default class Instruments extends Component {
    state = {
        contacts: allContacts.splice(0, 5)
    }
    handleClickRandom = e => {
        const randomIndex = Math.floor(Math.random() * allContacts.length);
        const randomActor = allContacts[randomIndex];
        const contactsCopy = [...this.state.contacts];
        contactsCopy.push(randomActor);
        allContacts.splice(randomIndex, 1);
        this.setState({ contacts: contactsCopy });
    }

    handleClickSortName = e => {
        const contactsCopy = [...this.state.contacts];
        contactsCopy.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            }
            if (a.name < b.name) {
                return -1
            }
            return 0;
        }
        );
        this.setState({ contacts: contactsCopy });
        console.log(contactsCopy);
    }

    handleClickSortPopularity = e => {
        const contactsCopy = [...this.state.contacts];
        contactsCopy.sort((a, b) => a.popularity - b.popularity);
        this.setState({ contacts: contactsCopy });
        console.log(contactsCopy);
    }

    render() {
        console.log(allContacts[0].name);
        return (
            <div>
                <h1>IronContacts</h1>
                <button onClick={this.handleClickRandom}
                >Add random contacts</button>
                <button onClick={this.handleClickSortName}
                >Sort by name</button>
                <button onClick={this.handleClickSortPopularity}
                >Sort by popularity</button>
                <table className="iron-contacts">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.contacts.map((c, i) => (
                            <tr key={i}>
                                <td><img src={c.pictureUrl} alt={c.name} /></td>
                                <td>{c.name}</td>
                                <td>{RoundedTo(2, c.popularity)}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        )
    }
}

//example to show how to declare and create a function
// and having access in our Class
function RoundedTo(roundedValue, number) {
    return number.toFixed(roundedValue);
}