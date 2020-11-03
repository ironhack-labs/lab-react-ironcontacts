import React from 'react';

const ActionsContainer = ({ handleAddRadomContact }) => {
  return (
    <div>
      <button onClick={handleAddRadomContact}>Add Radom Contact</button>
      <button>Sort By Name</button>
      <button>Sort By Popularity</button>
    </div>
  )
}

export default ActionsContainer;