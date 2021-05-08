import React from 'react';

const ActionsContainer = ({
    addRandomContact, 
    sortContactsByName, 
    sortContactsByPopularity,
}) => {
    return (
        <div>
            <button onClick={addRandomContact}>Add Random Contact</button>
            <button onClick={sortContactsByName}>Sort By Name</button>
            <button onClick={sortContactsByPopularity}>Sort By Popularity</button>
        </div>
    );
};

export default ActionsContainer;