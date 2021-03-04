import contacts from '../../contacts.json'
import React from 'react';


let sortedContacts = contacts.splice(0, 5)
let restOfContacts = contacts.splice(5)


class ContactList extends React.Component{

    state = {
        contacts: sortedContacts,
    }

    addRandomContact = ()  => {

        this.setState((state) => {
            return {
                contacts: [restOfContacts[Math.floor(Math.random(restOfContacts) * restOfContacts.length)], ...state.contacts ]
            }
           
        })
    }

    sortByName = () => {

        this.state.contacts.sort((a,b) => {
            if(a.name < b.name) {return -1};
            if(a.name > b.name) {return 1};
        });

        this.setState((state) => {
            return {contacts: [...state.contacts]}
        })
        
    };

    sortByPop = () => {
        this.state.contacts.sort((a, b) => {
            if (a.popularity < b.popularity) { return 1 };
            if (a.popularity > b.popularity) { return -1 };
        });

        this.setState((state) => {
            return { contacts: [...state.contacts] }
        })
    };

    deleteContact = (index) => {

        console.log('this.state', this.state.contacts)
        console.log(index)
        let contactList = this.state.contacts
        contactList.splice(index.index, 1)
        console.log('slice', contactList)     

        this.setState((state) => {
            return { contacts: [...this.state.contacts]}
        })
    }


    render(){

        const cardImage = {
            maxHeight:100,
            margin:15
        }
      
        return(
            <div className="border">

                <h1 className="text-center mt-5">Iron Contacts</h1>
                <div className="d-flex flex-row justify-content-around m-5">
                    <button className="btn btn-primary" onClick={this.addRandomContact}>Add Random Contact</button>
                    <button className="btn btn-primary" onClick={this.sortByName}>Sort by Name</button>
                    <button className="btn btn-primary" onClick={this.sortByPop}>Sort by popularity</button>
                </div>
               {this.state.contacts.map((contact, index) => ( 
                   <div key={index} className="d-flex flex-row m-2 justify-content-around card align-items-center">                      
                        <img src={contact.pictureUrl} style={cardImage}/>      
                        <h1>{contact.name}</h1>
                        <h2>{contact.popularity}</h2>
                        <button className="btn btn-danger p-3 px-4" onClick={() => this.deleteContact({index})}>X</button>
                   </div>
               ))}
               
            </div>
        )
    }
    
};

export default ContactList;