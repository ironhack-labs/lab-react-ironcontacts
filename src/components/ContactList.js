import React from 'react'

export default function ContactList(props) {
    const contacts = props.contact.map((person, index) => {
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
                    <td><button onClick={() => {props.deleteHandler(index)}}>delete</button></td>
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
