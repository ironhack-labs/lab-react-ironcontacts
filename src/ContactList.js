import React from 'react'

export default function ContactList(props) {
    const filtered = props.contacts
    .filter(contact => contact.name.toLowerCase().includes(props.query.toLowerCase()));
        const firstContacts = filtered.map(contact => {
            return (
                <tr key={contact.id}>
                    <td><img style={{ height:"100px"}}src={contact.pictureUrl} alt={contact.name}/></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td><button onClick={()=>props.delete(contact.id)}>Delete</button></td>
                </tr>
            )
        });
        return (
            <div className='App'>

      <table>
      <thead>   
      <tr>
          <th>Picture</th>
          <th>Name</th> 
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        </thead> 
        <tbody>
            {firstContacts} 
            </tbody>  
      </table>
            </div>
    )
}
