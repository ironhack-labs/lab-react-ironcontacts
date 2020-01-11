import React from 'react';

const SortName = ({sortContacts}) => {
    return ( 
        <button onClick={sortContacts}>Sort by Name</button>
     );
}
 
export default SortName;