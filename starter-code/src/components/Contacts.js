import React from 'react'

import contacts from '../contacts.json'
import './Contact.css';



class Contacts extends React.Component {

    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            // contacts: props.contacts
            contacts: props.contacts.slice(0,5)
        }
    }

    addRandomContact = () => {
        let newState = [...this.state.contacts]
        let num = parseInt(Math.random() * contacts.length)
        newState.push(contacts[num])
        this.setState({
            contacts: newState
        })
    }

    sortByName = () => {
        let sorteByName = this.state.contacts.sort((a,b) => {
            if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            }
         )
         this.setState({
            contacts: sorteByName
        })
    }

    sortByPopularity = () => {
        let sortedByPopularity = this.state.contacts.sort((a,b) => {
            if (a.popularity > b.popularity) {
                return -1;
              }
              if (a.popularity < b.popularity) {
                return 1;
              }
              return 0;
            }
         )
         this.setState({
            contacts: sortedByPopularity
        })
    }

    deleteContact = (contactIndex) => {
        const contactCopy = [...this.state.contacts]
        contactCopy.splice(contactIndex, 1);
        this.setState({
            contacts: contactCopy
        })
    }



    render() {

        return (
            <section className='section'>
                
            
                    <button onClick={this.addRandomContact}>Add Random Character</button>
                    <button onClick={this.sortByName}>Sort by Name</button>
                    <button onClick={this.sortByPopularity}>Sort by Popularity</button>
      

                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                    {this.state.contacts.map(contact => (
                    <tr>
                        <td><img src={contact.pictureUrl} width='100px'></img></td>
                        <td>{contact.name}</td>
                        <td>{contact.popularity}</td>
                        <td><button onClick={this.deleteContact}>Delete</button></td>
                    </tr>
                        ))
                    }
                </table>
    
            </section>
        )
    }
}

export default Contacts


