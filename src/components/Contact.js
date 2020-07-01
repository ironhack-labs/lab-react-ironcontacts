import React from 'react';

const Contact = props => {
    return (
        <div style={{display: 'flex', padding: '20px', textAlign: 'center'}}>
            {props.contacts.map((a) => {
                return (
                    <tr>
                        <td><img src={a.pictureUrl} alt={a.name} width="40px" height="40px" /></td>
        
                    <td>{a.name}</td>
                
                    <td>{a.populartity}</td>
                    <td><button className="deleteBtn" onClick={() => props.deleteContact(Contact.name)}>Delete</button></td>
                    </tr>
                )
            })}
        </div>
    )
}

export default Contact;