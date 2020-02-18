import React from 'react'
import Card from './Card'


function Cardlist({contacts, deleteContact}) {
    return (
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
                {contacts.map(( contact, index ) => (<Card key={contact.id} contactp ={contact}  index={index} deleteContact={deleteContact}/> ))}
            </tbody>
        </table>
    )
}

export default Cardlist


