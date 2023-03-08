
import './index.css'
import React from 'react'
import trophy from '../../assets/images/trophy.jpg'


class DisplayContacts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            members: props.contacts,
            contactsRender: [...props.contacts].splice(0,5)
        }
    }

    renderContacts = () => {
 
        return this.state.contactsRender.map((contact) => {
            return (
            <div key={contact.id} className='RenderContacts'>
                <table >
                    <tr>
                        <td><img src={contact.pictureUrl}/></td>
                        <td>{contact.name}</td>
                        <td>{contact.popularity}</td>
                        <td>{contact.wonOscar ? <img className="Trophimg" src={trophy}/> : "NO"}</td>
                        <td>{contact.wonEmmy ? <img src={trophy}/> : "NO"}</td>
                    </tr>
                 </table>
            </div>
            )
    })
    }

    handlePushRandomContact = () => {
        const {members, contactsRender} = this.state
        const contactsRandom = [...members].splice(5)
        const indexRandom = Math.floor(Math.random() * (contactsRandom.length - 1))
        const deleteElement = contactsRandom[indexRandom]
        const newContactsRender = [...contactsRender]
        contactsRandom.splice(indexRandom, 1)
        newContactsRender.unshift(deleteElement)

        this.setState({
            contactsRender: newContactsRender
        })
    }
      

    render() {
    
        return (
        <div className='DisplayContacts'>
            <h1>Iron Contacts</h1>
            <button onClick={this.handlePushRandomContact}>Add Random Contact</button>
            <table >
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Won Oscar</th>
                        <th>Won Emmy</th>
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