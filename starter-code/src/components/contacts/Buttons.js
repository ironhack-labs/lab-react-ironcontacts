import React from 'react'

const Buttons = ({
    randomContact,
    sortByName,
    sortByPopularity
}) => (
    <div className='Buttons col col-12 mt-2 mb-2'>
        <button onClick={randomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
    </div>
)

export default Buttons