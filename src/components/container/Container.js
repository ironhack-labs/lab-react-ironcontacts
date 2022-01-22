import React from 'react';

const Container = ( { addContact, sortName, sortPopularity } ) => {
    return(
        <div>
            <button onClick={addContact}>Add contact</button>
            <button onClick={sortName}>Sort by name</button>
            <button onClick={sortPopularity}>Sort by popularity</button>
       </div>
        )
}
export default Container;