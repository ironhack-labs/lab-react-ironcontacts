import React from 'react';
import App from '../App';

const OneContact = (props) => {

    return (
        <div>
        <td><img src={props.imageURL} ></img></td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
        {/* <td><button onClick={() => this.deleteContactHandler()}>Delete</button></td> */}
        </div>
    )
}


export default OneContact;