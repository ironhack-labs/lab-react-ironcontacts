import React from 'react'

const SortButton = ({ onSort, value }) => {
  return (
    <button onClick={() => onSort(value)}> Sort by {value} </button>
  )
}

export default SortButton
