import React, { Component } from 'react';


function Contact (props) {
    return (
        <div className="row">
            <img src={props.pictureUrl} alt=""/>
            <h3>{props.name}</h3>
            <h3>{props.popularity}</h3>
            <button onClick={()=>{props.deleteThisContact(props.index)}}>delete</button>
        </div>
    )
}

export default Contact;
