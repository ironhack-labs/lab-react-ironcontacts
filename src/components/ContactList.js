import React from 'react';
import '../App.css';
import Card from './Card';
import contacts from '../contacts.json';
import AddButton from './AddButton.js';

class ContactList extends React.Component {
    state = {
        currentContacts: contacts.slice(0,5)
    }
    addRandomContact = () => {
        const randomArray = [...this.state.currentContacts]
        const pushContact = contacts[Math.floor(Math.random() * contacts.length)]
        const contactAlreadyExists = (contact) => contact.id === pushContact.id
        
        if (randomArray.findIndex(contactAlreadyExists) === -1) {
            randomArray.push(pushContact)
        }

        this.setState({currentContacts: randomArray});   
    }

    sortAlphabet = () => {
        const randomArray = [...this.state.currentContacts]
        randomArray.sort((a, b) => {
            if (a.name < b.name){
                return -1
            }
            else if (a.name > b.name){
                return 1
            }
            return 0
        });

        this.setState({currentContacts: randomArray});  
    }

    sortPopularity = () => {
        const randomArray = [...this.state.currentContacts]
        randomArray.sort((a, b) => b.popularity - a.popularity);
        this.setState({currentContacts: randomArray}); 
    }

    deleteContact = (contactId) => {
        const randomArray = this.state.currentContacts.filter((contact) => contact.id !== contactId);
        this.setState({currentContacts: randomArray})
    }
    
    render() {
        return (
        <div className="table-list">
            <div className="button-div">
                <AddButton handleClick={this.addRandomContact}/>
                <button onClick={this.sortAlphabet}> Sort by Name </button>
                <button onClick={this.sortPopularity}> Sort by Popularity </button>
            </div>
            <table>          
                <thead>
                    <tr>
                        <th> Picture </th>
                        <th> Name </th>
                        <th >Popularity </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.currentContacts.map(contact => 
                        (<Card contact={contact} key={contact.id} deleteContact={this.deleteContact}/>)
                    )}    
                </tbody>
            </table>
        </div>
        );
    }
};

export default ContactList;
