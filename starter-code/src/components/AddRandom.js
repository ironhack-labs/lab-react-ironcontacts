import React from 'react';

const AddRandom = ({addContact}) => {
    return ( 
        <button className="button-list" onClick={() => addContact()}>Add Random Contact</button>
     );
}
 
export default AddRandom;