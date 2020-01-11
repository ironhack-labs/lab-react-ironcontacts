import React from 'react'

const Buttons = ({
    randomContact,
  /*  sortByName,
    sortByPopularity,*/
    sortByKey
}) => (
    <div className='Buttons col col-12 mt-2 mb-2'>
        <button onClick={randomContact}>Add Random Contact</button>
        <button onClick={() => sortByKey('name')}>Sort by name</button>
        <button onClick={() => sortByKey('popularity')}>Sort by popularity</button>
    </div>
)

export default Buttons