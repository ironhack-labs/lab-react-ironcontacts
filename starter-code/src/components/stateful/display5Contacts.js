import React from 'react' 
// import contacts from './contacts.json'

const display5Contacts = props => {
    return (
        <li>
            <img className="photo" src={props.pictureUrl}/>
            <span>{props.name}</span>
            <span>{props.popularity}</span>
        </li>
    )
};

export default display5Contacts;