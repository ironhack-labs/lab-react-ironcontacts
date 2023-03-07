
import './index.css'
import React from 'react'



class DisplayContacts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            members: props.contacts.splice(0,5)
        }
    }

    renderContacts = () => {
        let contactsRender = [...this.state.members]
        return contactsRender.map((contact) => {
            return (
            <div key={contact.id} className='RenderContacts'>
                <table >
              

                    <tr>
                        <td><img src={contact.pictureUrl}/></td>
                        <td>{contact.name}</td>
                        <td>{contact.popularity}</td>
                    </tr>
                 </table>

            </div>
            )
    })
    }

    render() {
    
        return (
        <div className='DisplayContacts'>
            <h1>Iron Contacts</h1>
            <table >
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>

                    <tr>
                        {this.renderContacts()}
                    </tr>
                 </table>

        </div>
        )
    }
}

export default DisplayContacts