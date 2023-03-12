import contactsArr from '../../contacts.json'
import React, { Component } from "react";


const contacts = contactsArr.slice(5, 10);


class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
          contacts: contacts,
          sortedByName: false,
          sortedByPopularity: false,
        };
    };

    addRandom = () => {
        console.log('hola')
        const randomContact =
          contactsArr[Math.floor(Math.random() * contactsArr.length)];
      
        this.setState({
          contacts: [...this.state.contacts, randomContact],
        });
      };

      handleDeleteContact = (id) => {
        const filteredContacts = this.state.contacts.filter((contact) => contact.id !== id);

        this.setState({
            contacts: filteredContacts,
          });
      }

      sortByName = () => {
        let contactsByName = this.state.contacts.sort((a, b) => a.name.localeCompare(b.name));

        this.setState({
            contacts: contactsByName,
            sortedByName: true,
            sortedByPopularity: false,

        })
      }

      sortByPopularity = () => {
        let contactsByPopularity = this.state.contacts.sort((a, b) => b.popularity - a.popularity);
        this.setState({
            contacts: contactsByPopularity,
            sortedByName: false,
            sortedByPopularity: true,

        })
      }

        render() {
            return (
                <>
                <button onClick={ () => this.sortByName() }>Sort By Name</button>
                <button onClick={ () => this.sortByPopularity() }>Sort By Popularity</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Popularity</th>
                            <th scope="col">Won an Oscar</th>
                            <th scope="col">Won an Emmy</th>
                        </tr>
                     </thead>
                    <tbody>
                        {this.state.contacts.map((contact, key) => {
                        return (
                            <tr key={contact.id}>
                            <td>
                            <img className="picture" src={contact.pictureUrl} />
                            </td>
                            <td>{contact.name}</td>
                            <td>{contact.popularity}</td>
                            <td>
                            {contact.wonOscar ? (
                                <i className="bi bi-trophy-fill" />
                            ) : (
                                " "
                            )}
                            </td>
                            <td>
                            {contact.wonEmmy ? (
                                <i className="bi bi-trophy-fill"></i>
                            ) : (
                                " "
                            )}
                            </td>
                            <td>
                            <button onClick={ () => this.handleDeleteContact(contact.id) }>Delete</button>
                            </td>
                        </tr>
                        
                                
                            );
                        })}
                  </tbody>
                </table>
                <button className="btn btn-primary" onClick={this.addRandom}>Add random contact</button>
                </>
             
            );
        }
}



export default Contact;
