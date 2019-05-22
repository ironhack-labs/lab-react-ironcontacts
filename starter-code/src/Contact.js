import React from 'react'
import contacts from './contacts.json';


class Contact extends React.Component{
    constructor(props){
        super (props)
        this.state = {
            contacts: contacts,
            firstContacts: contacts.slice(0, 5)
        }
    }
      
    removeContact = (index) => {
        const deleteContact = this.state.firstContacts
        
        deleteContact.splice(index, 1)

        this.setState({ firstContacts: deleteContact})
    }

    render() {
        const { contact } = this.props

        return (
            <tbody className="table-row">
                <tr>
                    <td><img src={contact.pictureUrl} width="15%" alt="img" /></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td><button className="btn btn-secondary" onClick={this.removeContact}>Delete</button></td>
                </tr>
            </tbody>
        );
    }
}

export default Contact  