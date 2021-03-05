import React from 'react'
import Contact from '../contacts/Contact'
import contactsData from '../../contacts.json'
import Button from '../button/Button';

const contacts = contactsData.slice(0, 5);

class ContactList extends React.Component {

    state = {
        contacts,
    };

    addContact = () => {
        if (this.state.contacts.length < contactsData.length){
            var index = 0;
            var item = undefined;
    
            do {
                index = Math.floor(Math.random() * contactsData.length);
                item = contactsData[index];
            } while (this.state.contacts.some(e => e === item) )
    
                
            this.setState((prev) => ({
                contacts: [item, ...prev.contacts]
            }))

        } else {
            alert("No hay más contactos que añadir")
        }
    }

    sortByName = () => {
        this.setState((state) => ({
            contacts: state.contacts.sort((a, b) => (a.name.localeCompare(b.name)))
        }
        ))
    }

    sortByPopularity = () => {
        this.setState((state) => ({
            contacts: state.contacts.sort((a, b) => (b.popularity - a.popularity))
        }
        ))
    }

    deleteContact = (id) => {
        this.setState((prev) => {
            return {
                contacts: prev.contacts.filter(e => e.id !== id)
            }
        })
    }

    render() {


        return (
            <div>
                <div>
                    <Button label="Add Random Contact"
                        onClick={this.addContact} ></Button>
                </div>
                <div>
                    <Button label="Sort by name"
                        onClick={() => { this.sortByName(this.state) }} ></Button>
                </div>
                <div>
                    <Button label="Sort by popularity"
                        onClick={() => { this.sortByPopularity(this.state) }} ></Button>
                </div>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map((contact, i) => (
                            <div key={i}>
                                <Contact
                                    contact={contact}
                                    deleteContact={this.deleteContact}>  </Contact>
                            </div>
                        )
                        )}

                    </tbody>
                </table>
            </div>

        )
    }

}
export default ContactList