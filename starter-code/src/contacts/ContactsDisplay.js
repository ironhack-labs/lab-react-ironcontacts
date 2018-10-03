import React from 'react'
import 'bulma/css/bulma.css';
const ContactsDisplay = ({name,pictureUrl,popularity})=>{

    return(

        <div className='papa' >
            <div className="columns is-size-3">
                <div className="column">
                    <figure className="image is-128x128">
                        <img  src={pictureUrl} alt=""/>
                    </figure>
                </div>
                <div className="column">
                    <h1>{name}</h1>
                </div>
                <div className="column">
                    <p>{popularity} </p>
                </div>
                <div className="column">
                    <a className="button is-danger is-outlined">
                        <span>Delete</span>
                        <span className="icon is-small">
                         <i className="fas fa-times"></i>
                         </span>
                    </a>
                </div>
            </div>

        </div>
    )
};

export default ContactsDisplay