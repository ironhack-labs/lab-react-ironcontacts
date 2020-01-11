import React from 'react';

const AddRandom = ({addContact}) => {
    return ( 
        <button onClick={() => addContact()}>Add Random Contact</button>
     );
}
 
export default AddRandom;