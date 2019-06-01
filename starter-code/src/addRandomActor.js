import React from 'react';
import contacts from '../src/contacts'


const ButtonRandom = ({addContact})=>( 
    <button type="button" class="btn btn-info" onClick={addContact}>Add Random Actor</button>

    )

export default ButtonRandom