import React from 'react';

const Buttons = ({ OnClickAddRandomItem, OnClickSortByName, OnClickSortByRating }) => {
    return(
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary" onClick={OnClickAddRandomItem}>Random contact</button>
        <button type="button" className="btn btn-secondary" onClick={OnClickSortByName}>Sort by name</button>
        <button type="button" className="btn btn-secondary" onClick={OnClickSortByRating}>Sort by rating</button>
      </div>
    )
}

export default Buttons
