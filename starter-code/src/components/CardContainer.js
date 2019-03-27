import React, { Component } from 'react';
import contacts from '../contacts.json';
import otherContacts from '../contacts.json';
import ContactCard from './ContactCard';
import CoolButton from './CoolButton';


class CardContainer extends Component {
    state = {contacts: contacts.slice(0, 5)}

    addRandomContact = () => {
        const {contacts} = this.state;
        const contactsCopy = [...otherContacts];
        const restOfContacts = contactsCopy.splice(5);
        // console.log('Here!!!', restOfContacts);
        const randomContact = Math.floor(Math.random() * restOfContacts.length);
        // console.log(randomContact);
        const newContact = restOfContacts[randomContact];
        this.setState({contacts: [...contacts, newContact] });
    }

    sortByName = () => {
        // const {contacts: copyOfContacts} = this.state; <= this changes the state which defeats the purpose, therefore below:
        const copyOfContacts = [...this.state.contacts];
        copyOfContacts.sort(function(a,b){
            var x = a.name.toLowerCase();
            var y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        this.setState({contacts: copyOfContacts});
    }

    sortByPopularity = () => {
        const copyOfContacts = [...this.state.contacts];
        copyOfContacts.sort(function(a, b){
            return b.popularity - a.popularity;
        });
        this.setState({contacts: copyOfContacts});
    }

    deleteContact = (contactId) => {
        const {contacts} = this.state;
        const copyOfContacts = [...contacts];
        copyOfContacts.splice(+contactId, 1); // + converts/parses into integer
        this.setState({contacts: copyOfContacts});
    }

    render() {
    
        const {contacts} = this.state;
        // console.log(this.state.contacts);
        return (
            <div>
                <h1>IronContacts</h1>
                <CoolButton onClick={this.addRandomContact} isInfo isSmall>Add Random Contact</CoolButton>
                <CoolButton onClick={this.sortByName} isInfo isSmall>Sort by Name</CoolButton>
                <CoolButton onClick={this.sortByPopularity} isInfo isSmall>Sort by Popularity</CoolButton>
                <table>
                    <tbody>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                        {
                            contacts.map((contact, index)=>
                            // <ContactCard key={index} contact={contact}/>
                            <ContactCard index={index} key={index} contact={contact} deleteMethod={this.deleteContact}/>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CardContainer;