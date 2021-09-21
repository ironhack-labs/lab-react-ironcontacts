import React from 'react';

const Lists = ({
    addRandom,
    sortByName,
    sortByPopularity,
}) => (
    <div>
        <button onClick={addRandom}>Add Random Contact</button>
        <button onClick={sortByName}>Sort By Name</button>
        <button onClick={sortByPopularity}>Sort By Popularity</button>
    </div>
);
  
export default Lists;