import React from 'react';
import contacts from '../src/contacts'


const ButtonRandom = ({action,text})=>( 
    <button type="button" className="btn btn-info mr-2" onClick={action}>{text}</button>

    )

export default ButtonRandom