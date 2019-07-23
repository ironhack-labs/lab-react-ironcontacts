import React from 'react';
import './IronContact.css';



function IronContact(props){

    return(
        <div className="card">
            <img src={props.thePictureUrl} />
            <h2> {props.theName} </h2>
            <h4><span>Popularity Score:</span></h4>
            <p>{props.thePopularity}</p>

            <button onClick = {props.deleteContact}>
                Delete This Contact</button>
           
        </div>
    )



}


export default IronContact;