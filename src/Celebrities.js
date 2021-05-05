import React from 'react';

const Celebrities = props => {


    const info = props.contactInfo.map(contact => {
        return (
            <div key={contact.id}>
                <table>
                    <tr>
                        <td><img src={contact.pictureUrl}></img></td>
                        <td>{contact.name}</td>
                        <td>{contact.popularity}</td>
                        <td><button>Delete</button></td>
                    </tr>
                    
                </table>
            </div>
        )
    })
    return (
        <tr>{info}</tr>
    )
}

export default Celebrities;