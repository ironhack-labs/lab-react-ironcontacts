import React from 'react';
import './CardContact.css';
import { directive } from '@babel/types';

const CardContact = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="card" >
                    <img src={props.picture} alt="contactPicture"/>
                    <h3>{props.name}</h3>
                    <h3>{props.popularity}</h3>
                    <button onClick={() => props.delete(props.index)}>Delete Contact</button>
                </div>
            </div>    
        </div>
        
    )
};

export default CardContact;