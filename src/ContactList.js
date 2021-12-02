import React from 'react'

export default function ContactList(props) {
    return (
        <>
            {props.contacts
            .filter(contact => contact.name.toLowerCase().includes(props.queryProp.toLowerCase()))
            .map(contact => {
          return (
            
            <tr key={contact.id}> 
              <td>
                <img src={contact.pictureUrl} alt="" width="60px" />
              </td>
              <td>
                {contact.name}
              </td>
              <td>
                {contact.popularity.toFixed(1)}
              </td>
              <td>
                {contact.wonOscar && <p>🏆</p>}
              </td>
              <td>
                {contact.wonEmmy && <p>🏆</p>}
              </td>
              <td>
                <button onClick={() => props.deleteContactProp(contact.id)} className="deleteButton">Delete</button>
              </td>
            </tr>
           
          )
        }
        )}
        </>
    )
}
