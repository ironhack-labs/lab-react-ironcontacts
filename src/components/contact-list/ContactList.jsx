import React from 'react'
import Contact from '../contacts/Contact'
import contacts from '../../contacts.json'
import Button from '../button/Button';

const contactsFive = contacts.slice(0,5);

class ContactList extends React.Component{
      
    state = {
        // contacts : contactsFive . Equivale a lo de abajo
        contactsFive ,
    } ;
    
    

    addContact = () => {
        const index = Math.floor(Math.random() * contacts.length);
        const item = contacts[index]
        if (contactsFive.some(e => e === item)) {
            const index = Math.floor(Math.random() * contacts.length);
            const item = contacts[index]
        } else {
            this.setState((prev) => ({
                contactsFive: [item, ...prev.contactsFive]
            }))
        }
    }
    
    sortByName = () => {
        this.setState((state) => ({
            contactsFive: state.contactsFive.sort((a, b) => (a.name.localeCompare(b.name)))}
        ))
    }

    sortByPopularity = () => {
        this.setState((state) => ({
            contactsFive: state.contactsFive.sort((a, b) => (b.popularity - a.popularity))}
        ))
    }
    render(){

        return (
            <>
                <div>
                    <Button label = "Add Random Contact" 
                            onClick={ this.addContact } ></Button>
                </div>
                <div>
                    <Button label = "Sort by name" 
                           onClick={() => { this.sortByName(this.state) }} ></Button>
                </div>
                <div>
                    <Button label = "Sort by popularity" 
                           onClick={() => { this.sortByPopularity(this.state) }} ></Button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contactsFive.map((contact, i) => (
                            <div key={i}>
                                <Contact contact={contact}>  </Contact>
                            </div>
                        )
                        )}
    
                    </tbody>
                </table>
            </>
    
        )
    }
    
}
export default ContactList