import React from 'react'

export default function ContactList(props) {
    console.log(props.contact)
    const contacts = props.contact.map(person => {
        return(
            <table key={person.id}>
                <tbody>
                <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                </tr>
                <tr>
                   <td><img src={person.pictureUrl} alt="" width="50"/></td>
                    <td>{person.name}</td>
                    <td>{person.popularity}</td>


                    
                </tr>
                </tbody>
            </table>
        )

    })
    return (
        <div>
           {contacts} 
        </div>
    )
}
