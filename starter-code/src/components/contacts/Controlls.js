import React from 'react'

const Controls = ({onClickSortContacts, onClickRandomContact }) => {
  return (
  <div className="btn-group btn-group-toggle" data-toggle="buttons">
    <button type="button"
    className="btn btn-secondary"
    onClick={onClickRandomContact}>
      Add
    </button>

    <button type="button"
    className="btn btn-secondary ml-4"
    onClick={() => onClickSortContacts('name')}>
      Sort by Name
    </button>

    <button type="button"
    className="btn btn-secondary ml-4"
    onClick={() => onClickSortContacts('popularity')}>
      Sort by Popularity
    </button>     
  </div>
  )
}

export default Controls;