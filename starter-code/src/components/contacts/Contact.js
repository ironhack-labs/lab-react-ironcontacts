import React from 'react'
import './Contact.css'

const Contact = ({ name, pictureUrl, popularity, id, deleteContact }) => {

    const roundedPopularity = popularity.toFixed(2)

    return (
        <div className="row justify-content-center align-items-center contact-info">
            <div className="col-sm-2">
                <figure><img src={pictureUrl} alt={name} /></figure>
            </div>
            <div className="col-sm-2">
                <p>{name}</p>
            </div>
            <div className="col-sm-2">
                <p>{roundedPopularity}</p>
            </div>
            <div className="col-sm-2">
                <button onClick={deleteContact}> Delete</button>
            </div>
        </div>
    )
}

export default Contact