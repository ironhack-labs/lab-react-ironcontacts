import React, { Component } from 'react';
import contacts from './contacts.json';
import ContactCard from './ContactCard';


class RandomActor extends Component {

    state = {
        contacts

    }

    randomClickHandler = (index) => {

        let randomContact = this.state.contacts[Math.floor(Math.random() * contacts.length)]
        this.state.contacts.push(randomContact)

        this.setState({
            // filters the clicked-on movie from the array
            contacts: this.state.contacts[Math.floor(Math.random() * contacts.length)]
        })
    }

    render() {

        return (<div>
            <div>
                {this.state.contacts.map((oneContact, index) => {
                    return <ContactCard
                        key={index}
                        // NOTE deleteClick passes down a function as a property !
                        pictureUrl={oneContact.pictureUrl}
                        name={oneContact.name}
                        popularity={oneContact.popularity} />
                })
                }
            </div>
            <div className="App">
                <button onClick={this.state.randomClickHandler}>Add random Actor</button>
            </div>
        </div>
        )

    }
}

export default RandomActor;