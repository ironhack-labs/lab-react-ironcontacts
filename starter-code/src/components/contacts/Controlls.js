import React from 'react'

const Controls = ({onClickSortContacts, onClickRandomContact }) => {
  return (
  <div className="btn-group btn-group-toggle" data-toggle="buttons">
    <button type="button"
    className="btn btn-secondary"
    onClick={onClickRandomContact}>
      Add
    </button>
  </div>
  )
}

export default Controls;