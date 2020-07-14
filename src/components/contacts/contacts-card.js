import React from 'react'
import Button from '.././buttons/button';
import './contacts.css'


const ContactCard = ({ name, pictureUrl, popularity, removeContact }) => {
    return (
        <div className="col-md-4 col-sm-6">
            <article className="listing-shot">
                <div class="listing-shot-img">
                    <img alt={name} src={pictureUrl} className="img-responsive" />
                </div>
                <div class="listing-shot-caption">
                    <h3>{name}</h3>

                    <p>Populary: {popularity}</p>
                    <Button onClick={removeContact} className={'btn theme-btn danger'} title='Delete' />
                </div>
            </article>
        </div>
    )
}

export default ContactCard