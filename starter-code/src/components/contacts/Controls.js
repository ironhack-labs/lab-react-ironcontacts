import React from 'react'

const Controls = ({ onClickSortContacts, onClickRandomContact, sortedBy }) => {
  return (
    <div className="btn-group mb-4" role="group" aria-label="Basic example">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={onClickRandomContact}
      >
        +
      </button>

      <button
        type="button"
        className={"btn btn-secondary " + (sortedBy === 'name' && 'active')}
        onClick={() => onClickSortContacts('name')}
      >
        Name
      </button>

      <button
        type="button"
        className={"btn btn-secondary " + (sortedBy === 'popularity' && 'active')}
        onClick={() => onClickSortContacts('popularity')}
      >
        Popularity
      </button>
    </div>
  )
}

export default Controls