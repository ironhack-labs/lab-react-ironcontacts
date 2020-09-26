import React from 'react';

export default function ContactTable(props) {

    const tableLine = props.contacts.map( c => (
        <tr>
            <td><img src={c.pictureUrl} alt="" style={{width: '60px'}}/></td>
            <td>{c.name}</td>
            <td>{(c.popularity).toFixed(2)}</td>
            <td> <button onClick={props.deleteContact} id={c.id}>Delete</button> </td>
        </tr>
    ))

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
            {tableLine}
        </tbody>
        </table>
    )
}
