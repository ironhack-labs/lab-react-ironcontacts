import React from 'react'
import ContactListItem from './ContactListItem'

export default function ContactList(props) {

    console.log('CONTACTLIST COMPONENT',props.list);

    const lista = props.list.map(elem => (
        <ContactListItem 
            pictureUrl={elem.pictureUrl}
            name={elem.name}
            popularity={elem.popularity}
            key={elem.id}
            onDelete={() => props.onDelete(elem.id)}
        />
    ))

    return (
        <table>
            {/* <thead>
                <th>Image</th>
                <th>Name</th>
                <th>Popularity</th>
            </thead> */}
            <tbody>
                {lista}
            </tbody>
        </table>
    )
}
