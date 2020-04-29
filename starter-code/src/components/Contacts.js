import React, { Component } from 'react';
import contacts from '../contacts.json';



const Contacts = ({ contactList, removeContact }) => {
    console.log(contactList)
    
    const newList = [...contactList];
    console.log(newList)
    return (
        <div>
            <h1>IronContacts</h1>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                {newList.map((elem, idx) => {
                    return (
                        <tr key={elem.id}>
                            <td><img src={elem.pictureUrl} style={{height: '100px'}} alt={elem.name + "'s picture"} /> </td>
                            <td>{elem.name}</td>
                            <td>{elem.popularity}</td>
                            <button onClick={() => removeContact(idx)}>Remove from list</button>
                        </tr>
                    )}
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Contacts;