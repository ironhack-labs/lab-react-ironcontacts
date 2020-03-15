import React from "react"
import "./ContactList.css"

const ContactList = props => {
    const {name, pictureUrl, popularity} = props.contact;
    return (
        <>
        <div className="list-titles">
            <table>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
                <tr>
                    <td>{props.pictureUrl}</td>
                    <td>{props.name}</td>
                    <td>{props.popularity}</td>
                </tr>
            </table>
        </div>
        </>
    );
}

export default ContactList;