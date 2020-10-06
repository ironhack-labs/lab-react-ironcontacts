import React from "react";

function Contact(props){
    return (
        <div>
            <table className = "contact-table">
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>  
                </tr>
                <tr>
                    <td><img className="contacts-img" src={props.picture} alt="Picture"/></td>
                    <td>{props.name}</td>
                    <td>{props.popularity}</td>
                    <td><button className="delete-btn" onClick={() => props.deleteContact(props.id)}>Delete</button></td>
                </tr>
            </table>
        </div>
    )
}

export default Contact