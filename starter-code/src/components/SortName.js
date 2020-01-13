import React from 'react';

const SortName = ({sortContacts}) => {
    return ( 
        <button className="button-list" onClick={sortContacts}>Sort by Name</button>
     );
}
 
export default SortName;