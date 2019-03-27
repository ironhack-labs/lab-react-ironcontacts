import React from 'react';
import '../App.css';
import CoolButton from './CoolButton';

// function ContactCard({name, picture, popularity}) destructuring below:
function ContactCard({contact, deleteMethod, index})
    {
        const {pictureUrl, name, popularity} = contact;
        return(
            <tr>
                <td><img src={pictureUrl} alt={name} /></td>
                <td>{name}</td>
                <td>{popularity.toFixed(2)}</td>
                <td><CoolButton isDanger onClick={() => deleteMethod(index)}>Delete {' '} </CoolButton></td>
            </tr>
        )
    }

export default ContactCard;