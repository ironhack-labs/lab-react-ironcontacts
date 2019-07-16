import React from 'react'

class Contact extends React.Component {
    render() {
        const contact = this.props.data

    return (
        <tr>
            <td><img src={contact.pictureUrl} height='100' alt='photo'/></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td> 
            <td><button onClick={()=>this.props.deleteContact(contact.name)}>Delete</button> </td>
        </tr>


        )
    }
}

export default Contact