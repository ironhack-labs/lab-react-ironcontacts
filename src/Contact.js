import React from 'react';
import contacts from './contacts.json';
import ContactList from './ContactList';


class Contact extends React.Component {
    state = {
        contactsLimit: contacts.slice(0, 5)
    }

    addRandomContactHandler = () => {
       const contactsCopy = this.state.contactsLimit;
       const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
       if(!contactsCopy.includes(randomContact)){
           contactsCopy.push(randomContact);
       }
       
       this.setState( {contactsLimit: contactsCopy} )
    }

    sortByNameHandler = () => {
        const contactsCopy = this.state.contactsLimit;
        contactsCopy.sort((a, b) => a.name.localeCompare(b.name));
        this.setState( {contactsLimit: contactsCopy});

    }

    sortByPopularityHandler = () => {
        const contactsCopy = this.state.contactsLimit;
        contactsCopy.sort((a,b) => b.popularity - a.popularity)
        this.setState( {contactsLimit: contactsCopy})
    }

    deleteContactHandler = id => {
        const contactsCopy = this.state.contactsLimit;
        const contactIndex = contactsCopy.findIndex(item => item.id === id);
        contactsCopy.splice(contactIndex, 1);
        this.setState({contactsLimit: contactsCopy})
        
   
    }



    render(){
        return (
            <div>
            <h1>Ironhack Contacts</h1>
            <div className="buttons">
                <button onClick={this.addRandomContactHandler}>AddRandomContact</button>
                <button onClick={this.sortByNameHandler}>SortByName</button>
                <button onClick={this.sortByPopularityHandler}>SortByPopularity</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.contactsLimit.map(item => {
                        return <ContactList key={item.id} {...item} clickToDelete={() => this.deleteContactHandler(item.id)} /> 
                        
                    })}
                </tbody>
            </table>
        </div>

        )
    }
}

export default Contact;