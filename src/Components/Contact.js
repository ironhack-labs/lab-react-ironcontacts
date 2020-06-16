import React from 'react';
// import contacts from './contacts.json'

function Contact (props) {
        return (
            <div>
                <table>
                    <tr>
                        <td><img src={props.picture} alt=""></img></td>
                        <td>{props.name}</td>
                        <td>{props.popularity}</td>
                        <button onClick={() => {props.delete(props.name)}}>Delete</button>
                    </tr>
                    </table>
            </div>
        )
}

export default Contact;