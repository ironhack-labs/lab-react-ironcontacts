import React from 'react';

const SortPopularity = ({sortPopularity}) => {
    return ( 
        <button className="button-list" onClick={sortPopularity}>Sort by popularity</button>
     );
}
 
export default SortPopularity;
