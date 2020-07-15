import React from 'react';


export default function ContactsList(props) {
    const contacts = props.contacts.map(contact => {

    
    return (
        <div >
        <table>
        <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
                       
        </tr>
        <tr key={contact.id}>
          <td><img src={contact.pictureUrl} alt= {contact.name}></img></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
        </tr>
          
        </table>
        </div>
        )
})
return <div>{contacts}</div>
}
